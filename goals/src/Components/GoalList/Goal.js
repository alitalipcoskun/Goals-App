import React from "react";

import './goal.css'

function Goal(props){
    return(<div className="goal">
        <div className="goal-item">
            <p>{props.goal}</p>
        </div>
    </div>)
}


export default Goal;