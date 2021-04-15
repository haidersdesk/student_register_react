import React,{useEffect, useState} from 'react'

const EditStudent=(props)=>{

  /*const[name, setName] = useState('')
  const[lastName, setLastName] = useState('')
  const[age, setAge] = useState()
  const[present, setPresent] =useState()
  */

  useEffect(()=>{
   const fetchOneStudent = async ()=>{
     const response = await fetch('http://localhost:8080/students/'+props.studentId)
     const studentData = await response.json()
     console.log(studentData)
     return studentData
   }
   
   fetchOneStudent()
 },[])


const clickHandler=()=>{
   props.setView('viewStudentList')
 }


 

 /*const submitHandler =(e)=>{
   e.preventDefault();

 const updateStudent = async ()=>{
   const response = await fetch('http:/localhost:8080/students/'+props.student_id,{
   method: 'PUT',
   headers:{'Content-Type': 'application/json'
  },
   body:JSON.stringify({
      name: name,
      last_name: lastName,
      age: age,
      present: present
    
   })

   });

   const updatedData = await response.json();
   props.setStudents(prevStudents=>[...prevStudents,updatedData])
   
 }
 updateStudent()
}*/


    return( 
       
       <form>

       <h3 className="form-title">Edit</h3>
       <label>First Name</label>
       <input type="text" id="fname" name="firstname" placeholder="First name.."></input>
       <label>Last Name</label>
       <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
       <label>Age</label>
       <input type="text" id="age" name="age" placeholder="Age.."></input>

       <label className="container">Present
      <input type="radio" id="present" name="radio" />
      <span className="checkmark"></span>
      </label>

      <label className="container">Absent
      <input type="radio" id="absent" name="radio" />
      <span className="checkmark"></span>
      </label>
      
       <button className="btn" type="submit">Edit</button>
       <div className="divider"/>
       <button className="btn" type="Back" onClick={clickHandler}>Back</button>
     </form>
    )
 }
 
 export default EditStudent;