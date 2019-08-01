const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c44692f84b48c6a1ab1a0c6a3461b344/'+latitude+','+longitude+'?units=si';
    request({url, json:true}, (error, { body }) => {
        if(error) {
            callback('Cannot connect to the service', undefined)
        } else if (body.error) {
            callback('Wrong city.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Currently is ' + body.currently.temperature + ' degrees. There\'s '+ body.currently.precipProbability + '% of rain.')
        }
    }) 
}

module.exports = forecast;