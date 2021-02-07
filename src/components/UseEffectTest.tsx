import { useEffect, useState } from 'react';

function UseEffectTest() {
    const [count, setCount] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log('Hello there, side effect!');
    })

    useEffect(() => {
        fetch('foo').then(() => setLoaded(true));
        console.log('Hello there, loaded');
    }, [count]);

    useEffect(() => {
        console.log('hi');

        return () => console.log('good bye');
    })

    return (
        <div>
            <div>
                useEffect
            </div>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                {loaded ? 'LOADED' : 'NOT LOADED'}
            </div>
        </div>
    )

}

export default UseEffectTest;