const generateEmployee = ({name}) => ({
  attributes: {
    name: name
  }
})

const generateLink = ({pageLength, pageNumber, query}) =>
  `http://localhost:3001/?per_page=${pageLength}5&page=${pageNumber}&q=${query}`


const generatePayload = ({names, total, pageLength, pageNumber, query}) => {
  return ({
    data: names.map(name => generateEmployee({name})),
    meta: {page: {total}},
    links: {
      self: generateLink({pageNumber, pageLength, query}),
      next: generateLink({pageNumber: +pageNumber + 1, pageLength, query})
    }
  })
}

const getMatches = ({names, query}) => names.filter(name =>
  name
    .toLowerCase()
    .split(' ')
    .some((namePart => namePart.includes(query.toLowerCase())))
)

const getPage = ({elements, pageLength, pageNumber}) =>
  [...elements].splice((pageNumber - 1) * pageLength, pageLength)

module.exports = {generatePayload, getMatches, getPage}