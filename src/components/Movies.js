import React from 'react';

function Movies() {
  const movies = [
    {
      title: 'Movie 1',
      time: '2 hours',
      genres: ['Action', 'Adventure'],
    },
    {
      title: 'Movie 2',
      time: '1.5 hours',
      genres: ['Drama', 'Romance'],
    },
    {
      title: 'Movie 3',
      time: '1.5 hours',
      genres: ['Drama', 'Horror'],
    },
  ];

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, genreIndex) => (
              <li key={genreIndex}>{genre}</li>
            ))} 
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
