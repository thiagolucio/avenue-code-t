import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avenue Code Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
        <div className="row smile-entrance">
          <div className="col-12 text-center">
            <img src="/logoAvenueCode.jpeg" className={styles.logoTop} alt="logo da Avenue Code" title="Logo Avenue Code"/>
            <h5 className={styles.title}>Avenue Code Test</h5>
          </div>
          <div className="col-12 text-center">
            <div className="container p-4 m-2">
              <div className="jumbotron">
                <Link href="/first-test">
                  <button type="button" className="btn btn-outline-dark m-1">First Test</button>
                </Link>
                <button type="button" className="btn btn-outline-dark m-1">Second Test</button>
                <button type="button" className="btn btn-outline-dark m-1">Third Test</button>
              </div>
            </div>
          </div>
 
        </div>
    </div>
  )
}
