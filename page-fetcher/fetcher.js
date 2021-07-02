const fs = require('fs');
const net = require('net');
const conn = net.createConnection({ 
  host: 'example.edu',
  port: 80
});
conn.setEncoding('UTF8');

conn.on('connect', () => {
  conn.write(`GET / HTTP/1.1\r\n`);
  conn.write(`Host: example.edu\r\n`);
  conn.write(`\r\n`);
});


conn.on('data', (data) => {

  fs.writeFile(('/home/victor/lighthouse/w2/d3/index.html'), data, err => {
    if (err) {
      console.error(err)
      return
    }
  })

  console.log(`Downloaded and saved ${data.length} bytes to ./index.html`);
  conn.end();
});