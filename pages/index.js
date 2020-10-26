import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="test?search=Numéro d'appel national d'urgence du Crous" >Test</Link>
   </div>
  )
}
