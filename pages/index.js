import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
 import styles from '../styles/Home.module.css'
import Map from './components/Map'
import tw from "tailwind-styled-components"
 

export default function Home() {

 


  
  return (
    <Wrapper>
      <Map/>
      <Action>
        Start
      </Action>
    </Wrapper>
    
  )
}

const Wrapper = tw.div`
 flex flex-col bg-red-300 h-screen
`

const Action = tw.div`
flex-1
`