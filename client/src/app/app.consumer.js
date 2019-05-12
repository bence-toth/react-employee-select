const prepareQuery = query => query.split(' ').join('+')

export default async ({
  fetchID,
  pageLength,
  pageNumber,
  query,
  URL
}) => {
  const targetURL = URL
    || `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${prepareQuery(query)}`
  try {
    const response = await fetch(targetURL)
    return {
      fetchID,
      ok: response.ok,
      payload: response.json()
    }
  }
  catch (err) {
    return {
      fetchID,
      ok: false,
      payload: null
    }
  }
}
