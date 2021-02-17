import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

import "./App.css"

const App = () =>{

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "59d00de3-0cb0-4cb2-a23c-0205abdd60b1"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps}/>}
        />
    );
}

export default App;