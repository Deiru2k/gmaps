import _ from 'lodash';

export function getDistance(apiClient, origins, destinations, mode = "driving") {
  return apiClient.distanceMatrix({ origins, destinations, mode, units: "metric" })
    .asPromise()
    .then((response) => {
      const distance = _.get(response.json, 'rows.0.elements.0.distance.value');
      const duration = _.get(response.json, 'rows.0.elements.0.duration.value');
      
      return { distance, duration };
    });
}
