import React from 'react'
import Select from 'react-select'
import { useDisplaytValues } from '../context/useContext'

const options = [
  { value: 'group_block', label: 'Chemical group block ' },
  { value: 'cpx', label: 'CPK convention' },
  { value: 'image', label: 'Image' },

 
]

const DisplayMode = () =>{
    const  {setDisplayTable}=useDisplaytValues()
    return (
            <Select options={options} onChange={(value)=>setDisplayTable({paramesters:value?.value , section:value?.value})} />
        )
}
export default DisplayMode ; 