import React from 'react'
import tw from "tailwind-styled-components"
 import mapboxgl from '!mapbox-gl';
 import { useEffect } from 'react';



 mapboxgl.accessToken = 'pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
        
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [77.947998, 23.473324],
        zoom: 5
        })
        })

  return (
    <Wrapper id="map">
         
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`