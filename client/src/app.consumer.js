const prepareQuery = query => query.split(' ').join('+')

export default async ({pageLength, pageNumber, query, URL, fetchID}) => {
  const targetURL = URL
    || `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${prepareQuery(query)}`
  const response = await fetch(targetURL)
  return {payload: response.json(), fetchID}
}
