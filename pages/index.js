import Head from 'next/head'
import Image from 'next/image'
import Pa from "../components/login"
import  Navbar  from "../components/Navbar"
import {Container} from "reactstrap"
import {useState} from "react"
import axios from "axios"
export default function Home(props) {
const [parentUser, setparentUser] = useState(null)

  return (
    <>
    <Navbar />
      <Container>
        {parentUser}
        <Pa
          name="Pradymna"
          setParetUser = {(val)=>setparentUser(val)}
          data = {props.data}
        />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json())

  // Pass data to the page via props
  return { props:{data}}
}

