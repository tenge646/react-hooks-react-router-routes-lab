import React from 'react';

function Actors() {
  const actors = [
    {
      name: 'Actor 1',
      movies: ['Movie X', 'Movie Y'],
    },
    {
      name: 'Actor 2',
      movies: ['Movie Z', 'Movie W'],
    },
    {
      name: 'Actor 3',
      movies: ['Movie U', 'Movie S'],
    },
    {
      name: 'Actor 3',
      movies: ['Movie I', 'Movie Q'],
    },
  ];

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, actorIndex) => (
        <div key={actorIndex}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movieIndex}>{movie}</li>
            ))} 
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;

