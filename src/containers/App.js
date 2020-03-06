import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../styles/App.scss';
import Navigation from '../components/Navigation';
import List from '../components/List';
import LogIn from '../components/LogIn';
import { Fragment } from 'react';

const mapStateToProps = (state) => {
    return {
        route: state.route,
        isLoggedIn: state.isLoggedIn
    }
}

class App extends Component {
    render() {
        const { route } = this.props;

        const renderMain = ()=>{
            switch(route) {
                case ('home'):
                    return <List />
                default:
                    return <LogIn />
            }
        }

        return (
            <Fragment>
                <Navigation />
                <div className='flex flex-wrap main tc'>
                    {renderMain()}
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps)(App);