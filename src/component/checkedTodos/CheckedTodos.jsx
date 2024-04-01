import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './checked.css'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const CheckedTodos = ({array, setCheckedTodos}) => {
  return (
    <div className="checked_container">
      {array?.length > 0 && <>
      <table>
        <thead>
          <tr>
          <th>t/r</th>
          <th>mission</th>
          </tr>
        </thead>
        <tbody>
          {array?.map((item,idx)=>{
           return <tr key={idx}>
                     <td>{idx+1}</td>
                     <td>{item?.mission}</td>
                  </tr>
          })}
        </tbody>
      </table>
      <button className='clearChecked'
              onClick={()=>setCheckedTodos([])}>clear</button>
      </>}
      {array?.length === 0 && <><FontAwesomeIcon icon={faCheck} 
                                             color='orange' 
                                             size='7x'
                                             style={{marginTop : '30%'}}/>
                                             <h4>Todos haven't been checked yet !</h4>
                                             </>}

    </div>
  )
}

export default CheckedTodos