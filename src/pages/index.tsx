import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from './img/LOGO.png';



const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>    
      <div className="home">
      <div className="d-flex position-absolute top-50 start-50 translate-middle">
        <Image src={logo} alt="" className="img-fluid" />
      </div>
    </div>
    </>
  )
};



export default Home;