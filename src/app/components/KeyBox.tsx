import { categoryColors, matterPhase } from "../data";

 

const KeyBox=()=> {

  
  

  return (
    <div className="btmContainer">
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
      <span className="title" >Category  <small>(color of background)</small></span>
        <div className="categories">
              {Object.keys(categoryColors).map(key => 
                {return(
                  <div className="single">
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