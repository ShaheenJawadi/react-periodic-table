import { createContext, useState, ReactNode  } from 'react'
 
 
 type DisplayData = {
  displayTable: string,

}
const initialDisplayData: DisplayData = {
  displayTable:"groupe"
}
 


export type DisplayContextValue={
  displayTable:string , 
  setDisplayTable:(d:string)=>void
}

export const DisplayDataContext = createContext<DisplayContextValue>({
  displayTable:initialDisplayData.displayTable,
  setDisplayTable:() => null
})



 
interface Props {
  children: ReactNode,
}

export const DisplayValuesProvider = ({ children }: Props) => {
 
  const [displayTable, setDisplayTable] = useState<string>(initialDisplayData.displayTable)

 
 

 

  return <DisplayDataContext.Provider value={{ displayTable , setDisplayTable }}>{children}</DisplayDataContext.Provider>
}

export const DisplayValuesConsumer = DisplayDataContext.Consumer
