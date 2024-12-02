import {API_URL} from "../consts/url";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise(resolve => setTimeout(resolve, 2000))
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: { id: string }) {
  const movie = await getMovie(id);
  return <h6>
    {JSON.stringify(movie)}
  </h6>
}