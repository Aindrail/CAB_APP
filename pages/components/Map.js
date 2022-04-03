import React from 'react'
import tw from "tailwind-styled-components"
 import mapboxgl from '!mapbox-gl';
 import { useEffect } from "react";



  mapboxgl.accessToken = 'pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw';
// mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJpeTE5OTUiLCJhIjoiY2t2bGlmdW12MHZlcDJ1bzA5OHh3NDIxeCJ9.li8l-1u52aCFd2ZdW-1IaA';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
        
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [77.947998, 23.473324],
        zoom: 5
        });

        addToMap(map)

        })

        const addToMap = (map) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat([12.554729, 55.70651])
            .addTo(map);
        }

  return (
    <Wrapper id="map">
         
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1
`