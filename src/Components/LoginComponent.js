import React, { PureComponent } from 'react';

class LoginComponen extends PureComponent {
constructor(props) {
    super(props);
    this.login=React.createRef();
    this.password=React.createRef();
    this.state={
    errors:[],
    loginValue:'',
    passwordValue:''
    };
}
seeRef(event) {
    event.preventDefault();
    console.log('text-input=', this.password.current.value)
};

handle(event) {
this.setState({
    loginValue: event.target.value
    // passwordValue: this.password.current.value

});
};

render() {
    console.log('text-input=', this.textInput)
    return (
        <div> login
            <form> 
                <label> Login:</label>
                <input onChange={this.handle.bind(this)} value={this.state.loginValue} /> {this.state.loginValue}
                <label> Password:</label>
                <input ref={this.password} /> 
                <input type='submit' onClick={this.seeRef.bind(this)}/>
            </form>
        </div>
    )
}
}

export default LoginComponen;