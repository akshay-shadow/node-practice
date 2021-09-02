const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { registerPartials } = require('hbs')
const geocode = require('./utilities/geocode')
const forecast = require('./utilities/forecast')

app = express()

 const newPath = path.join(__dirname, '../public')
 const viewsPath = path.join(__dirname, '../templates/views')
 const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(newPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'title',
        name: 'name'
    })
})

app.get('/help', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'Enter search term'
        })
    }

    geocode(req.query.search , (error, {lat, long}) => {
        if(error){
            return res.send({
                error: error
            })
        }

        // res.send({
        //     lat, long
        // })
        forecast(lat, long, (error, data) => {
            if(error){
                // return console.log(error)
                return res.send({
                    error: error
                })
            }
            //console.log(data)
            res.send({
                data: data
            })

            console.log(data)
        })
    })

 

})

app.listen(3000, () => {
    console.log('Server is up')
})