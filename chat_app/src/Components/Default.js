import React,{Component} from 'react';
import NavBar from './NavBar';
import { fb } from '../service';
import { useEffect } from 'react';

const FireBaseFunction =() => {
    useEffect( () => {
        fb.firestore.collection('chatUsers').where('userName','==','jayanth').get().then(
            res => {
                const user=res.docs[0]?.data();
                console.log(user);
            }
        );
    }, []);
}

class Default extends Component {


    render(){

        return(
            <div>
                <NavBar />
                <h2>Welcome to "Company Name"</h2>
            </div>
        )
    }
}

export default Default;

