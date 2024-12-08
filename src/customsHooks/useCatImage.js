import { useEffect, useState } from 'react'
import { CAT_PREFIXER_IMG } from '../services/config'
export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const firtsWord = fact.split(' ')[0]
    fetch(`${CAT_PREFIXER_IMG}&q=cat+${firtsWord}&image_type=photo&pretty=true&page=1&per_page=3`)
      .then(res => {
        if (!res.ok) throw new Error('error fetching fact')
        return res.json()
      }
      )
      .then(response => {
        const { hits } = response
        setImage(hits[0].webformatURL)
      }).catch(error => console.log('Error:', error))
  }, [fact])
  return { images:image }
}
