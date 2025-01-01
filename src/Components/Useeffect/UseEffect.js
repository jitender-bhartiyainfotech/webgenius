import React from 'react'
import { useState, useEffect } from 'react'

function UseEffect() {

    const [fullname, setFullname] = useState('fname'); 
    const [lastname, setLastname] = useState('lastname'); 

    useEffect(() => {
        alert(fullname);
    }, [lastname]);

    return (
        <>
            <div>fullname = {fullname}</div>
            <div>lastname = {lastname}</div>
            <input type='text' onChange={(e) => setFullname(e.target.value)} value={fullname}/>
            <input type='text' onChange={(e) => setLastname(e.target.value)} value={lastname}/>
        </>
    )
}

export default UseEffect