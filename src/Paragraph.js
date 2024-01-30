import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import './App.css'
    

function Paragraph() {
    const themeValue = useContext(ThemeContext);
    return (
        <div>
            <p className={themeValue.theme}>Context provides a way to pass data through the component tree without having to pass props down manually at every level</p>
        </div>
    )
}

export default Paragraph