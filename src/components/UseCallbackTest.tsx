import { useState, useCallback, useEffect, FC } from 'react';

function UseCallbackTest() {

    const [count, setCount] = useState(60);

    const showCount = useCallback(() => {
        alert(count);
    }, [count]);

    return (
        <div>
            <div>useCallback</div>
            <div>
                <SomeChild count={count} handler={showCount} />
                <SomeChild count={count} handler={showCount} />
            </div>
        </div>
    )
}

interface Props {
    count: number,
    handler: () => void
}

const SomeChild: FC<Props> = ({count, handler}) => {
    useState(() => {
        console.log('rerender child');
    });

    return (<button onClick={handler}>{count}</button>);
}

export default UseCallbackTest;