import Image from 'next/image'
import styles from './page.module.css'
import { ElementDataType } from './types'
import { elementsData } from './data'

export default function Home() {

 

  return (
    <main className={styles.main}>
      <div  className="periodic-table" >
    {
      elementsData.map((item , index)=>{
        return(
            <div style={{gridColumn:item.xpos,gridRow:item.ypos}} className={`element ${item.category}`} >
              <strong>
                {item.symbol}
              </strong>

            </div>
        )
      })
    }
        <div className='centerBox'>
 
        </div>

        <div className='rightBar'>
      
        </div>
   
      </div>

    </main>
  )
}
