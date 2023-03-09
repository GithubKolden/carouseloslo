import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateContext } from '../../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
    <div className='App'>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
    </div>
  </StateContext>
  )
}

