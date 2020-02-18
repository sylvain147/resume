import Header from '../components/Header'
import "typeface-roboto";
function MyApp({ Component, pageProps }) {
  return (
  <div style={{maxWidth : '800px', margin : 'auto', color: '#5f5f5f', fontFamily : 'sans-serif'}}>
  <Header /><Component {...pageProps} />
  </div>
  )
}

export default MyApp