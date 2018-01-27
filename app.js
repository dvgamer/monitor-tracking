// const cron = require('cron')
const Monitor = require('ping-monitor')

var monit = new Monitor({
  website: process.env.MONITOR_HOST || '127.0.0.1',
  interval: 1
})

monit.on('up', res => {
  console.log('Yay!! ' + res + ' is up.')
})

monit.on('down', res => {
  console.log('Oh Snap!! ' + res.website + ' is down! ' + res.statusMessage)
})

monit.on('error', res => {
  console.log('Oh Snap!! An unexpected error occured trying to load ' + res.website + '!')
  // monit.stop()
})

monit.on('stop', website => {
  console.log(website + ' monitor has stopped.')
})

// let jobDelete = new cron.CronJob({
//   cronTime: '0 0 * * *',
//   onTick: async () => {
//   },
//   start: true,
//   timeZone: 'Asia/Bangkok'
// })
