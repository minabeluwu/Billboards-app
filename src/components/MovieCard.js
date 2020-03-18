import React from "react"

export default ({ Poster, Title, Year, imdbID, Type }) => {
  const imdbLink = `https://www.imdb.com/title/${imdbID}`
  return (
    <div className="card">
      <img className="card-img" src={Poster} alt="" />

      <h2 className="description-title">{Title}</h2>
      <p className="description-desc">Type: {Type}</p>
      <a href={imdbLink} className="imdb" target="noopener noreferrer">
        See in IMDB{" "}
      </a>
    </div>
  )
}
