import React from 'react';
import { connect } from 'react-redux';
import { setRoute } from '../actions';

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetRoute: (event) => {
            dispatch(setRoute(event.target.id))
        }
    }
}

class LogIn extends React.Component {

    render() {
        const { onSetRoute } = this.props;
        return (
            <div className="w-100 h-100 flex items-center pt5 ph4 aside">
                <div className="flex flex-column center">
                    <input 
                        className="b pa2 br2 bn mb2" 
                        type="email" 
                        placeholder='Email'
                    />
                    <input 
                        className="b pa2 br2 bn mb2" 
                        type="password" 
                        placeholder='Password'
                    />
                    <input 
                        className="b ph3 pv2 ba pointer f4" 
                        type="submit" 
                        id='home'
                        onClick={onSetRoute}
                    />
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);