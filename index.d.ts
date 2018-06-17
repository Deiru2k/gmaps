export interface DistanceResponse {
  distance: number;
  duration: number;
}

export class GmapsClient {
  constructor(API_KEY: string);

  getDistance(
    origins: Array<[string | number, string | number]>, 
    destinations: Array<[string | number, string | number]>
  ): DistanceResponse;
}