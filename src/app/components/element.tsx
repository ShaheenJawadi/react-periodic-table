import { ElementDataType } from "../types";


type Props ={
    element:ElementDataType;
}

export const SingleElement=(props:Props)=>{

    const { element}=props
 
 
    const categoryColors = {
      'diatomic nonmetal': '#ffcc00',
      'noble gas': '#0099cc',
      'alkali metal': '#cc0000',
      'alkaline earth metal': '#ff9900',
      'metalloid': '#9966cc',
      'polyatomic nonmetal': '#66cc66',
      'post-transition metal': '#3399ff',
      'transition metal': '#ff6666',
      'lanthanide': '#cc99ff',
      'actinide': '#ff33cc',
      'unknown': '#999999',
    };
    
 
 

    return(
        <div style={{gridColumn:element.xpos,gridRow:element.ypos , background:categoryColors[element.category || 'unknown' ]}} className={`element ${element.category}`} >

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