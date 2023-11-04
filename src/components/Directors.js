import React from 'react';

function Directors() {
  const directors = [
    {
      name: 'Director 1',
      movies: ['Movie A', 'Movie B'],
    },
    {
      name: 'Director 2',
      movies: ['Movie C', 'Movie D'],
    },
    // Add more director data here
  ];

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, directorIndex) => (
        <div key={directorIndex}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;

