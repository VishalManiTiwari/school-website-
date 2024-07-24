import React, { useState, useEffect } from 'react';
import myContext from '../context/myContext';

function MyState(props) {
    const [mode, setMode] = useState(() => {
        const savedMode = localStorage.getItem('mode');
        return savedMode ? savedMode : 'light';
    });

    useEffect(() => {
        if (mode === 'dark') {
            document.body.style.backgroundColor = "rgb(17, 24, 39)";
        } else {
            document.body.style.backgroundColor = "white";
        }
        localStorage.setItem('mode', mode);
    }, [mode]);

    // Function to toggle mode
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <myContext.Provider value={{ mode, toggleMode }}>
            {props.children}
        </myContext.Provider>
    );
}

export default MyState;
