
import './App.css';
import {useRef, useState} from "react"
function App() {

  const [x , setx] = useState([])

  const inputRef = useRef()

  const add = () => {
     const value = inputRef.current.value;
    const newData = {completed : false , value};


    setx([...x , newData])

    inputRef.current.value="";
  }

  const itemDone = (index) =>{
    const newx = [...x]
    x[index].completed = !x[index].completed ; 
    setx(newx);
  }
  const toDelet = (index) =>{
    const newx = [...x]
    newx.splice(index , 1)
    setx(newx)
  }

  return (


    <div className="App">

    <h1>To Do List</h1>
    <ul>
     {
      x.map(({value , completed}, index)=>{
        return <div className='div10'>
        <li className={completed ? "diffstyle" : ""} onClick={() => itemDone(index)}>{value}</li>
        <span onClick={() => toDelet(index)}>❌</span>
        </div>
      })
     }
     </ul>

     <input ref={inputRef }  placeholder="Enter New Task..." />

     <button onClick={add}  >Add</button>



    </div>
  );
}

export default App;
