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
    else
        return  categoryColors[element.category] ; 
}