import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext()

const ContextProvider = (props) => {

    const [input,setInput] = useState("")
    const [recentPrompt,setRecenpPrompt] = useState("")
    const [prevPrompts,setPrevPrompts] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")

    const onSent = async (prompt) =>{
        await runChat(prompt)
    }

    onSent("What is react js")
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecenpPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
    
    export default ContextProvider