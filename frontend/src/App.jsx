import { useEffect, useState } from 'react'
import './App.css'
import { boards } from './data/data'
import BoardList from './BoardList'



function App() {
  const [boardCards, setboardCards] = useState([])
  useEffect(() => {
    setboardCards(boards)

  }, [])


  return (
    <>
      < BoardList boardCards= {boardCards} />
    </>
  )
}

export default App
