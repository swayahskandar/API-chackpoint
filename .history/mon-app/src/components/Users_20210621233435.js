import React,{useState} from 'react'
import axios from "axios"
const Users = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>clg).catch()
    }
    return (
        <div>
            
        </div>
    )
}

export default Users
