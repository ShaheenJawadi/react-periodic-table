import { useState } from "react";
import { useDisplaytValues } from "../context/useContext";
import { categoryColors, matterPhase } from "../data";
import { ElementDataType } from "../types";
import { elemntBg } from "../utils";

type Props ={
    element:ElementDataType;
}

export const SingleElement=(props:Props)=>{

    const { element}=props ; 
    const {displayTable ,openDrawer }=useDisplaytValues()
    const [hover , setHover ]= useState<boolean>(false);
 
 

 
 

    return(
      <div onClick={() => openDrawer(element)} style={{gridColumn:element.xpos,gridRow:element.ypos, position:"relative"  }} >
          {
            displayTable.section=="image" ?
            
            // eslint-disable-next-line @next/next/no-img-element
            <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}  src={element.image.url} 
              alt={element.image.title} 
              about={element.image.attribution} 
              className="element" /> :
        
            <div className="element" style={{ background:elemntBg(displayTable , element)}} >

  
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

            <div className="name"  >
            {element.name}
            </div>
 
            </div>  
          }
          {(displayTable.section == "image" && hover )&&
            <div className="namePopup">{element.name}</div>
          }
          <div>

          </div>
          
         
        

        </div>
    )
}