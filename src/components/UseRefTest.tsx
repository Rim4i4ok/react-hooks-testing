import { useEffect, useRef } from 'react';

function UseRefTest () {

    const count = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null); 

    useEffect(() => {  
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }  
    },[]);

    return (
        <div>
            <div>useRef</div>
            <div>
                <button onClick={()=> count.current++}>{count.current}</button>
                <input ref={inputRef} />
            </div>  
        </div>
    )
}

export default UseRefTest;