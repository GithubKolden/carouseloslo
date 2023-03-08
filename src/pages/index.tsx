import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from './img/LOGO.png';
import { client } from '../../lib/client';

import { Product } from '../../typings';

interface Props {
  products: [Product ];
 }

const inter = Inter({ subsets: ['latin'] })

const Home = ({ products }: Props) => {
  return (
    <>    
      <div className="home">
      <div className="d-flex position-absolute top-50 start-50 translate-middle">
        <Image src={logo} alt="" className="img-fluid" />
      </div>
      <div>
        {products?.map((product: any) => product.name)}
      </div>
    </div>
    </>
  )
};

export const getServerSideProps = async () => {
  const ProjectsQuery: any = `*[_type == "product"] {
    image,
    name,
    slug,
    price,
    details
  }`;
  const products = await client.fetch(ProjectsQuery);
  /*
  const BannerQuery: any = '*[_type == "banner"]';
  const bannerData: any = await client.fetch(BannerQuery);
  */
  return {
    props: { products, }
  }
}

export default Home;