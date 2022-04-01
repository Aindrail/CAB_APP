import Head from 'next/head'
import { useEffect } from 'react'
import Image from 'next/image'
 import styles from '../styles/Home.module.css'
 import tw from "tailwind-styled-components"
 import mapboxgl from '!mapbox-gl';

 mapboxgl.accessToken = 'pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw';

export default function Home() {

  // useEffect(() => {
  //   const map = new mapboxgl.Map({
    
  //   container: "map",
  //   style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
  //   center: [77.947998, 23.473324],
  //   zoom: 5,
  //   })
  //   })


  // const map = new mapboxgl.Map({
  //   container: 'map', 
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [-74.5, 40], 
  //   zoom: 9 
  //   });

  return (
    <Wrapper>
      <Map id ="map">
      
      </Map>
      <Action>
        Start
      </Action>
    </Wrapper>
    
  )
}

const Wrapper = tw.div`
 flex flex-col bg-red-300 h-screen
`
const Map = tw.div`
bg-red-500 flex-1
`
const Action = tw.div`
flex-1
`