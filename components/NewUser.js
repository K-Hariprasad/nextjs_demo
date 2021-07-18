import React, {useState} from 'react'

function NewUser({handleForm}) {
    const hanldeSubmit = (e) =>{
        e.preventDefault()
        let user={id:"u3",userName:name,nickName}
        handleForm(user)
    }
    const [name,setName]=useState("")
    const [nickName,setNickName]=useState("")
    return (
        <form onSubmit={hanldeSubmit}>
            <input placeholder="Enter username" onChange={(e)=>setName(e.target.value)}></input>
            <input placeholder="Enter nickname" onChange={(e)=>setNickName(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewUser
