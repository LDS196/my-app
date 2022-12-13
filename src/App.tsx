import React, {useState} from 'react';
import './App.css';
import {Input,} from "./Componets/Input";
import {ButtonForInput} from "./Componets/ButtonForInput";


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('');

    function addMessage() {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }


    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <ButtonForInput name={'+'} callBack={addMessage}/>

            {message.map((el, index) => <div key={index}>{el.message}</div>)}


        </div>
    );
}

export default App;

