const express = require('express')
const app = express()

const REDIRECT_URL = process.env.AUTHORIZED_REDIRECT_URL || 'http://localhost:28088/auth/google/callback?code=testcode'

app.get('/', (req, res) => {
  res.send('mock-auth')
})

app.get('/mock-auth', (req, res) => {
  console.log('mock-auth')
  console.log(req.query)
  res.redirect(REDIRECT_URL)
})

app.post('/mock-token', (req, res) => {
  console.log('mock-token')
  res.status(200).json({
    access_token: '1/fFAGRNJru1FTz70BzhT3Zg',
    expires_in: 3920,
    token_type: 'Bearer',
    refresh_token: '1/xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI'
  })
})

app.get('/mock-user', (req, res) => {
  console.log('mock-user')
  res.status(200).json({
    id: '108442171748001887974',
    emails: [
      {
        type: 'account',
        value: 'test.user@newthings.co'
      }
    ],
    displayName: 'Test User',
    name: {
      familyName: 'User',
      givenName: 'Test'
    },
    image: {
      url:
        'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'
    }
  })
})

app.listen(8081, () => console.log(`Mock auth listening on port 8081! (AUTHORIZED_REDIRECT_URL=${REDIRECT_URL})`))
