import _ from 'lodash';

export function getDistance(apiClient, origins, destinations, mode) {
  const response = apiClient.distanceMatrix({ origins, destinations, mode, units: "metric" });

  const distance = _.get(response, 'rows.0.elements.0.distance.value');
  const duration = _.get(response, 'rows.0.elements.0.duration.value');
  
  return { distance, duration };
}
