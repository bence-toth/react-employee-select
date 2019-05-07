export default async ({pageLength, pageNumber, query, URL}) => {
  const targetURL = URL || `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${query}`
  const response = await fetch(targetURL)
  return response.json()
}
