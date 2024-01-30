import Context from "./Context";
import { useContext } from 'react'

const useStore = () => useContext(Context)

export { useStore } 