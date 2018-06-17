import gmaps from '@google/maps';
import { getDistance } from './distance';

class GmapsClient {
  constructor(API_KEY) {
    this.client = gmaps.createClient({ key: API_KEY });
  }

  getDistance(origins, destination) {
    return getDistance(this.client, origins, destination);
  }
}

export default GmapsClient;
