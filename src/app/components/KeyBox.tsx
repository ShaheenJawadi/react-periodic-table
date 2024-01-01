import { categoryColors } from "../data";

 

const KeyBox=()=> {

 
 

  return (
   
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
  )
}

export default KeyBox;