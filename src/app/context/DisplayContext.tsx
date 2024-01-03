import { createContext, useState, ReactNode  } from 'react'
import { ElementDataType } from '../types'
 
 
 export type DisplayTable ={
  section:string , 
  paramesters?:number|string ,


}
type DrawerType ={
  showDrawer:boolean,
  drawerData:ElementDataType | null,
}

 type DisplayData  =DrawerType & {

  displayTable:DisplayTable ,

}

const initialDisplayData: DisplayData = {
  displayTable:{
    section:"group_block",
  }, 
  showDrawer:false , 
  drawerData:null ,
}
 


export type DisplayContextValue=DisplayData&{
  setDisplayTable:(d:DisplayTable)=>void , 
  closeDrawer:()=>void, 
  openDrawer:(d:ElementDataType)=>void, 
  
}

export const DisplayDataContext = createContext<DisplayContextValue>({
  displayTable: initialDisplayData.displayTable,
  setDisplayTable: () => null,

  showDrawer: false,
  drawerData: null,
  closeDrawer: () => null,
  openDrawer:() => null,
})



 
interface Props {
  children: ReactNode,
}

export const DisplayValuesProvider = ({ children }: Props) => {
 
  const [displayTable, setDisplayTable] = useState<DisplayTable>(initialDisplayData.displayTable)
  const [showDrawer, setShowDrawer] = useState<boolean>(initialDisplayData.showDrawer)
  const [drawerData, setDrawerData] = useState<ElementDataType|null>(initialDisplayData.drawerData)

  const closeDrawer=()=>{
    setDrawerData(null);
    setShowDrawer(false);

  }
  const openDrawer=(e:ElementDataType)=>{
    setDrawerData(e);
    setShowDrawer(true);

  }

 
 

 

  return <DisplayDataContext.Provider value={{ displayTable , setDisplayTable,showDrawer,drawerData , closeDrawer,openDrawer }}>{children}</DisplayDataContext.Provider>
}

export const DisplayValuesConsumer = DisplayDataContext.Consumer
