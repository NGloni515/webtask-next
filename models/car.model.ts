export type Car = {
    name: string;
    year: number;
    priceMin: number;
    priceMax: number;
    mileage: number;
    itemNumber: number;
    vin: string;
    views: number;
    saves: number;
    shares: number;
    extrior: Exterior;
    performance: Performance;
    imagesUrls: string[];
};

export type Exterior = {
    cylinders: number;
    cityMpg: number;
    highMpg: number;
    engine: number;
}

export const EMPTY_EXTERIOR = {
    cylinders: 0,
    cityMpg: 0,
    highMpg: 0,
    engine: 0,
}

export type Performance = {
    cylinders: number;
    cityMpg: number;
    highMpg: number;
    engine: number;
}

export const EMPTY_PERFORMANCE = {
    cylinders: 0,
    cityMpg: 0,
    highMpg: 0,
    engine: 0,
}

export const EMPTY_CAR: Car = {
    name: '',
    year: 0,
    priceMin: 0,
    priceMax: 0,
    mileage: 0,
    itemNumber: 0,
    vin: '',
    views: 0,
    saves: 0,
    shares: 0,
    extrior: EMPTY_EXTERIOR,
    performance: EMPTY_PERFORMANCE,
    imagesUrls: [],
};