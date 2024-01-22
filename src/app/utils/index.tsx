import { DisplayTable } from "../context/DisplayContext";
import { categoryColors, matterPhase } from "../data";
import { ElementDataType } from "../types";


export const elemntBg=( display:DisplayTable  , element:ElementDataType)=>{
    if(display.section =="cpx"){
        return"#" +element.cpk_hex;
    }
    else if(display.section=="category" && element.category!=display.paramesters){
        return "#1d1c1c";
    }
    else if(display.section=="temperature"){
        if(element.boil !=null &&  element.boil as number <= (display.paramesters as number)){
    
            return matterPhase["Gas"]; 


        }
        else if(element.melt !=null && element.melt as number <=(display.paramesters as number)){
       
            return matterPhase["Liquid"]; 

        }
        else if(element.melt == null && element.boil==null){
            return
        }
        else {
            return matterPhase["Solid"]; 
        }
    }
    else
        return  categoryColors[element.category] ; 
}

export const tempConversion =(k:number , to :"C" |"F")=>{

    const c = k - 273.15
    if(to=="C")
        return  c.toFixed(3)
    return (c * 9/5 + 32).toFixed(3)

}