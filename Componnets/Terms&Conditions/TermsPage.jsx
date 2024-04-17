import React from 'react'
import Termsnav from './Termsnav'
import TermsAndCond from './TermsAndCond'
import PrivacyFooter from '../Privacy&Policy/PrivacyFooter'

function TermsPage() {
  return (
    <div>
      {/* --------------------Terms Nav---------------------- */}

      <Termsnav/> 
      
      {/* --------------------Terms Main Content---------------------- */}

      <TermsAndCond/>

       {/* --------------------Terms Footer---------------------- */}

       <PrivacyFooter/>


    </div>
  )
}

export default TermsPage
