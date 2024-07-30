import { useState } from "react";

const User = (props) => {
    const [count1] = useState(0);
    const [count2] = useState(0);
    return (
        <div className="user-card">
            <h1>Count1 = {count1}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>{props.name}</h1>
            <h2>PranavPurkar27</h2>
            <h3>Full Stack Developer</h3>
        </div>
    )
}

export default User;