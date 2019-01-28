import React from 'react'

const Person = props => {
    return(
        <div className="Person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name} />
            <button onClick={props.clicked}>Delete Person</button>
        </div>
    )
}

export default Person;