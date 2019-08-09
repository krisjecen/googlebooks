const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const axios = require('axios')
const router = require('express').Router()

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API routes here

// router.get('/recipes', (req, res) => {
//   axios.get(`https://api.edamam.com/search?app_id=${api_id}&app_key=${api_key}&q=${req.query.q}`)
//     .then((results) => {
//       // if (err) throw err
//       console.log(results.data)
//       const { q, hits } = results.data
//       res.json({ recipes: hits })
//     })
//     .catch(err => res.status(422).json(err))
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
