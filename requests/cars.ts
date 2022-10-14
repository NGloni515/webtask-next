// const {axios} = require('axios');
import { EMPTY_CAR, Car } from '../models/car.model';

export const getCars = async( ) => {
    const response = await fetch(`/api/cars`);
    const data = await response.json();
    return data.car as Car;
}