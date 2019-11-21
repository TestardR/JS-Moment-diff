const moment = require('moment')

let date1 = "2020-03-01"

date1 = moment(date1).format('YYYY-MM-DD')

const sysDate = moment(Date.now()).format("YYYY-MM-DD")
const diff = moment(sysDate).diff(date1, 'days')
console.log(diff)
const upBound = 3
const downBound = 1

if(diff >= upBound) {
    console.log('orange')
} else if (downBound <= diff && diff < upBound) {
    console.log('red')
} 