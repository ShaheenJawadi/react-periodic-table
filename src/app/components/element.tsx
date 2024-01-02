import { useDisplaytValues } from "../context/useContext";
import { categoryColors, matterPhase } from "../data";
import { ElementDataType } from "../types";
import { elemntBg } from "../utils";


type Props ={
    element:ElementDataType;
}

export const SingleElement=(props:Props)=>{

    const { element}=props ; 
    const {displayTable }=useDisplaytValues()
 
 

 
 

    return(
        <div style={{gridColumn:element.xpos,gridRow:element.ypos , background:elemntBg(displayTable , element)}} className={`element ${element.category}`} >

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

          <div className="name" style={{color:matterPhase[element.phase]}} >
          {element.name}
          </div>
          <div className="shells">
          {element.shells.join('-')}
          </div>

      
        
        

        </div>
    )
}