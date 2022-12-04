const monogoose = require('mongoose')

module.exports = () => (monogoose.connect(process.env.DB_URL)
    .then(() => { console.log("DB connection succesfull") })
    .catch((error) => { console.log("error in DB connection", error) }))

