const http = require('http')
const url = require('url')
const names = require('./names.js')
const {generatePayload, getMatches, getPage, generateEmail} = require('./utility.js')

const employees = names.sort().map((name, index) => ({
  name,
  nameParts: name.toLowerCase().split(' '),
  email: generateEmail({name}),
  id: `${index}`
}))

const server = http.createServer((request, response) => {
  const {query: {per_page: pageLength, page: pageNumber, q: query}} = url.parse(request.url, true)
  if ((typeof query === 'string') && query.includes('err')) {
    response.writeHead(418, {'Content-Type': 'text/json'})
    response.end(JSON.stringify({
      error: 'I’m almost, but not quite, entirely unlike a teapot'
    }))
  }
  else if (pageLength && pageNumber && (typeof query === 'string')) {
    const queries = query.trim().split(' ')
    response.writeHead(200, {
      'Content-Type': 'text/json',
      'Access-Control-Allow-Origin': '*'
    })
    const matches = getMatches({employees, queries})
    const payload = generatePayload({
      employees: getPage({elements: matches, pageLength, pageNumber}),
      total: matches.length,
      pageLength,
      pageNumber,
      query
    })
    setTimeout( // Rough network conditions, carry an umbrella
      () => response.end(JSON.stringify(payload)),
      Math.round(125 + (Math.random() * 125))
    )
  }
  else {
    response.writeHead(400, {'Content-Type': 'text/json'})
    response.end(JSON.stringify({error: 'You must provide the following GET parameters: page, page_number, q'}))
  }
})
server.listen(3001)

console.log('\n  Server running on http://localhost:3001')
console.log('\n  Try this: http://localhost:3001/?per_page=25&page=1&q=nicolas\n')
