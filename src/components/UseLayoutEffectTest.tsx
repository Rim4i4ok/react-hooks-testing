import { useLayoutEffect, useRef } from 'react';

function UseLayoutEffectTest() {

    const myBtn = useRef<HTMLButtonElement>(null);

    useLayoutEffect(() => {
        if (myBtn.current == null) return;

        const box = myBtn.current.getBoundingClientRect();
        console.log(box.height, box.left);
    })

    return (
        <div>
            <div>useLayoutEffect</div>
            <div>
                <button ref={myBtn}>btn</button>
            </div>
        </div>
    )
}

export default UseLayoutEffectTest;