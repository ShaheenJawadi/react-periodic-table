import React from 'react'
import Select from 'react-select'
import { useDisplaytValues } from '../context/useContext'

const options = [
  { value: 'block', label: 'Chemical group block ' },
  { value: 'cpx', label: 'CPK convention' },
 
]

const DisplayMode = () =>{
    const  {setDisplayTable}=useDisplaytValues()
    return (
  <Select options={options} onChange={(value)=>setDisplayTable(value?.value as string)} />
)
}
export default DisplayMode ; 