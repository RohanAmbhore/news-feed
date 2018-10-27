import React, {Component} from 'react';

import NewsCard from '../NewsMedia/NewsCard/NewsCard';

class CenterPanel extends Component {
    render() {
        return(
            <center>
                <NewsCard></NewsCard>
            </center>
        );
    }
}

export default CenterPanel;