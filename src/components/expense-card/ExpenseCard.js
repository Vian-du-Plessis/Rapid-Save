import React from 'react';
import styles from './ExpenseCard.module.scss';

import Icon from '../../assets/svg/close.svg';

const ExpenseCard = (props) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.leftContainer }>
                <h4>{props.title}</h4>
                <h4>{props.price}</h4>
            </div>
            <div className={ styles.rightContainer }>
                <div 
                    className={ styles.iconContainer }
                    onClick={props.onClick}
                >
                    <img src={ Icon } alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default ExpenseCard;