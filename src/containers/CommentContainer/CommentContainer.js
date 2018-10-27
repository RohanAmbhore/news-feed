import React, { Component } from 'react';

import CommenList from '../../component/Comments/CommentList/CommentList';
import {updateObject, checkValidity} from '../../Shared/utils';
import Input from '../../component/UI/Input/Input';
import classes from './CommentContainer.css';

class CommentContainer extends Component {
    state = {
        controls: {
            comments: {
                elementType: 'input',
                elementConfig: {
                    type: 'Comment',
                    placeholder: 'Type your comment here ...'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    };

    constructor() {
        super();
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
    }

    inputChangedHandler(event, controlName) {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    render() {
        return (
            <div>
                <CommenList></CommenList>
                <div className={classes.NewsCommentTextBox}>
                    <Input
                        elementType={this.state.controls.comments.elementType}
                        elementConfig={this.state.controls.comments.elementType.elementConfig}
                        value={this.state.controls.comments.elementType.value}
                        invalid={!this.state.controls.comments.elementType.valid}
                        shouldValidate={this.state.controls.comments.elementType.validation}
                        touched={this.state.controls.comments.elementType.touched}
                        changed={(event) => this.inputChangedHandler(event, 'comments')} />
                </div>
            </div>
        );
    }
}

export default CommentContainer;