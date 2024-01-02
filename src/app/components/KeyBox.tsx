import { useDisplaytValues } from "../context/useContext";
import { categoryColors, matterPhase } from "../data";

 

const KeyBox=()=> {

  const  {setDisplayTable}=useDisplaytValues()
  

  return (
    <div className="btmContainer">
{/*       <input
  type="range"
  min="0"
  max="6000"
 value={500}
 
  id="myRange"
/> */}
      <div className="section">
      <span className="title" >Phase of Matter  <small>(color of name)</small></span>
      <div className="matterPhase" >

      {Object.keys(matterPhase).map(key => 
              {return(
                <div className="single"  style={{ color:matterPhase[key] ||""}}>
                   {key} 
                
                </div>
                
              )}
            )}
      </div>
      </div>
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

    </div>
  )
}

export default KeyBox;