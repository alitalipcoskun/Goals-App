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
      return [data,...prevData]
    });
  }
  function deleteHandler(goalId){
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  }

  return (
    <div className="App">
      <CourseForm getGoalData = {dataHandler}></CourseForm>
      <GoalList value = {goals} deleteFunction = {deleteHandler}></GoalList>
    </div>
  );
}

export default App;
