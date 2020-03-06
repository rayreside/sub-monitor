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

class Navigation extends React.Component {
    render() {
        const { onSetRoute, route } = this.props;
        const renderSignOut = () => {
            if(route!=='login'){
                return <button
                    className="f4 pointer mr3"
                    id='login'
                    onClick={onSetRoute}
                >Sign out</button>
            }
        }

        return (
            <nav className='navbar flex justify-between'>
                <div className='flex'>
                    <button 
                        className="f4 pointer mr3"
                        id='home'
                        onClick={onSetRoute}
                    >Home</button>
                    <button
                        className="f4 pointer mr3"
                        id='settings'
                        onClick={onSetRoute}
                    >Settings</button>
                    {renderSignOut()}
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);