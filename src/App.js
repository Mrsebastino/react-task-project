import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: "Doctor appointment",
        day: "Feb 5th at 14.30",
        reminder: true,

    },
    {
        id: 2,
        text: "Concert at o2",
        day: "Feb 6th at 20.30",
        reminder: true,
    },
    {
        id: 3,
        text: "Food shopping",
        day: "Feb 5th at 14.30",
        reminder: false,
    },
])

// Delete Task

const deleteTask = (id)=>{
  setTask(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
     <Header />
     {tasks.length > 0 ? ( 
     <Tasks tasks={tasks} onDelete={deleteTask} />
     ) : (
       "No task to show"
     )}
    </div>
  );
}

export default App;
