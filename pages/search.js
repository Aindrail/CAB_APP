import React from 'react'
import tw from "tailwind-styled-components"


const Search = () => {
  return (
    <Wrapper>

      {/* <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" /> 
      </ButtonContainer> */}

      <InputContainer>
       <FromToIcons>
         <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />

         <Line src = "https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"  />

         <Square src = "https://img.icons8.com/windows/50/000000/square-full.png" />

       </FromToIcons>

       <InputBoxes>
       
        <Input placeholder='Enter pickup location' />
        <Input placeholder='Where to ?' />
       
       </InputBoxes>
      <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>

      </SavedPlaces>

    </Wrapper>
  )
}

export default Search

const Wrapper = tw.div `
bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
bg-white  px-4
`

const BackButton = tw.img`
h-12
`
const InputContainer = tw.div `
bg-white flex items-center px-4 mb-2
`
const FromToIcons = tw.div `
 w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img `
h-2.5 
`
const Line = tw.img `
h-10
`
const Square = tw.img `
h-3
`
const InputBoxes = tw.div `
flex flex-col flex-1
`
const Input = tw.input `
h-10 bg-gray-200 my-2 rounded-2 p-3 outline-none border-none
`
const PlusIcon = tw.img `
w-10 h-10 bg-gray-200 rounded-full mx-3 flex 
`

const SavedPlaces = tw.div`

`