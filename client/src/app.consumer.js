export default async ({pageLength, pageNumber, query}) => {
  const url = `http://localhost:3001/?per_page=${pageLength}&page=${pageNumber}&q=${query}`
  const response = await fetch(url)
  return response.json()
}
