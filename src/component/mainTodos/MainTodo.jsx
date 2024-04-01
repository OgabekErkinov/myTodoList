import { faTrash, faWarning } from '@fortawesome/free-solid-svg-icons'
import './mainTodo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainTodo = ({array, handleDelete, handleChange, setTodos}) => {


  return (
    <div className="mainTodo_container">
      {array?.length > 0 && <>
        <table>
            <thead>
              <tr>
              <th>T/r</th>
              <th>mission</th>
              <th>done</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
            {array?.map((item,idx)=>{
               return <tr key={item.id}>
                    <td>{idx+1}</td>
                    <td>{item?.mission}</td>
                    <td><input type="checkbox" id={item?.id}  onChange={()=>handleChange(item?.id)}/> </td>
                    <td><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item?.id)}/></td>
                </tr>
            })}
            </tbody>
        </table>
        <button className='clearTodos' onClick={()=>setTodos([])}>clear</button>
      </>}
      {array?.length < 1 && <>
        <FontAwesomeIcon icon={faWarning} 
                         color='orange' 
                         size='7x' 
                         style={{marginTop : '30%'}}/>
        <h4>Todos haven't been inserted yet!</h4>
      </>}
        

    </div>
  )
}

export default MainTodo