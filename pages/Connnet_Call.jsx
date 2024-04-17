import Calling_MotionView from '@/Componnets/Calling_Features/Calling_MotionView'
import Calling_View from '@/Componnets/Calling_Features/Calling_View'
import React, { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Two_Avatar_View from '@/Componnets/Calling_Features/Two_Avatar_View'
function Connnet_Call() {
  useEffect(() => {
    initFlowbite();
  }, [])
  
  return (
    <div>
      {/* <Calling_View/> */}
      {/* <Calling_MotionView /> */}
      <Two_Avatar_View />
    </div>
  )
}

export default Connnet_Call
