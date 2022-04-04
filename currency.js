
var request = require('request')
const getData = url => new Promise( (resolve, reject) => {
    request(url, (err, res, body) => {
     if (err) reject(new Error('invalid API call'))
     resolve(body)
     })
     })



const aPromise = getData('http://api.fixer.io/latest?base=GBP')

aPromise.then( data => console.log(data))

aPromise.catch( err => console.error(`error: ${err.message}`) )
