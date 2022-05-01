import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';


const App = () =>{
 const [courseGoals, setCourseGoals] = useState([ // first one for initial state second one for update state
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q & A'},
    {id: 'cg4', text: 'Im from props'}
  ])   // my initial state

  const addNewGoalHandler = (newGoal) =>{
          // setCourseGoals(courseGoals.concat(newGoal));
          setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal)); //update state depend on the previous state


    // courseGoals.push(newGoal);
    // console.log(courseGoals)
  }
  return(
    <div className='courseGoals'>
      <h2>Course Goals</h2>
        <NewGoal onAddGoal = {addNewGoalHandler} />
        <GoalList goals ={courseGoals} />


    </div>
  )
}


// const App = ()=>{
//   return
//   <h1 title='This works'>Hi I'm your react.js</h1> //return React.createElement('h1',{},"Hi, I'm your ract.js") 
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
