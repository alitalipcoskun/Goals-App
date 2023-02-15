import React, { useState } from "react";

import './course-form.css'


function CourseForm(props) {
    const [formChecker, formHandler] = useState(false);
    const [isValid, setIsValid] = useState(true); // to give to user a feedback message via CSS.

    function formOpener() {
        formHandler(true)
    }
    function formCloser(event) {
        event.preventDefault();
        formHandler(false);
    }
    let form = (
        <button onClick={formOpener} className="goal-opener">Add Course Goal</button>
    );

    const [userInput, setUserInput] = useState({
        goal: '',
    });

    function goalHandler(event) {
        setUserInput({
            goal: event.target.value,
            id: Math.random(),
        });
    }
    function submissionHandler(event) {
        event.preventDefault();
        setUserInput((prevState) => (
            [{
                ...prevState,
            }]
        ))
        if (userInput.goal.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.getGoalData(userInput);
        setUserInput({
            goal: '',
            id: 0,
        })
        setIsValid(true);
    }
    const userGoal = userInput.goal;

    if (formChecker) {
        form = (<form className="goal-form" onSubmit={submissionHandler}>
            <div className={`goal-form__container ${!isValid ? 'invalid' : ''}`}>
                <label className="goal-form__header">Course Goal</label>
                <div className={`goal-form__submission ${!isValid ? 'invalid' : ''}`}>
                    <input type={"text"} className="goal-input" onChange={goalHandler} value={userGoal}></input>
                    <div className="goal-form__buttons">
                        <button type="submit" className="goal-submission">Add Goal</button>
                        <button className="goal-back" onClick={formCloser}>Cancel</button>
                    </div>
                </div>
            </div>
        </form >)
    }
    return (form)
}

export default CourseForm;