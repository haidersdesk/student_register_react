import './style.css';
import React,{useEffect, useState} from 'react'
import ViewStudentList from './ViewStudentList'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import Welcome from './Welcome'

function App() {

  const[view, setView] = useState('')
  const[students, setStudents]=useState([])
  const[studentId, setStudentId]=useState('')
   
  const deleteStudent = async (student)=>{
    const response = await fetch('http://localhost:8080/students/'+student.student_id,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    if(response.ok){
    setStudents(prevStudents=>{
       return prevStudents.filter(prevStudent=>prevStudent.student_id !== student.student_id)
       
    })
  }
 }

 
  useEffect(()=>{
    const fetchStudents = async ()=>{
      const response = await fetch('http://localhost:8080/students')
      const students = await response.json()
      setStudents(students)
    }
    fetchStudents()
  },[])



 switch (view){
  case 'viewCreateStudent':
  return(
  <div>
    <CreateStudent  setView={setView} setStudents={setStudents} />
  </div>
  )

 case 'viewStudentList':
  return(
    <div>
      <ViewStudentList setView={setView} students={students} deleteStudent={deleteStudent} setStudentId={setStudentId} />
    </div>
    )
   
 case 'viewEditStudent':
   return(
     <div>
      <EditStudent setView={setView} setStudents={setStudents} studentId={studentId}/>
    </div>
 )

default:
  return (
    <div>
      <Welcome  setView={setView}/>
    </div>
  );
}
}


export default App;
