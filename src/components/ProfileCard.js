import React, { useState } from 'react'

const ProfileCard = (props) => {

    const { fullName, job, dept } = props

    const [name, setName] = useState(fullName)
    const [prof, setProf] = useState(job)
    const [department, setDepartment] = useState(dept)
    
/*     const Button = () => {
        const [counterValue, setCounterValue] = useState(initValue);

        const triggeredEvent = () => {

            console.log(counterValue)

            setCounterValue(newValue)
        }
    } */

    const [userCounter, setUserCounter] = useState(0);

    
    const changeUser = () => {
        setName('Zack Atama')
        setProf('Plumber')
        setDepartment('Maintenance')
        setUserCounter(userCounter+1)
    }

    return (
        <div>
            <h1>Counter:{userCounter}</h1>
            <h3>
                {name}
            </h3>
            <small>{prof}</small>
            <p>{department}</p>
            <button
                onClick={changeUser}
            >
                Number of Clicks: {userCounter}
            </button>
        </div>
    )
}

export default ProfileCard 
/* 

import React, { useState } from 'react';

const Button = (props) => {
  // Create a state Hook here
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Button;  */