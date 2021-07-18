import React from 'react'

function User({userName, nickName}) {
    return (
        <div>
            <h1>USERNAME : {userName}</h1>
            <h1>NICKNAME : {nickName}</h1>
        </div>
    )
}

export default User
