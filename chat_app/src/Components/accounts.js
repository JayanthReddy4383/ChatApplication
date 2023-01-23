import React , {Component} from 'react';
import NavBar from './NavBar';

class Accounts extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <h3>Login</h3>
                <table>
                    <tr>
                        <td><label>User Name</label></td>
                        <td><input id="User Name"></input></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input id="Password"></input></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Accounts;