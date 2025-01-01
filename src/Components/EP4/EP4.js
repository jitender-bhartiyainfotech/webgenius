import React from "react";
import { useState } from "react";

const EP4 = (props) => {
    const [iput, setIput] = useState('');

    return (
        <>
            <h1>EP4 = {props.person}</h1>
            <input type="text" value={iput} onChange={(e) => setIput(e.target.value)}/>
        </>
    )
}

export default EP4;