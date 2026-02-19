const http = require('http');

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

function post(url, body) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };
    const req = http.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function check() {
  try {
    console.log('Checking API...');
    const res = await get('http://localhost:3000/api/services');
    console.log('GET /api/services:', res.statusCode);
    if (res.statusCode === 200) {
       console.log('Data:', res.data.slice(0, 50) + '...');
    }

    const postBody = JSON.stringify({ name: "Node Check", phone: "+1234567890" });
    const postRes = await post('http://localhost:3000/api/leads', postBody);
    console.log('POST /api/leads:', postRes.statusCode);
    console.log('Response:', postRes.data);

  } catch (e) {
    console.error('Error:', e.message);
  }
}

check();
