import React from "react";

//robot array values get passed to Card as destructured variables
const ListItem = ({ name, price }) => {
    return (
        <article className="dt bb b--black-05 pb2 mt2">
            <div className="dtc v-mid tl">
                <h3 className="f5 fw6 lh-title mv0">{name}</h3>
                <h2 className="f6 mt0 mb0 black-60">{price.toString()}</h2>
            </div>
            <div className="dtc v-mid">
                <div className="tr">
                    <button className="f5 bg-white ba dim pointer pv1" type="submit">Edit</button>
                    <button className="f5 bg-white ba dim pointer pv1" type="submit">Remove</button>
                </div>
            </div>
        </article>
    );
}

export default ListItem;