const moment = require('moment')

let date1 = "2064-10-15 00:00:00"
let date2 = "2020-09-11"
let end = '30'

date1 = moment(date1).format('YYYY-MM-DD')
date2 = moment(date2).format('YYYY-MM-DD')


const diff = moment(date1).diff(date2, 'days')
const forcedInt = parseInt(end)

console.log(forcedInt > diff)



