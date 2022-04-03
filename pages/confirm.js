import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'


const Confirm = () => {
//  used for catching the url query or get the data from url queries
    const router = useRouter()
    const {pickup, dropoff} = router.query

    // console.log("Pickup",pickup);
    // console.log("Dropoff",dropoff);

    const [pickUpCoordinates , setPickUpCoordinates] = useState()
    const [dropofCoordinates, setDropofCoordinates] = useState()


  const getPickUpCoordinates = (pickup) => {

  
     //Fetch() calls API

     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+ // paste url with acces token
       new URLSearchParams({
           access_token: "pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw",
           limit:1 //only one thing from the data
       })
     )
     .then(response => response.json())
     .then(data =>{
        //  console.log(data.features[0].center)
         setPickUpCoordinates(data.features[0].center)
     })
  }

  const getDropofCoordinates = (dropoff) => {
    
    //Fetch() calls API

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+ // paste url with acces token
      new URLSearchParams({
          access_token: "pk.eyJ1IjoiYWluZHJhaWwiLCJhIjoiY2wxZ3gxdXRmMTdnZjNvbG50Y25nZTZ0ciJ9.GNxD2xX5SOb_YC63s9Hiaw",
          limit:1 //only one thing from the data
      })
    )
    .then(response => response.json())
    .then(data =>{
        // console.log(data.features[0].center)
        setDropofCoordinates(data.features[0].center)
    })
  }

  useEffect(() => {
     getPickUpCoordinates(pickup);
     getDropofCoordinates(dropoff);

  },[pickup,dropoff]) //[] means useEffect will work if values inside that [] changes

  

  return (
    <Wrapper>
        <Map
        pickUpCoordinates ={pickUpCoordinates}
        dropofCoordinates={dropofCoordinates}
        />
        <RideContainer>
          Ride Selector 
          Confirm Button
          {/* {PickUpCoordinates}
          <br/>
          {DropofCoordinates} */}
        </RideContainer>
        
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
bg-gray-200 h-screen flex flex-col
`

const RideContainer = tw.div`
flex flex-1 
`