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
        onSetRoute: (event) => dispatch(setRoute(event.target.value))
    }
}

class Navigation extends React.Component {
    render() {
        const { onSetRoute, route } = this.props;
        const renderSignOut = () => {
            if(route==="Sign in"){
                return <li className="right pointer"
                onClick={onSetRoute}>Sign out</li>
            }
        }

        return (
            <nav className='navbar'>
                <ul>
                    <li className="pointer">Home</li>
                    <li className="pointer">Settings</li>
                    {renderSignOut()}
                </ul>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);