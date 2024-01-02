import React from 'react'
import Select from 'react-select'
import { useDisplaytValues } from '../context/useContext'

 

const SliderMode = () =>{
    const  {displayTable,setDisplayTable}=useDisplaytValues()

    const handelChange=(event:any)=>{
        const {value , name }=event.target ; 
        if(displayTable.section=="temperature"){
            setDisplayTable({section:"" , paramesters:0})
        }
        else {
            setDisplayTable({section:"temperature" , paramesters:0})
        }
    }

    const handelTemp=(event:any)=>{
        setDisplayTable({section:"temperature" , paramesters:event.target.value})
        console.log(event.target.value)
    }

    
    return (
        <div className='sliderMode' >
            <div className='switch'>
         
                    <div   className="radioLabel">
                        <input
                            className="radioInput"
                            type="checkbox"
                            name={"sw"}
                            value={"temperature"}
                            onChange={handelChange}
                            checked={displayTable.section=="temperature"}     
                        />
                     
                        Temperature
                    </div>
                 

             
              
            </div>
            {
                displayTable.section=="temperature" &&
                <div className='slider' >
                    <div className="slidecontainer">
                        <input type="range" min="0" max="6400" onChange={handelTemp} value={displayTable.paramesters} className="slider" />
                    </div>
                </div>

            }
            
 
        </div>
           
        )
}
export default SliderMode ; 