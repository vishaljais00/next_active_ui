import React, { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import Two_Avatar_View from '@/Componnets/Calling_Features/Two_Avatar_View';
const Twoavatarpage = () => {
useEffect(() => {
    initFlowbite();
    }, [])
  return (
    <div>
        <Two_Avatar_View/>
    </div>
  )
}

export default Twoavatarpage