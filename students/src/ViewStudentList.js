
const ViewStudentList =(props)=>{

  
 const clickHandler=()=>{
     props.setView('')
 }

 const linkHandler=()=>{
     props.setView('viewEditStudent')
     
 }

return(
        <ul>
            {props.students.map((student, index)=> {
           return(
            <li key={index}>
             <p>{student.name},{student.last_name} {student.present === true?'is PRESENT':'is ABSENT'}</p>
             <a href='#'onClick={linkHandler}><button className="btn" onClick={()=>{props.setStudentId(student.student_id)}}>Edit</button></a>
             <button className="btn" onClick={()=>props.deleteStudent(student)}>X</button>
            </li>
           )
        })  
    }
    <button className="btn" onClick={clickHandler}>Back</button>
        </ul>
    )
}

export default ViewStudentList;