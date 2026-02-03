const https = require('https')

const data = JSON.stringify({
  type: 'mcp',
  action: 'list_projects',
  data: {}
})

const req = https.request(
  'https://integrator.app.thecoderegistry.com/api/ai/router',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'X-API-Key': 'your-api-key'
    }
  },
  res => {
    let body = ''
    res.on('data', chunk => (body += chunk))
    res.on('end', () => console.log(body))
  }
)

req.on('error', console.error)
req.write(data)
req.end()
