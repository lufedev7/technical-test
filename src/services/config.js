const { VITE_API_KEY } = import.meta.env
export const CAT_PREFIXER_IMG = `https://pixabay.com/api/?key=${VITE_API_KEY}`
export const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'