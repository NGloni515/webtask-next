import type { NextApiRequest, NextApiResponse } from 'next'
import {connectMongo} from '../../../db';
import { Car, EMPTY_CAR } from '../../../models/car.model';
import CarSchema from '../../../db/models/car';

type Data = 
| { msg: string }
| {car: Car|null, msg: string}

connectMongo();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  
  switch( req.method ) {
    case 'GET':
      return getCar(req, res)
    case 'POST':
      return postCar(req, res)
    default:
      return res.status(400).json({
        msg: 'Bad request'
      })
  }
  
}

export const getCar = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  const car : Car | null = await CarSchema.findById('63473e42e75b3ffeef2ad689')
  if(car){
    return res.status(201).json({ car, msg:'Car data retrieved succesfully' })
  }else{
    return res.status(404).json({ msg:'Car does not exist' })
  }
}

export const postCar = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
  const car: any = new CarSchema(req.body)
  try {
    await car.save()
    return res.status(201).send({ car, msg:'Car created succesfully' })
  } catch (e:any) {
    console.log(e)
    return res.status(400).send(e)
  }
}