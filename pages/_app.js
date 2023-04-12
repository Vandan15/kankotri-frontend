import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import '../styles/kankotri.css';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
