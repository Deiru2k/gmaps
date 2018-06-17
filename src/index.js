import gmaps from '@google/maps';
import { getDistance } from './distance';

export class GmapsClient {
  constructor(API_KEY) {
    this.client = gmaps.createClient({ key: API_KEY });
  }

  getDistance(origins, destinations) {
    return getDistance(this.client, origins, destinations);
  }
}
