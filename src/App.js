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
  return (
    <div className="container">
     <Header />
     <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
