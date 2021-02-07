import { useState } from 'react';

function UseStateTest() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                useState
            </div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default UseStateTest;