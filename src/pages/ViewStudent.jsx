import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
const ViewStudent = () => {
  const [students, setStudents] = useState([])
  function fetchData(){
    axios.get("http://localhost:3000/users")
    .then(x=>setStudents(x.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])
    return (
    <>
    <Navbar/>
      <center><h1>Student List</h1></center>
      {students.map((x)=>{
        return <div>
          <h3>Name: {x.name}</h3>
          <p><b>Email:</b> {x.email}</p>
          <p><b>Mobile:</b> {x.mobile}</p>
          <p><b>Department:</b> {x.department}</p>
          <p><b>Course:</b> {x.course}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      })}
    </>
  )
}

export default ViewStudent