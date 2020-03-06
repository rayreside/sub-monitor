import React from 'react';
import SignIn from './SignIn';

function Form() {
    return(
        <div className="pt5 aside dt w-30 h-100 ph5">
            <div className="dtc v-mid">
                <div className="pb3">
                    <button className="w-50">Sign in</button>
                    <button className="w-50">Register</button>
                </div>
                <SignIn />
            </div>
        </div>
    )
}

export default Form;