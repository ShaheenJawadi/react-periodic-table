import { useDisplaytValues } from "../context/useContext";
import { categoryColors, matterPhase } from "../data";
import { tempConversion } from "../utils";

 

const KeyBox=()=> {

  const  {displayTable,setDisplayTable}=useDisplaytValues()
  

  return (
    <div className="btmContainer">
 
      {
        displayTable.section=="" || displayTable.section=="group_block" ?
          <div className="section">
        <span className="title" >Categories  <small>(color of background)</small></span>
          <div className="categories">
                {Object.keys(categoryColors).map(key => 
                  {return(
                    <div  onClick={()=>setDisplayTable({section:"category" , paramesters:key})} className="single">
                      <div className="categoryColor" style={{ background:categoryColors[key]}}></div>
                      <div className="category">{key}</div>
                
                    </div>
                    
                  )}
                )}

          </div>
        </div>
        : displayTable.section=="temperature" ?
        <div className="section">
    
        <div className="matterPhase" >

        {Object.keys(matterPhase).map(key => 
                {return(
                  <div className="single"  style={{ background:matterPhase[key] ||""}}>
                    {key} 
                  
                  </div>
                  
                )}
              )}
        </div>
        <div className="currentTemp" >
          <div className="single">
             {tempConversion(displayTable.paramesters as number ,"C")}
            <strong> °C</strong>
          </div>

          <div className="single">
          {tempConversion(displayTable.paramesters as number ,"F")}
            <strong> °F</strong>
          </div>

          <div className="single">
             {displayTable.paramesters}
            <strong> °K</strong>
          </div>

        </div>
        </div>
        : null
      }
      

    </div>
  )
}

export default KeyBox;