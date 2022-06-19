import React, {useState, useEffect} from 'react';

/* Import CSS */
import styles from './IncomeSummary.module.scss';

const IncomeSummary = ( props ) => {

    const [value, setValue] = useState([{name: 'Please add income'}]);

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    return (
        <div className={ styles.container }>
            <h3>{ props.title }</h3>
            <hr />
            
            <h4>{ props.subheadingOne }</h4>
            <h5>{ props.subbodyOne}</h5>

            <h4>{ props.subheadingTwo }</h4>
            <h5 className={ styles.lastElement }>{ props.subbodyTwo }</h5>
        </div>
    );
};

export default IncomeSummary;