// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../db';
import { Car, EMPTY_CAR } from '../../../models/car.model';
import CarSchema from '../../../db/models/car'

type Data = 
| { msg: string }
| {car: Car|null, msg: string}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectMongo();
  const car : Car | null = await CarSchema.findById('63473e42e75b3ffeef2ad689')
    if(car){
      res.status(201).json({ car, msg:'Car data retrieved succesfully' })
    }else{
      res.status(404).json({ msg:'Car does not exist' })
    }  
}
