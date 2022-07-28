import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SuperHeroesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
        .then(res => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch(error => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
    return <h2>{error}</h2>
    }

    return (
        <div>
            <h2>SuperHeroesPage</h2>
            {
                data.map(hero => (
                    <div key={hero.name}>{hero.name}</div>
                ))
            }
        </div>
    )
}

export default SuperHeroesPage