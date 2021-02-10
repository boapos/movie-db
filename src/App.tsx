import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import MovieList from './components/MovieList';
import { Route } from 'react-router-dom'
import MoviePage from './components/MoviePage';
import SearchList from './components/SearchList';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import FilterButton from './components/filter/FilterButton';
import FilterOptions from './components/filter/FilterOptions';
import { fetchGenres, fetchLanguages, fetchYears, login } from './service'
import Profile from './components/Profile';
import Footer from './components/Footer';

const App = () => {
  const { isLoading } = useAuth0()
  const { getAccessTokenSilently } = useAuth0()
  const { isAuthenticated } = useAuth0()
  const [toggleFilter, setToggleFilter] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const [years, setYears] = React.useState([])
  const [genres, setGenres] = React.useState([])
  const [languages, setLanguages] = React.useState([])

  // if(isAuthenticated) {
  //   getAccessTokenSilently().then(token =>
  //     login(token)
  //   )
  // }

  // React.useEffect(() => {
  //   login()
  // },[])

  // React.useEffect(() => {
  //   getAccessTokenSilently().then(token =>
  //     login(token)
  //   )
  // }, [])
  React.useEffect(() => {
    fetchYears().then(yearsData => setYears(yearsData))
    fetchGenres().then(genresData => setGenres(genresData))
    fetchLanguages().then(langData => setLanguages(langData))
  }, [])

  if(isLoading) return <div>Loading...</div> // make component for this pls
  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      <LandingPage />
      <div className="main-content">
        <Route path='/' exact component={HomePage} />
        <Route path='/browse' component={() => (<FilterButton toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />)} />
        <Route path='/browse' component={() => (<FilterOptions toggleFilter={toggleFilter} query={query} years={years} genres={genres} languages={languages} />)} />
        <Route path='/browse/page=:page' component={MovieList} />
        <Route path='/browse/query=:query/year=:year/genre=:genre/lang=:lang/from=:from/to=:to/page=:page' exact component={SearchList} />
        <Route path='/browse/query=:query/page=:page' exact component={SearchList} />
        <Route path ='/movies/:id' exact component={MoviePage} />
        <Route path = '/profile' exact component={Profile} />
      </div>
      {/* <Route path='/' component={Footer} /> */}
    </>
  );
}

export default App;
