import { CAR_1 } from "../../constants/carData";
import httpMocks from 'node-mocks-http'
import { NextApiRequest, NextApiResponse } from "next";
import * as carAPI from "../../pages/api/cars"


export const mocksInit = () => {
    
    //@ts-ignore
    carAPI.getCar = jest.fn((req,res) => {
    console.log('getCar...', req.method);
    switch(req.method) {
        case ("GET"): {
            return CAR_1;
        }
    }}
   );

   //@ts-ignore
   carAPI.postCar = jest.fn((req,res) => {
    console.log('getCar...', req.method);
    switch(req.method) {
        case ("POST"): {
            return CAR_1;
        }
    }}
   );
}

mocksInit();

describe('Car API', () => {

    test('GET Car', async() => {
        const mockReq = httpMocks.createRequest<NextApiRequest>();
        const mockRes = httpMocks.createResponse<NextApiResponse>();
        mockReq.method = "GET"
        const car = await carAPI.getCar(mockReq,mockRes)
        expect(CAR_1).toBe(car);
    })

    test('POST Car', async() => {
        const mockReq = httpMocks.createRequest<NextApiRequest>();
        const mockRes = httpMocks.createResponse<NextApiResponse>();
        mockReq.method = "POST"
        const car = await carAPI.postCar(mockReq,mockRes)
        expect(CAR_1).toBe(car);
    })
  
  });