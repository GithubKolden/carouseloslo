import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./navbar";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StateContext } from '../../context/StateContext';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
    <div className='App'>
      <Toaster />
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </div>
  </StateContext>
  )
}

