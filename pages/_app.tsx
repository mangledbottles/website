import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <script defer data-domain="dermotobrien.me" src="https://plausible.io/js/plausible.js"></script>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
