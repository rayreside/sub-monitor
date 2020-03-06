import React from 'react';

class List extends React.Component {
    render() {
        return (
            <div className='flex flex-column center pt5 dt w-40 ph5 aside'>
                <h3>List</h3>
                <ul className="list"></ul>
                <input id="addListItem" type="text" placeholder="Item name" />
                <button className="listBtn addList">Add Item</button>
            </div>
        )
    }
}

export default List;