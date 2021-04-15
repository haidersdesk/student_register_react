import './style.css';
import React,{useEffect, useState} from 'react'
import RecordAddedView from './RecordAddedView'
import ViewStudentList from './ViewStudentList'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'
import EditedView from './EditedView'
import Welcome from './Welcome'

function App() {

  const[view, setView] = useState('')
  const[students, setStudents]=useState([])
  const[studentId, setStudentId]=useState('')
  const[testS, setTestS]=useState([])
   
  console.log(studentId)

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
      <ViewStudentList setView={setView} students={students} deleteStudent={deleteStudent} setStudentId={setStudentId} setTestS={setTestS}/>
    </div>
    )
   
 case 'viewEditStudent':
   return(
     <div>
      <EditStudent setView={setView} setStudents={setStudents} studentId={studentId} testS={testS}/>
    </div>
 )
case 'edited':
   return(
     <div>
      <EditedView setView={setView}/>
    </div>
 )
 case 'recorded':
   return(
     <div>
      <RecordAddedView setView={setView}/>
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
