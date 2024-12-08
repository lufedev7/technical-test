import { useCatImage } from './customsHooks/useCatImage'
import { useCatFact } from './customsHooks/useCatFact'
import CountUp from 'react-countup'
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
      <CountUp start={1000} end={1500} duration={1.5} enableScrollSpy />{' '}
      <span className='degradedBlue bg-blueLight'>proyecto</span>
    </main>
  )
}
