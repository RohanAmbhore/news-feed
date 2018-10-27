import React from 'react';

import classes from './NewsCard.css';
import CommentConatainer from '../../../containers/CommentContainer/CommentContainer';

const NewsCard = (props) => {
    return(
        <div className={classes.NewsCard}>
            <div className={classes.NewsTitle}>
                <div className={classes.CircleProfile}>
                    R
                </div>
                <div>
                    Rohan Ambhore
                </div>
            </div>
            <div className={classes.NewsTopImage}>
            </div>
            <div className={classes.NewsContent}>
                <CommentConatainer></CommentConatainer>
            </div>
        </div>
    );
}

export default NewsCard;