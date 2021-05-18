/*
This code should read card info from the `EternalWarcry-data/eternal-cards.json` file,
process it, and output a new json data file for use in the SSG processes to `src/site/_data/cards.json`.

`eternal-cards.json` should be the most recent card info available for download from EternalWarcry.com.
Whenever EW releases a new data file, overwrite the existing source file here and rerun this script.
*/

const fs = require('fs');

fs.readFile('./EternalWarcry-data/eternal-cards.json', (err, data) => {
    if (err) throw err;
    let cards = JSON.parse(data); // get EW card info

    let json = {}; // process card info
    cards.forEach(card => {
        json[card.Name] = card;
    });

    json = JSON.stringify(json); // output file
    fs.writeFile('./src/site/_data/cards.json', json, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
});