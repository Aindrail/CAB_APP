import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = () => {
  return (
    <Wrapper>
       <Title>
           Choose a ride or Swipe up for more
       </Title>
       <CarList>
          
          {
           carList.map((car,index)=>(
            <Car key={index}>
            <CarImage src= {car.imgUrl} />
            <CarDetails>
                <Service>
                   {car.service}
                </Service>
                <Time>
                  5 min away
                </Time>
            </CarDetails>
            <Price>
                Rs. 800
            </Price>

            </Car>
           ))   
          }
         
          

       </CarList>
    </Wrapper>
    // <Wrapper>
    //         <Title>Choose a ride, or swipe up for more</Title>
    //         <CarList>
    //             { carList.map((car, index)=>(
    //                 <Car
    //                 key={index}
    //                 >
    //                     <CarImage src={car.imgUrl} />
    //                     <CarDetails>
    //                         <Service>{car.service}</Service>
    //                         <Time>5 min away</Time>
    //                     </CarDetails>
    //                     <Price>rs. 500</Price>
    //                 </Car>
    //             )) }
    //         </CarList>
    //     </Wrapper>
  )
}

export default RideSelector

// const Wrapper = tw.div`
//  flex-col  flex flex-1  overflow-y-scroll   //this overflow is for only the list of cars and not for the whole page
// `
// const Title = tw.div`
// text-gray-500 text-center text-xs py-2 border-b
// `

const CarList = tw.div`
flex-1 overflow-y-scroll  //this is to make only list scroll and not the title
`

const Car = tw.div`
flex p-4 items-center 
`
const CarImage = tw.img`
h-14 mr-4
`
const CarDetails = tw.div`
 flex-1 
`
const Service = tw.div`
font-medium text-lg
`
const Time = tw.div`
text-small text-blue-500 
`
const Price = tw.div`
text-lg font-medium
`