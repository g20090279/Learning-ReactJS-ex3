import React, { Component } from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
            redirectToReferrer: false
        };
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup(){
        // console.log("I am here");
        if(this.state.username && this.state.password && this.state.email && this.state.name){
            console.log(this.state);
            PostData('signup',this.state).then((result)=>{
                let responseJson = result;
                if(responseJson.userData){
                    console.log(responseJson);
                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
                else{
                    alert(result.error);
                }
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
        // console.log(`${e.target.name}: ${e.target.value}`);
    }

    render(){
        if(this.state.redirectToReferrer || sessionStorage.getItem('userData')){
            return(<Redirect to={'./home'}/>)
        }
        return(
            <div className="row" id="sBody">
                <div className="medium-5 columns left">
                    <h4>Singup</h4>
                    <input type="text" name="email" placeholder="Email" onChange={this.onChange}/>
                    <input type="text" name="name" placeholder="Name" onChange={this.onChange}/>
                    <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
                    <input type="submit" className="button" value="Sign up" onClick={this.signup}/>
                    <a href="./login">Login</a>
                </div>
            </div>
        );
    }
}

export default Signup;