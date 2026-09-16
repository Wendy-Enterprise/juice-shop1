const { exec } = require('child_process')

module.exports = function demoCommandInjection () {
  return (req, res) => {
    const userInput = req.query.name
    exec('echo ' + userInput, (error, stdout) => {
      res.send(stdout)
    })
  }
}