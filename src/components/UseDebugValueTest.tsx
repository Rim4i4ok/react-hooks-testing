import {useDebugValue, useState, useEffect} from 'react';

function UseDebugValueTest() {

    const displayName = useDisplayName();

    return (
        <div>
            <div>useDebugValue</div>
            <div>{displayName}</div>
        </div>
    )
}

function useDisplayName() {
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        fetch('foo').then(() => setDisplayName("Hello there"));        
    }, []);

    useDebugValue(displayName ?? 'loading...');

    return displayName;
}

export default UseDebugValueTest;