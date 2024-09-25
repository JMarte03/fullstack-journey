const express = require('express') //importing express
const app = express() //storing all express features into 'app'
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Benett',
        'birthLocation': 'Chicago, Illinois',
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan',
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //start wherever the server.js file is, and find the index.html
})

app.get('/api/:rapperName', (request, response)=>{ //network request with query parameters
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]){ //accessing the rappers object[query parameter = rappersName]
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on ${PORT}`)
})