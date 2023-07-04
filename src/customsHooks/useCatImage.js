import { useEffect, useState } from 'react'
const CAT_PREFIXER_IMG = 'https://cataas.com'
export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const firtsWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firtsWord}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('error fetching fact')
        return res.json()
      }
      )
      .then(response => {
        console.log(response)
        const { url } = response
        setImage(url)
      }).catch(error => console.log('Error:', error))
  }, [fact])
  return { images: `${CAT_PREFIXER_IMG}${image}` }
}
