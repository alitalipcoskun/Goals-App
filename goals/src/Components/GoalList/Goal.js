import React from "react";

import './goal.css'

function Goal(props){
    const deleteItemHandler = () => {
        props.onDelete(props.id)
    }


    return(
        <div className="goal-item" onClick={deleteItemHandler}>
            <p>{props.children}</p>
        </div>
    )
}


export default Goal;