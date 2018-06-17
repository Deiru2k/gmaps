declare module "gmaps" {
  interface DistanceResponse {
    distance: number;
    duration: number;
  }
  namespace gmaps {
    declare class GmapsClient {
      constructor(API_KEY: string);

      getDistance(origin: [string | number, string | number], destination: [string | number, string | number]): DistanceResponse;
    }
  }
}