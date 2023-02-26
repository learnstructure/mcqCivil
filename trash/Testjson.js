import React from 'react'
import { useState, useEffect } from 'react';

function Testjson() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/test.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
            {data.map(item => (
                <p key={item.question}>{item.question}
                    <br />{item.optionA}
                    <br />{item.optionB}
                    <br />{item.optionC}
                    <br />{item.optionD}
                </p>
            ))}
        </div>
    );
}

export default Testjson