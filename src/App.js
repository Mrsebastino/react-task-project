import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
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

// AddTask

const addTask = (task)=>{
     const id = Math.floor(Math.random() * 1000) + 1
     
     const newTask = { id, ...task}
     setTasks([...tasks, newTask])
}

// Delete Task

const deleteTask = (id)=>{
  setTasks(tasks.filter((task) => task.id !== id))

}

// Toggle Reminder

const toggleReminder = (id)=> {
  setTasks(tasks.map((task) => task.id === id
   ? {...task, reminder: !task.reminder} : task
   ))
}

  return (
    <div className="container"> 
     <Header 
     onAdd={() => setShowAddTask
      (!showAddTask)} 
     showAdd={showAddTask}
     />
     {showAddTask && <AddTask onAdd={addTask}
      />}
     {tasks.length > 0 ? ( 
     <Tasks tasks={tasks}
      onDelete={deleteTask} 
      onToggle={toggleReminder}
      />
     ) : (
       "No task to show"
     )}
    </div>
  );
}

export default App;
