import React,{useState} from 'react'
import axios from "axios"
const Users = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    }
    return (
        <div>
            
        </div>
    )
}

export default Users
