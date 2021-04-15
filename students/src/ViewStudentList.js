
const ViewStudentList =(props)=>{


 const clickHandler=()=>{
     props.setView('')
 }

 const linkHandler=()=>{
     props.setView('viewEditStudent')
     

 }

 const students=props.students
 
return(
        <ul>
            {students.map((student, index)=> {
           return(
            <li key={index}>
             <a href='#' onClick={linkHandler}>{student.name}, {student.last_name} {props.setStudentId(student.student_id)} <button className="btn" onClick={()=>props.deleteStudent(student)} >X</button></a>
            </li>
           )
        })
           
    }
    <button className="btn" onClick={clickHandler}>Back</button>
        </ul>
    )
}

export default ViewStudentList;