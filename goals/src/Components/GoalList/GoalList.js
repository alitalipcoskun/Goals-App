import React from "react";
import Goal from "./Goal";


import './goal-list.css';



function GoalList(props){
    const outputGoals = props.value.map((item) => (
        <Goal goal = {item.goal} key={item.id}></Goal>
    ))
    const keys = props.value.map((item) => (
        item.id
    ));

    return (<div className="goals-list">
        <ul>
            {outputGoals.map((goal, index) => (
                <li key= {keys[index]}>{goal}</li>
            ))}
        </ul>        
    </div>)
}

export default GoalList;