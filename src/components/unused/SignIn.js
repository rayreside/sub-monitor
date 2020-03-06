import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from '../actions';

const [count, setCount] = useState(0);

const mapStateToProps = state => {
    return {
        route: state.logIn.route
    }
}
const mapDispatchToProps = dispatch => {

}

const onSubmit = event => {
}

function SignIn() {
    return (
        <div className="">
            <input 
                className="b pa2 br2 bn w-100 mb2" 
                type="email" 
                placeholder='Email'
            />
            <input 
                className="b pa2 br2 bn w-100 mb2" 
                type="password" 
                placeholder='Password'
            />
            <input 
                className="b ph3 pv2 ba pointer f4" 
                type="submit" 
                value="Sign in"
                onclick={onSubmit}
            />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);