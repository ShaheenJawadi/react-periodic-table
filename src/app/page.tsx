"use client" 
import styles from './page.module.css' 
import { elementsData } from './data'
import { SingleElement } from './components/element'
import KeyBox from './components/KeyBox'

import DisplayMode from './components/displayMode'
import SliderMode from './components/sliderMode'
import BottomDrawer from './components/drawer'
import { useDisplaytValues } from './context/useContext'
 
export default function Home() {

  let { showDrawer } = useDisplaytValues();
 
  return (
    <main className={styles.main}>

       
    
      
        <div  className="periodicTable" >
          {
            elementsData.map((item , index)=>{
              return(
                <SingleElement key={index} element={item}/>
                  
              )
            })
          }
          <div className='keyBox'>  
              <KeyBox/>
          </div>

          <div className='displayMode'>
            <SliderMode/>
            <DisplayMode/>
          </div>
    
        </div> 
          {showDrawer && <BottomDrawer />  }
 

    </main>
  )
}
