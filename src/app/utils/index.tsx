import { categoryColors } from "../data";
import { ElementDataType } from "../types";


export const elemntBg=( display:string , element:ElementDataType)=>{
    if(display =="cpx"){
        return"#" +element.cpk_hex;
    }
    else
        return  categoryColors[element.category] ; 
}