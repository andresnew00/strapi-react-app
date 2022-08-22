// POST data for new build:
var axios = require('axios');
var data = JSON.stringify({
  "data": {
    "title": "Pikachu Libre",
    "level": 99,
    "gender": "Male",
    "pokemonName": "Pikachu",
    "happyness": 255,
    "moveSet": {
      "Move1": "Substitute",
      "Move2": "Thunderbolt",
      "Move3": "Hidden Power Ice",
      "Move4": "Extreme Speed"
    },
    "stats": {
      "Defense": "4",
      "SpA": "252",
      "Spe": "252"
    },
    "ability": "Static",
    "item": "Light Ball",
    "nature": "Timid",
    "buildDescription": "Sample set. Stay tuned for updates!"
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:1337/api/builds',
  headers: { 
    'Authorization': 'Bearer a9d85f2f29c03c67fa8211cccd1fe2b8eca9c4207b359c54356246176b51cd274acfdf89916af0155ab7f6b2de45cb8ccd44fd84911b3a93f07b3f70b1041dafa7a6939274452dbe863c306b5de87642eac4620100bae11090627601670dd49de4b1318b4f6c0a72c79cd56df785ca1aa35b860727a6003f507d7c32a73b7c19', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
