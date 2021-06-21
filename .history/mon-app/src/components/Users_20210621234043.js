import React,{useState, useEffect} from 'react'
import axios from "axios"
const Users = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
       fetchUsers(setListUsers())
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Users
