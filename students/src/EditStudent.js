import React,{useEffect, useState} from 'react'

const EditStudent=(props)=>{
  const[oneStudent, setOneStudent]=useState('')

  const[name, setName] = useState()
  const[lastName, setLastName] = useState()
  const[age, setAge] = useState()
  const[present, setPresent] =useState()
  
   
  useEffect(()=>{
   const fetchOneStudent = async ()=>{
     const response = await fetch('http://localhost:8080/students/'+props.studentId)
     const studentData = await response.json()
     setOneStudent(studentData)
   }
   fetchOneStudent()
 },[])


const clickHandler=()=>{
   props.setView('')
 }


 const submitHandler =(e)=>{
   props.setView('edited')
   e.preventDefault();

 const updateStudent = async ()=>{
   const response = await fetch('http://localhost:8080/students/'+props.studentId,{
   method: 'PUT',
   headers:{'Content-Type': 'application/json'},
   body:JSON.stringify({
      name: name,
      last_name: lastName,
      age: age,
      present: present
    
   })
   
  })

  const updatedStudent = await response.json();
  props.setStudents(prevStudents=>[...prevStudents, updatedStudent])
 }
  updateStudent()
}
 
 


    return( 
      
      
       <form onSubmit={submitHandler}>
       <div className='viewtwo'>
       <p>First Name: {oneStudent.name}</p>
       <p>Last Name:{oneStudent.last_name}</p>
       <p> Student Age:{oneStudent.age}</p>
       <p>{oneStudent.name} is {oneStudent.present === true?'PRESENT':'ABSENT'}</p>
       </div>

       <h3 className="form-title">Edit</h3>
       <label>First Name</label>
       <input type="text" id="fname" name="firstname" placeholder="First name.."onChange={e=>setName(e.target.value)} value={name}></input>
       <label>Last Name</label>
       <input type="text" id="lname" name="lastname" placeholder="Last name.."onChange={e=>setLastName(e.target.value)} value={lastName}></input>
       <label>Age</label>
       <input type="text" id="age" name="age" placeholder="Age.."onChange={e=>setAge(e.target.value)} value={age}></input>

       <label className="container">Present
      <input type="radio" id="present" name="radio" onChange={e=>setPresent(true)} value={present}/>
      <span className="checkmark"></span>
      </label>

      <label className="container">Absent
      <input type="radio" id="absent" name="radio" onChange={e=>setPresent(true)} value={present}/>
      <span className="checkmark"></span>
      </label>
      
       <button className="btn" type="submit">Edit</button>
       <div className="divider"/>
       <button className="btn" type="Back" onClick={clickHandler}>Back</button>
     </form>
    
    )
 }
 
 export default EditStudent;