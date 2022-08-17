import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeores = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
  const {isLoading, data} = useQuery('super-heroes', fetchSuperHeores)

  if(isLoading) {
    return <h2>Loading Superheroes</h2>
  }

  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      {
        data?.data.map(
          hero => <div key={hero.name}>{hero.name}</div>
        )
      }
    </>
  )
}

export default RQSuperHeroesPage