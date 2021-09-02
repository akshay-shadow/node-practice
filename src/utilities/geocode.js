const request = require('request')


const geocode = (city, callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + ".json?access_token=pk.eyJ1IjoiYWtzaGF5YmhvaXIxMCIsImEiOiJja3JtZHlhZ3ExaWUyMm9ydno2bXgzdzUyIn0.j7CIJxSAHJXpZ6f3gb6Dwg&limit=1"

    request({url, json: true }, (error, {body}) =>{
        if(error){
            callback('check internet connection', undefined)
        }else if(body.features.length === 0){
            callback('wrong input', undefined)
        }else{
            callback(undefined, {
                lat: body.features[0].center[0],
                long: body.features[0].center[1]
            })
        }
    })
}


module.exports = geocode