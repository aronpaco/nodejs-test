const fs = require('fs');

const files = fs.readdirSync('./')
console.log(files);

const files2 = fs.readdir('./', function(err, files2) {
    if (err) console.log('Error kek', err);
    else console.log('Result kek', files2)
});
console.log(files2);
