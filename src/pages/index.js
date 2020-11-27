import React, {useState, useEffect, useRef} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Main from "../components/main"


const IndexPage = () => {
  const [sliderState, _pS] = useState();
  const bodyRef = useRef(null);


  useEffect(()=>{


  },[sliderState, bodyRef])

  const bGround = ()=>{
      if( sliderState === 1){
          return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(96, 118, 144) 0%, rgb(76, 78, 80) 100%)'}
      }else if ( sliderState === 2){
          return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(113, 125, 138) 0%, rgb(48, 51, 53) 100%)'}
      }else if( sliderState === 3){
          return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(131, 157, 172) 0%, rgb(67, 105, 131) 100%)'}
      }else if( sliderState === 4){
        return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(244, 145, 91) 0%, rgb(62, 155, 200) 100%)'}
      }else if( sliderState === 5){
        return {background : 'radial-gradient(50% 50% at 50% 50%, rgb(207, 207, 206) 0%, rgb(113, 85, 91) 100%)'}
      }
  }

  return(
    <main className="body-wrapper" style={bGround()}>
      <Layout>
          <Main childActive={(item)=>_pS(item) }/>
      </Layout>
    </main>
  )
}

export default IndexPage
