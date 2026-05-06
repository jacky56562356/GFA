import fs from 'fs';
import https from 'https';

const file = fs.createWriteStream("mission_image.jpg");
https.get("https://i.ibb.co/prw8Q6Rh/converted-image.jpg", function(response) {
  response.pipe(file);
});
