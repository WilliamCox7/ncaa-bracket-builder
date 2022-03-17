const axios = require('axios');
const config = require('./config');

const YEAR = (new Date()).getFullYear();
const DATA = config[YEAR];

const BRACKET = {
  west: [],
  east: [],
  south: [],
  midwest: [],
};

const main = async () => {

  if (!DATA) {
    console.log(`Missing Config For ${YEAR}`);
    process.exit(0);
  }

  const playIn = await axios.get(`https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates=${DATA.dates[0]}`);

  console.log(`Play In ${DATA.dates[0]}\n------------------------------------------`);
  console.log(`(${playIn.data.events[0].shortName}) - ${playIn.data.events[0].name}`);
  console.log(`(${playIn.data.events[1].shortName}) - ${playIn.data.events[1].name}`);

}

main();