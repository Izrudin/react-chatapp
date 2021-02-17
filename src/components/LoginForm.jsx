import { useState } from "react"
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 
            'Project-ID':  '59d00de3-0cb0-4cb2-a23c-0205abdd60b1',
            'User-Name': username,
            'User-Secret': password
        }

        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        }
        catch(error){
            setError('Incorrect credentials. Try again.')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">React Chat App</h1>
                <form onSubmit={ handleSubmit}>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className = "error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;