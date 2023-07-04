import { useCatImage } from './customsHooks/useCatImage'
import { useCatFact } from './customsHooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { images } = useCatImage({ fact })
  const handleClick = async () => {
   refreshFact()
  }
  return (
    <main>
      <h1>
        App de gatitos
      </h1>
      <button onClick={handleClick}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {images && <img src={images} alt={`Image extracted using the first three words for ${fact}`} />}
      {images && <p>{images}</p>}
    </main>
  )
}
