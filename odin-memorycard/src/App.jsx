import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [randomNumbers, setRandomNumbers] = useState([])
  const [highScore, setHighScore] = useState(0)
  const [score, setScore] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [pokeMemory, setPokeMemory] = useState([]) // Pokemons that were displayed to user

  useEffect(() => {
    let randomNumbers = []
    while (randomNumbers.length < 20) {
      let randomNum = Math.floor(Math.random() * (100 - 1) + 1)
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum)
      }
    }
    setRandomNumbers(randomNumbers)
  }, [])

  const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await Promise.all(
          randomNumbers.map((num) => fetch(`https://pokeapi.co/api/v2/pokemon/${num}`))
        )
        const data = await Promise.all(response.map(res => res.json()))
        setPokemons(data)
      } catch (error) {
        console.error(`Error fetching: ${error}`)
      }
    }
    fetchPokemon()
  }, [randomNumbers])


  const randomCard = () => {
    if (pokemons.length === 0) {
      return <div>Loading...</div>
    }
    let randomPokemon = pokemons[Math.floor(Math.random() * (20 - 1) + 1)]
    const pokemonName = randomPokemon.name
    const pokemonSprite = randomPokemon.sprites.front_default

    return (
      <>
        <div className='pokeCard' key={pokemonName}>
          <img src={pokemonSprite} alt={pokemonName} />
          <p className='exo-700 pokemonName'>{capitalizeFirstLetter(pokemonName)}</p>
          <div className='btns exo-700'>
            <button onClick={() => handleClick(pokemonName, true)}>New</button>
            <button onClick={() => handleClick(pokemonName, false)}>Old</button>
          </div>
        </div>
      </>
    )
  }

  function handleClick(pokemonName, option) {
    if (option === true) {
       if (!pokeMemory.includes(pokemonName)) {
         setScore(prevScore => {
          const newScore = prevScore + 1
          if (newScore > highScore) setHighScore(newScore)
          return newScore
        })
        setPokeMemory(prevPokeMemory => [...prevPokeMemory, pokemonName])
       } else {
         setScore(0)
         setPokeMemory([])
      }
    } else if (option === false) {
      if (pokeMemory.includes(pokemonName)) {
        setScore(prevScore => {
          const newScore = prevScore + 1
          if (newScore > highScore) setHighScore(newScore)
          return newScore
        })
        
      } else {
        setScore(0)
        setPokeMemory([])
      }
    }
  }
  

  return (
    <>
      <nav className='exo-700'>
        <p className='title'>PokeMemory</p>
        <div className='scores'>
          <p>Highscore: {highScore}</p>
          <p>Score: {score}</p>
        </div>
      </nav>
      <main>
        {randomCard()}
      </main>
      <footer>
        <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">Pokemon icons created by Those Icons - Flaticon</a>
      </footer>
    </>
  )
}

export default App
