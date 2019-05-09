const prepareQuery = query => query.split(' ').join('+')

export default async ({pageLength, pageNumber, query, URL, fetchID}) => {
  const targetURL = URL
    || `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${prepareQuery(query)}`

  try {
    const response = await fetch(targetURL)
    return {ok: response.ok, payload: response.json(), fetchID}
  }
  catch (err) {
    return {
      ok: false,
      payload: null,
      fetchID
    }
  }
}
