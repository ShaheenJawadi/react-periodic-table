import { DisplayTable } from "../context/DisplayContext";
import { categoryColors } from "../data";
import { ElementDataType } from "../types";


export const elemntBg=( display:DisplayTable , element:ElementDataType)=>{
    if(display.section =="cpx"){
        return"#" +element.cpk_hex;
    }
    else if(display.section=="category" && element.category!=display.paramesters){
        return "#1d1c1c";
    }
    else if(display.section=="temperature"){
        if(element.boil !=null &&  element.boil as number <= (display.paramesters as number)){
    
            return "#ffcc00" 

        }
        else if(element.melt !=null && element.melt as number <=(display.paramesters as number)){
       
            return "#66ccff"
        }
        else if(element.melt == null && element.boil==null){
            return
        }
        else {
            return "#3366cc"; 
        }
    }
    else
        return  categoryColors[element.category] ; 
}