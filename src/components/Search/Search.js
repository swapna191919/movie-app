import React, { useState, useEffect } from 'react'
import Cards from '../card/card'
import './Search.css'
const Search = () => {
    const [movie, setMovie] = useState([])
    const [time, setTime] = useState('')
    const handleOnChange = (e) => {
        clearInterval(time)
        const timeOut = setTimeout(() => searchMovie(e.target.value), 500)
        setTime(timeOut)
    }
    function searchMovie(name) {
        fetch(`https://api.themoviedb.org/3/${name ? "search/movie" : "movie/upcoming"}?api_key=73cd4548c861b46a5bf8798b62809e90&language=en-US&query=${name}`)
            .then(res => res.json())
            .then(data => setMovie(data.results));
    }
    useEffect(() => {
        searchMovie()
    }, [])


    return (
        <>
            <div className="main-search">
                <input
                    type="search"
                    onChange={handleOnChange}
                    className='input-search'
                    placeholder='Search here....'
                />
            </div>
            <div className='list-cards'>
                {movie.length <= 0 ?
                    <div>
                        <h1>No Results Found</h1>
                    </div>
                    :
                    movie.map(movie => (
                        <Cards movie={movie} key={movie.title} />
                    ))

                }

            </div>
        </>
    )
}

export default Search