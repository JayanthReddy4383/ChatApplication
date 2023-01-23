import {ChatEngine} from 'react-chat-engine';
import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="51bc2ad9-9820-4d3f-b520-84c0ee082677"
            userName="User2"
            userSecret="Secret2"
            render
        />
    )
}

export default App;