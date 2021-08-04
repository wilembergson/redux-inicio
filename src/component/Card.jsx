import React from 'react' 
import './Card.css'

function getColor(props){
    if(props.red) return "Red"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.purple) return "Purple"
    return ""
}

export default function Card(props){
    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>

            <div className="Body">
                {props.children}
            </div>
        </div>
    )
}