import React, {useState} from 'react';
import CourseForm from './Components/CourseForm/CourseForm';
import './App.css';
import GoalList from './Components/GoalList/GoalList';

const DUMMY_GOALS = [
  {goal: "Start development", id: "e1"},
  {goal: "Create Projects", id: "e2"},
]


function App() {
  const [goals, setGoals] = useState(DUMMY_GOALS);
  function dataHandler(data){
    setGoals((prevData) => {
      return [...prevData, data]
    });
  }

  return (
    <div className="App">
      <CourseForm getGoalData = {dataHandler}></CourseForm>
      <GoalList value = {goals}></GoalList>
    </div>
  );
}

export default App;
