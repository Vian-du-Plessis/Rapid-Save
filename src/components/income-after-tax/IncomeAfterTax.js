import React, {useState, useEffect} from 'react';
import styles from './IncomeAfterTax.module.scss';

const IncomeAfterTax = (props) => {

    const [value, setValue] = useState([]);

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    return (
        <div className={ styles.container }>
            <h3>{ props.title }</h3>
            <hr />
            {
                value.map((item, index) => 
                    <div key={index}>
                        <h4><strong>{item.name}</strong></h4>
                        <h5>{item.messageTwo}</h5>
                    </div>
                )
            }
        </div>
    );
};

export default IncomeAfterTax;