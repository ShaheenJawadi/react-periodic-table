import { ElementDataType } from "../types";


type Props ={
    element:ElementDataType;
}

export const SingleElement=(props:Props)=>{

    const { element}=props

    return(
        <div style={{gridColumn:element.xpos,gridRow:element.ypos}} className={`element ${element.category}`} >

          <div className="topBox">
            <div className="atomicNumber">
              {element.number}
            </div>
            <div className="atomicWeight">
              {element.atomic_mass.toFixed(3)}
            </div>
          </div>
       
          <div className="symbol">
            {element.symbol}
          </div>

          <div className="name">
          {element.name}
          </div>

      
        
        

        </div>
    )
}