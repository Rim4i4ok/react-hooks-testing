import { useReducer } from 'react';

function reducer(state:any, action:any) {
    switch (action.type) {
        case 'inc':
            return state + 1;

        case 'dec':
            return state - 1;

        default:
            return state;
    }
}

function UseReducerTest () {

    const [state, dispatch] = useReducer(reducer, 0);
    
    return (
        <div>
            <div>UseReducer</div>
            <div>
                Count: {state}
                <button onClick={() => dispatch({type: 'inc'})}>+</button>
                <button onClick={() => dispatch({type: 'dec'})}>-</button>
            </div>
        </div>
    )
}

export default UseReducerTest;