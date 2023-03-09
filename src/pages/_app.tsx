import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <div className='App'>
  <Navbar />
  <Component {...pageProps} />
  </div>
}

