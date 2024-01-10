import React from 'react';
import "../styles/Time.css"

function Time(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    
    const time = new Date();
    const showTime = time.getHours() + ":" + time.getMinutes()  + ":" + time.getSeconds();

    return(
        <div className='time-container'>
            <p className='desc'>{ `${month}/${date}/${year} `}- { showTime}</p>
        </div>
    )
}

export default Time;