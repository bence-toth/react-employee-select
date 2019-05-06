const http = require('http')
const url = require('url')
const names = require('./names.js')
const {generatePayload, getMatches, getPage} = require('./utility.js')

const employees = names.sort().map(name => ({
  name,
  nameParts: name.toLowerCase().split(' '),
  department: ['Human Resources', 'Research & Development', 'Sales', 'Marketing', 'Support', 'Legal'][Math.floor(Math.random() * 6)]
}))

const server = http.createServer((request, response) => {
  const {query: {per_page: pageLength, page: pageNumber, q: query}} = url.parse(request.url, true)
  if (pageLength && pageNumber && query) {
    response.writeHead(200, {
      'Content-Type': 'text/json',
      'Access-Control-Allow-Origin': '*'
    })
    const matches = getMatches({employees, query})
    const payload = generatePayload({
      employees: getPage({elements: matches, pageLength, pageNumber}),
      total: matches.length,
      pageLength,
      pageNumber,
      query
    })
    response.end(JSON.stringify(payload))
  }
  else {
    response.writeHead(400, {'Content-Type': 'text/json'})
    response.end(JSON.stringify({error: 'You must provide the following GET parameters: pageLength, pageNumber, query'}))
  }
})
server.listen(3001)

console.log('\n  Server running on http://localhost:3001')
console.log('\n  Try this: http://localhost:3001/?per_page=25&page=1&q=nicolas\n')
