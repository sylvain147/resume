import Header from '../components/Header'
import Footer from '../components/Footer'
import "typeface-roboto";
function MyApp({ Component, pageProps }) {
  return (
  <div style={{color: '#5f5f5f', fontFamily : 'sans-serif'}}>
  <Header />
  <div style={{maxWidth : '800px', margin : 'auto', height : '100%'}}>
  <Component {...pageProps} />
  </div>
  <Footer />
  </div>
  )
}

export default MyApp