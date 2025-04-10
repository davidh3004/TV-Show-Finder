import React from 'react';

export function Shows({search}) {
    console.log(search);
    return (
        <div className="shows">
            {search.map((show) => (
                <div key={show.show.id} className="show-card">
                    <a href={show.show.url} target="_blank" className="show-link">
                    <img className='card-bg' src={show.show.image?.medium} alt={show.show.name} />
                    <div className="card-content">
                        <h2>{show.show.name}</h2>
                        <p><b>Premiered:</b> {show.show.premiered}</p>
                        <p><b>🌟: </b>{show.show.rating.average ? show.show.rating.average : 'No Rating'}</p>
                    </div>
                    </a>
                </div>
            ))}
        </div>
    );
    }