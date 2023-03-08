import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from './img/LOGO.png';
// Importing bootstrap | General CSS | Navigationbar | React-router-dom

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>    
      <div className="home">
      <div className="d-flex position-absolute top-50 start-50 translate-middle">
        <Image src={logo} alt="" className="img-fluid" />
      </div>
    </div>
    </>
  )
}