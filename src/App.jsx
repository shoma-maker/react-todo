import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState([]); //タスクのリスクを管理をするステート
  const [newTask, setNewTask] = useState(''); //新しいタスクを追加する時のステート

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleResetTask = () => setTask([]);

  const handleAddTask = () => {
    if(newTask.trim() !==''){
      setTask((prevTask)=>[...prevTask, newTask])
      setNewTask('');
    }
  }
  return (
    <>
      <h1>Todoリスト</h1>
      <ul>
        {task.map((list, index)=>(
          <li key={index}>{list}</li>
        ))}
      </ul>
      <input
      type='text'
      placeholder='新しいタスクを入力してください'
      value={newTask}
      onChange={handleChange} />
      <button onClick={handleAddTask}>追加</button>
      <button onClick={handleResetTask}>リセット</button>
    </>
  )
}

export default App
