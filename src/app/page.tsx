import Image from 'next/image'
import styles from './page.module.css'
import { ElementDataType } from './types'
import { elementsData } from './data'
import { SingleElement } from './components/element'
import KeyBox from './components/KeyBox'

export default function Home() {

 

  return (
    <main className={styles.main}>
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

        <div className='rightBar'>
      
        </div>
   
      </div>

    </main>
  )
}
