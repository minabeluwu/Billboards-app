import React, { useState } from "react"
import MovieCard from "./components/MovieCard"

/**
 * API Key para conectar a OMDB
 * @type {String}
 */
const API_KEY = "44c3dae1"

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [userInput, setUserInput] = useState("")

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleChange = event => {
    setUserInput(event.target.value)
  }

  /**
   *
   * @param {React.FormEvent<HTMLFormElement>} event este es el evento que le pasa la funcion onSubmit a nuestro metodo
   */
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${userInput}`).then(
      resp => {
        resp.json().then(json => {
          json.Search && setSearchResults(json.Search)
        })
      }
    )
  }

  const listOfMovies = searchResults.map(movie => (
    <MovieCard {...movie}></MovieCard>
  ))

  return (
    <div className="main">
      <h1 className="title">Billboards</h1>

      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={userInput}
          onChange={handleChange}
        />

        <button className="form-button">Search</button>
      </form>

      {/* Resultados */}
      <div className="results flex-container">{listOfMovies}</div>
    </div>
  )
}

export default App
