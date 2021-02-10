import axios from 'axios'
const url = 'http://178.128.221.77:3000'
const moviesUrl = `${url}/movies/`
const searchUrl = `${url}/filter?search=`
const yearsUrl = `${url}/years`
const genresUrl = `${url}/genres`
const langUrl = `${url}/languages`


export const fetchMoviesBySearch = async (search: string, year: string, genre:string, lang: string, from: string, to: string, page: string) => {
  try {
    let yearAppend = (year === 'undefined' || year === undefined)? '':`&year=${year}`
    let genreAppend = (genre === 'undefined' || genre === undefined)? '':`&genres=${genre}`
    let langAppend = (lang === 'undefined' || lang === undefined)? '':`&languages=${lang}`
    let searchAppend = (search === 'undefined')? '':`${search}`
    let fromAppend = from === 'undefined' ? '0' : from
    let toAppend = to === 'undefined' ? '10' : to
    let filterUrl: string;

    filterUrl = searchUrl + searchAppend + yearAppend + genreAppend + langAppend+`&max=${fromAppend || 0}`+`&min=${toAppend || 10}`+`&page=${page}`

    console.log(filterUrl)
    
    const res = await axios.get(filterUrl)
    return res.data
  } catch (error) { }
}

export const fetchMovies = async (page: string) => {
  try {
    const res = await axios.get(moviesUrl + `?page=${page}`)
    return res.data
  } catch (error) { }
}

export const fetchMovie = async (movieId: string) => {
  try {
    const res = await axios.get(moviesUrl + movieId)
    console.log(res.data)
    return res.data
  } catch (error) { }
}

export const fetchComments = async (movieId: string) => {
  try {
    const res = await axios.get(moviesUrl + movieId + '/comments')
    return res.data
  } catch (error) { }
}

export const login = async (token: string) => {
  try {
    const res = await axios.post('http://178.128.221.77:3000/login', {
      "google_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjAzYjJkMjJjMmZlY2Y4NzNlZDE5ZTViOGNmNzA0YWZiN2UyZWQ0YmUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTc1NTA0MTI4MzU0MTY2NDQyMDUiLCJhdF9oYXNoIjoicFZKZEdqUTMtcFNVRXduSEZUeHE5QSIsImlhdCI6MTYxMjcyMjM2MCwiZXhwIjoxNjEyNzI1OTYwfQ.kusg5mL-YFbEzj2mHbyM0k20pNNpBx9RvmD9HnFvY-XQOpSxuzasJXemPTaSW2Sw09qC2HtHanAY_Qkdc0AsevTlNki-kDlSsX1fzY0q6i43UMCtGHok8nrS4z5yamYYxv14Zjs3x0T0f27CIICWbYB1qimh5hrfst_Jdbo-KjCu5c3pVv-cB1ojLgF-xWEOGne8E07inJpX5UCMlNkbv93eZ3K3EHZi4iA2exLegidxaz2ZNTnjc7D6jiNW7XSzzNPl-BjzqSwXTheVPlzFf7TNmTcP3fMMSdZPUsim7FLertEQELxQv0HiWDYZA5VcrvhZf5czG9fZG6TWOAq78A"
    })
    console.log(res)
  } catch (error) { }
}

export const fetchYears = async () => {
  try {
    const res = await axios.get(yearsUrl)
    return res.data
  } catch (error) { }
}

export const fetchGenres = async () => {
  try {
    const res = await axios.get(genresUrl)
    return res.data
  } catch (error) { }
}

export const fetchLanguages = async () => {
  try {
    const res = await axios.get(langUrl)
    return res.data
  } catch (error) { }
}
