import React from "react";
import Goal from "./Goal";


import './goal-list.css';



function GoalList(props){
    const deletingItem = (goalId) => {
        props.deleteFunction(goalId);
    }
    const keys = props.value.map((item) => (
        item.id
    ));
    const outputGoals = props.value.map((item, index) => (
        <Goal goal = {item.goal} key={item.id} onDelete = {deletingItem} id = {keys[index]}></Goal>
    ))
    

    return (<div className="goals-list">
        <ul>
            {outputGoals.map((goal, index) => (
                <li id = {keys[index]}key= {keys[index]} onClick= {deletingItem}>{goal}</li>
            ))}
        </ul>        
    </div>)
}

export default GoalList;