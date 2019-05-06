const generateEmployee = ({employee: {name, department}}) => ({
  attributes: {
    name,
    department,
    avatar: (name === 'Nicolas Cage') ? 'http://www.placecage.com/100/100' : null
  }
})

const generateLink = ({pageLength, pageNumber, query}) =>
  `http://localhost:3001/?per_page=${pageLength}5&page=${pageNumber}&q=${query}`


const generatePayload = ({employees, total, pageLength, pageNumber, query}) => {
  return ({
    data: employees.map(employee => generateEmployee({employee})),
    meta: {page: {total}},
    links: {
      self: generateLink({pageNumber, pageLength, query}),
      next: generateLink({pageNumber: +pageNumber + 1, pageLength, query})
    }
  })
}

const getMatches = ({employees, query}) => employees.filter(({nameParts}) =>
  nameParts.some((namePart => namePart.includes(query.toLowerCase())))
)

const getPage = ({elements, pageLength, pageNumber}) =>
  [...elements].splice((pageNumber - 1) * pageLength, pageLength)

module.exports = {generatePayload, getMatches, getPage}