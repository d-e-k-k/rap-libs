import React, {useState} from 'react';
import Header from '../header/Header'
import MadLibForm from '../mad-lib-form/MadLibForm';

const App = () => {
    const [keyWords, setKeyWords] = useState([])
    return (
        <div>
            <Header />
            <main>
                <MadLibForm 
                    keyWords={keyWords}
                    setKeyWords={setKeyWords}
                />
            </main>
        </div>
    );
};

export default App;