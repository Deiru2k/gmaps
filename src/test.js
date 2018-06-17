import {GmapsClient} from './index';

const client = new GmapsClient('AIzaSyCHVx2AH9Y2EWAtvxgI9FsExHMAXSyfC8g');

client.getDistance([[55.788962, 37.572586]], [[55.792939, 37.584902]]).then(response => {
  console.log(response);
});