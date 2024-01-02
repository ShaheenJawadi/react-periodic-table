import { createContext, useState, ReactNode  } from 'react'
 
 
 export type DisplayTable ={
  section:string , 
  paramesters?:number|string ;
}

 type DisplayData = {

  displayTable:DisplayTable ,
}

const initialDisplayData: DisplayData = {
  displayTable:{
    section:"group_block",
  }
}
 


export type DisplayContextValue={
  displayTable:DisplayTable , 
  setDisplayTable:(d:DisplayTable)=>void
}

export const DisplayDataContext = createContext<DisplayContextValue>({
  displayTable:initialDisplayData.displayTable,
  setDisplayTable:() => null
})



 
interface Props {
  children: ReactNode,
}

export const DisplayValuesProvider = ({ children }: Props) => {
 
  const [displayTable, setDisplayTable] = useState<DisplayTable>(initialDisplayData.displayTable)

 
 

 

  return <DisplayDataContext.Provider value={{ displayTable , setDisplayTable }}>{children}</DisplayDataContext.Provider>
}

export const DisplayValuesConsumer = DisplayDataContext.Consumer
