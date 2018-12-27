// import React, { PureComponent } from 'react';
import React, { useState } from 'react';

function LoginComponent() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
/*
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
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(event) {
    event.preventDefault();
    console.log('text-input=', this.password.current.value);
    if (this.password.current.value.length<6) {
    this.setState({
        errors:' слишком короткий пароль, должно быть минимум 6 символов'
    })
    } else this.setState({
        errors:'good'
    })
};

handle(event) {
this.setState({
    loginValue: event.target.value
    // passwordValue: this.password.current.value
});
};

render() {
    const [count, setCount] = useState(0);

    return (
        <div> login
        {this.state.errors}
            <form onSubmit={this.handleSubmit}> 
                <label> Login:</label>
                <input onChange={this.handle.bind(this)} value={this.state.loginValue} /> {this.state.loginValue}
                <label> Password:</label>
                <input ref={this.password} /> 
                <input type='submit'/>
            </form>
    )
}
}
*/

export default LoginComponent;