import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then(newSetFact => setFact(newSetFact)).catch(error => console.log(error))
  }
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}
