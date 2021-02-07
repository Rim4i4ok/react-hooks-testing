import { createContext, useContext, useState } from 'react';

const moods = {
 happy: '=)',
 sad: '=<'
};

const MoodContext = createContext(moods.happy);

function UseContextTest () {
    const [mood, setMood] = useState(moods.sad);
    return (   
        <div>
            <div>useContext</div>
            <div>
                <MoodContext.Provider value={mood}>
                    <button onClick={() => setMood(moods.happy)}>Say hi</button>
                    <MoodEmoji />
                    <MoodEmojiWithConsumer />
                </MoodContext.Provider>
            </div>  
        </div>          
    );
}

function MoodEmoji() {
    const mood = useContext(MoodContext);

    return <p>{mood}</p>
}

function MoodEmojiWithConsumer() {
    return <MoodContext.Consumer>
        {(mood) => <p>{mood}</p>}
    </MoodContext.Consumer>    
}

export default UseContextTest;

