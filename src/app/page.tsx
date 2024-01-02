"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { ElementDataType } from './types'
import { elementsData } from './data'
import { SingleElement } from './components/element'
import KeyBox from './components/KeyBox'
import { DisplayValuesProvider } from './context/DisplayContext'
import DisplayMode from './components/displayMode'
import SliderMode from './components/sliderMode'

export default function Home() {

 

  return (
    <main className={styles.main}>
      <DisplayValuesProvider>
        
      
        <div  className="periodicTable" >
          {
            elementsData.map((item , index)=>{
              return(
                <SingleElement element={item}/>
                  
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
      </DisplayValuesProvider>
    </main>
  )
}
