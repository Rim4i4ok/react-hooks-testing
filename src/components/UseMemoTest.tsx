import { useState, useMemo } from 'react';

function UseMemoTest () {

    const [count, setCount] = useState(60);

    const expensiveCount = useMemo(() => {
        console.log('changed');
        return count ** 2;
    }, [count]);

    return (
        <div>
            <div>UseMemo</div>
            <div>{expensiveCount}</div>
            <button onClick={() => { setCount(count + 1); }} >+</button>
            <button onClick={() => { setCount(count - 1); }} >-</button>
        </div>
    )
}

export default UseMemoTest;