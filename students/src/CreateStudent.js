import { useState } from "react"

const CreateStudent=(props)=>{

  const[name, setName] = useState('')
  const[lastName, setLastName] = useState('')
  const[age, setAge] = useState()
  const[present, setPresent] =useState()


const clickHandler=()=>{
      props.setView('')
    }
   
    const submitHandler =(e)=>{
      e.preventDefault();

      const addStudents = async ()=>{
        const response = await fetch('http://localhost:8080/students',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
          name: name,
          last_name: lastName,
          age: age,
          present: present

        })
      })

      /*if(response.status !==201){
        console.error("something went wrong posting data")
      }*/

      const createdStudent = await response.json()
      props.setStudents(prevStudents=>[...prevStudents,createdStudent])
    }
    addStudents()
  }


   return( 
   <form onSubmit={submitHandler}>
      <h3 className="form-title">Add Record</h3>

      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="First name.." onChange={e=>setName(e.target.value)} value={name} ></input>

      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Last name.."onChange={e=>setLastName(e.target.value)} value={lastName}></input>

      <label>Age</label>
      <input type="text" id="age" name="age" placeholder="Age.."onChange={e=>setAge(e.target.value)} value={age}></input>

      <label className="container">Present
      <input type="radio" id="present" name="radio" onChange={e=>setPresent(true)} value={present}/>
      <span className="checkmark"></span>
      </label>

      <label className="container">Absent
      <input type="radio" id="absent" name="radio"onChange={e=>setPresent(false)} value={present}/>
      <span className="checkmark"></span>
      </label>

      <button className="btn" type="submit">Save</button>
      <div className="divider"/>
      <button className="btn" type="Back" onClick={clickHandler}>Back</button>
    </form>
   )
}

export default CreateStudent;


