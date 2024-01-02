import { useContext } from 'react'

import { DisplayContextValue, DisplayDataContext } from './DisplayContext'
 
 

export const useDisplaytValues = (): DisplayContextValue => useContext(DisplayDataContext)
