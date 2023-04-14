
/*

const apiKey = 'vX51sD0k2pgkBtQnWr1ye6c2b';
const apiSecretKey = 'LFJEa39qy4dH3jHZfG5AOEFdNyAAI3xH5ogIUyQdSJQ1oIpGmi';
const accessToken = '1646948925587202068-dcZnKEDbcgY64sL1640O2OlrCLvsEi';
const accessTokenSecret = 'j0gAFifZtRvZn2Uoylawh1wVPl8KOpdX4Avl2vYeLEUd3';

*/


require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const apiKey = process.env.TWITTER_API_KEY;
const apiSecretKey = process.env.TWITTER_API_SECRET_KEY;

app.use(express.static('public'));

async function getBearerToken() {
  const response = await axios.post('https://api.twitter.com/oauth2/token', null, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic ' + Buffer.from(apiKey + ':' + apiSecretKey).toString('base64')
    },
    params: {
      grant_type: 'client_credentials'
    }
  });

  return response.data.access_token;
}

app.get('/api/tweets', async (req, res) => {
  try {
    const bearerToken = await getBearerToken();
    const query = encodeURIComponent('#coffeetips');
    const response = await axios.get('https://api.twitter.com/1.1/search/tweets.json', {
      headers: {
        'Authorization': 'Bearer ' + bearerToken
      },
      params: {
        q: query,
        count: 10,
        result_type: 'recent',
        tweet_mode: 'extended'
      }
    });

    res.json(response.data.statuses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch tweets' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
