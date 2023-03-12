import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "./navbar";
import CssBaseline from '@mui/material/CssBaseline';
import { StateContext } from '../../context/StateContext';
import { Toaster } from 'react-hot-toast';

const App = ({ Component, pageProps }: AppProps) => {
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
export default App;