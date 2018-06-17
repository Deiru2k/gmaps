declare module "gmaps" {
  export interface DistanceResponse {
    distance: number;
    duration: number;
  }
  
  export default class GmapsClient {
    constructor(API_KEY: string);
  
    getDistance(origin: [string | number, string | number], destination: [string | number, string | number]): DistanceResponse;
  }
}