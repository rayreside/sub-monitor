import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const mapStateToProps = (state) => {
    return {
        subList: state.subList
    }
}

class List extends Component {
    render() {

    const { subList } = this.props;
    const listArray = subList.map(item => {
        return (
            <ListItem 
                key={item.id.toString()}
                name={item.name} 
                price={item.price}
            />
        )
    });
    return (
        <div className='flex flex-column center pt5 dt w-100 ph3 aside'>
            <h3>List</h3>
            <div className="flex flex-column">
                {listArray}
            </div>
            <div className="w-30 center pt4">
                <button className="listBtn addList">Add Item</button>
            </div>
        </div>
    )

    }
}

export default connect(mapStateToProps)(List);