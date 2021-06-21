import React,{useState, useEffect} from 'react'
import axios from "axios"
import userCard from './userCard'



const Users = () => {
    const [listUsers, setListUsers] = useState([])

    const fetchUsers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setListUsers(res.data))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
       fetchUsers()
    }, [])
    return (
        <div>
            {listUsers.map((el,i)=><use)}
        </div>
    )
}

export default Users
