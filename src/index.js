import gmaps from '@google/maps';
import { getDistance } from './distance';

class GmapsClient {
  constructor(API_KEY) {
    super();

    this.client = gmaps.createClient({ key: API_KEY });
  }

  getDistance(origin, destination) {
    return getDistance(this.client, origin, destination);
  }
}
