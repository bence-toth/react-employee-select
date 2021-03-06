const generateEmployee = ({id, name}) => ({
  id,
  attributes: {
    name,
    avatar: (name === 'Nicolas Cage')
      ? 'http://www.placecage.com/100/100'
      : null
  }
})

const generateInclude = ({id, email}) => ({
  id,
  attributes: {email}
})

const generateLink = ({pageLength, pageNumber, query}) =>
  `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${query}`

const generatePayload = ({employees, total, pageLength, pageNumber, query}) => ({
  data: employees.map(({id, name}) => generateEmployee({id, name})),
  included: employees.map(({id, email}) => generateInclude({id, email})),
  meta: {page: {total}},
  links: {
    next: generateLink({pageNumber: +pageNumber + 1, pageLength, query})
  }
})

const getMatches = ({employees, queries}) => employees.filter(({nameParts}) => (
  (queries[0].length === 0) ||
    queries
      .every(query => nameParts.some(
        namePart => namePart.includes(query.toLowerCase())
      ))
))

const getPage = ({elements, pageLength, pageNumber}) =>
  [...elements].splice((pageNumber - 1) * pageLength, pageLength)

const generateEmail = ({name}) => {
  const [firstName, lastName] = name.toLowerCase().split(' ')
  return `${firstName}.${lastName}@example.com`
}

module.exports = {generatePayload, getMatches, getPage, generateEmail}