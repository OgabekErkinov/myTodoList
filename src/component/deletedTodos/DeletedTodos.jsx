import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './deleted.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'

const DeletedTodos = ({array, setDeletedTodos}) => {
  return (
    <div className="deleted_container">
       {array?.length > 0 && <>
        <table className='deletedTable'>
            <thead>
                <tr>
                    <th>t/r</th>
                    <th>deleted mission</th>
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
        <button className='clearDeleted'
                onClick={()=>setDeletedTodos([])}>clear</button>
        </>}
        {array?.length < 1 && <>
                                <FontAwesomeIcon icon={faTrash} 
                                               color='orange' 
                                               size='7x'
                                               style={{marginTop : '30%'}}/>
                                <h4>Todos haven't been deleted yet!</h4>
                                               </>}
                                               

    </div>
  )
}

export default memo(DeletedTodos)