import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    

    const handleAdd = () => {
        setCount(5)
    }

    const counterStyle ={
        border: '4px solid gold'
    }

    return(
        <div  className="Count" style={counterStyle}>
            <h3>Count: {count}</h3>
            <button className="Button"  onClick={handleAdd}>Add</button>
        </div>
    )
}