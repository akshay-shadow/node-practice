const request = require('request')

const forecast = (lat, long, callback) =>{
    url = "http://api.weatherstack.com/current?access_key=2d63b89722f687e3efa928c6cf733a64&query=" + lat + ',' + long

    request({url, json: true}, (error, body) =>{
        if(error){
            callback('Internet connection issue', undefined)
        }else if(body.body.current === 0){
            callback('Wrong input', undefined)
        }else{
            callback(undefined, {
                temp: body.body.current.temperature
            })
        }
    })
}


module.exports = forecast