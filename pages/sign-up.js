import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pa from "../components/login"

export default function Home() {
  return (
    <div>
      <h1>Pradyumna Bilagi</h1>
      <Pa/>
    </div>
    
  )
}

export async function getServerSideProps() {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json())

  // Pass data to the page via props
  return { props:{data}}
}


