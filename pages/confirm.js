import React from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'


const confirm = () => {
  return (
    <Wrapper>
        <Map/>
        <RideContainer>
          Ride Selector 
          Confirm Button
        </RideContainer>
        
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
bg-gray-200 h-screen flex flex-col
`

const RideContainer = tw.div`
flex flex-1 
`