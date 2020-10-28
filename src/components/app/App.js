import React, {useState} from 'react';
import Header from '../header/Header'
import MadLibForm from '../mad-lib-form/MadLibForm'

const App = () => {
    const [keyWords, setKeyWords] = useState([])
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <MadLibForm />
            </main>
        </div>
    );
};

export default App;

// will contain a header
// will contain a welcome screen
// move to form screen after welcome
// after from submited load results screen
// keywords state will be created in app and passed down to children