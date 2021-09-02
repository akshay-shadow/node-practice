console.log('Client side javascript file is loaded!')



const formElement = document.querySelector('form')
const locationNew = document.querySelector('input')
const resultP = document.querySelector('p')

formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const place = locationNew.value
    // console.log(place)

    fetch('http://localhost:3000/help?search=' + place).then((response) => {
        response.json().then((data) => {
            // console.log(data.data)
            // console.log(place + ' temperature is ' + data.data.temp)
            resultP.textContent(data.data.temp)
        })
    })

})