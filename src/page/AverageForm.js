import {useState} from 'react';


const AverageForm = () => {

    const [ formValues, setFormValues ] = useState([0, 2]);

    const handleInputChange = (newNumber, index) => {
        var chaningFormValues = formValues;
        chaningFormValues[index] = newNumber;
        setFormValues(chaningFormValues)
    }

    const addNewNumber = () => {
        setFormValues([...formValues, 0])
    }

    return (
        <div>
            {
                formValues.map((number, index) => (
                    <div key={index}>
                        <input onChange={(e) => handleInputChange(+e.target.value, index)} defaultValue={number} name='numbers' type='number'/>
                        <div>X</div>
                    </div>
                ))
            }
            <div onClick={addNewNumber}>
                asgasgasg
            </div>
        </div>
    );
};

export default AverageForm;