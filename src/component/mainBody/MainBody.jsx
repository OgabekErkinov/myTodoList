import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './mainBody.css'
import { faBars, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MainTodo from '../mainTodos/MainTodo'
import CheckedTodos from '../checkedTodos/CheckedTodos'
import DeletedTodos from '../deletedTodos/DeletedTodos'
const MainBody = () => {

    const [step, setStep] = useState(1)
    const [todos, setTodos] = useState([])
    const [showedTodos, setShowedTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [deletedTodos, setDeletedTodos] = useState([])
    const [checkedTodos, setCheckedTodos] = useState([])

    const handleClick = () => {
        const newObject = {
            id : uuidv4(),
            mission : inputValue,
            isChecked : false
        }
        console.log(showedTodos)
        setTodos((prevTodos)=> [...prevTodos,newObject])
        setShowedTodos(todos)
        setInputValue('')
    }

    const handleDelete = (id) => {

        setDeletedTodos((prevDelete)=> [...prevDelete,todos.find((item)=>item.id === id)])

        setTimeout(()=>{
            setTodos(todos.filter((item)=>item.id != id))
            setShowedTodos(todos)
        },300)

    }

    const handleChange = (id) => {
        setTodos((prevTodo)=> prevTodo.map((todo)=>todo.id === id ? {...todo, isChecked : !todo.isChecked} : todo))
        
        setCheckedTodos((checkedTodos)=>[...checkedTodos, ...todos.filter((item)=>item.id === id)])
  
        setTimeout(()=>{
          setTodos(todos.filter((item) => item.id !== id))
          setShowedTodos(todos)
        },300)
    }





  return (
    <div className="main_container">
        <div className="stepButtons">
            <button onClick={()=>setStep(1)}><FontAwesomeIcon icon={faBars}/></button>
            <button onClick={()=>setStep(2)}><FontAwesomeIcon icon={faCheck}/></button>
            <button onClick={()=>setStep(3)}><FontAwesomeIcon icon={faTrash}/> </button>
        </div>
        { step === 1 && <div className="inputArea">
            <input type="text" id="newTodo" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button className='newTodoButton' onClick={handleClick}>add</button>
        </div> }
        {step === 1 && <MainTodo array={todos} 
                                 handleDelete={handleDelete} 
                                 handleChange={handleChange}
                                 setTodos={setTodos}/> }
        {step === 2 && <CheckedTodos array={checkedTodos}
                                     setCheckedTodos={setCheckedTodos}/>}
        {step === 3 && <DeletedTodos array={deletedTodos}
                                     setDeletedTodos={setDeletedTodos}/>}


        
    </div>
  )
}

export default MainBody