import React from 'react';

import Aux from '../../../hoc/AuxComponent/AuxComponent';
import classes from './Header.css';

const Header = (props) => {
    return (
        <Aux>
            <div className={classes.Header}>
                    Header
            </div>
        </Aux>
    );
}

export default Header;