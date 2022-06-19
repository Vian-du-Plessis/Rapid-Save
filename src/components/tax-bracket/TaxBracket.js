import React, { useEffect, useState } from 'react';
import styles from './TaxBracket.module.scss';

const TaxBracket = (props) => {

    const [value, setValue] = useState([{name: 'Please add income'}]);

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    return (
        <div className={ styles.container }>
            <h3>Tax Brackets</h3>
            <hr />
            {
                value.map((item, index) => 
                    <div key={index}>
                        <h4><strong>{item.name}</strong></h4>
                        <h5>{item.message}</h5>
                    </div>
                )
            }
        </div>
    );
};

export default TaxBracket;