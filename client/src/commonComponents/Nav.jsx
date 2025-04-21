import {useEffect, useState} from 'react'

function Nav() {

  // const [usualNav, setUsualNav]= useState("flex justify-center align-bottom absolute w-full bottom-[20px]")
  // const [isClicked, setIsClicked] = useState(false)

  return(
    <div className='fixed bottom-[-200px] left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-gray-200 rounded-full'>
      <div className='absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 left-[20px]'>1</div>
      <div className='absolute w-[70px] h-[70px] bg-gray-400 left-1/2 transform -translate-x-1/2 top-[20px]'>2</div>
      <div className='absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 right-[20px]'>3</div>
      <div className='absolute w-[70px] h-[70px] bg-gray-400 bottom-1/2 left-1/2 transform -translate-x-1/2'>4</div>
    </div>
  )
}

export default Nav;