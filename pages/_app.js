import Header from '../components/Header'
import "typeface-roboto";
function MyApp({ Component, pageProps }) {
  return (
  <div style={{color: '#5f5f5f', fontFamily : 'sans-serif'}}>
  <Header />
  <div style={{maxWidth : '800px', margin : 'auto', }}>
  <Component {...pageProps} />
  </div>
  </div>
  )
}

export default MyApp