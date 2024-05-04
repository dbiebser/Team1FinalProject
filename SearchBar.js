import React from 'react';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';

const SearchDropdown = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (option) => {
        setSelectedOption(option);
        console.log(`Option selected:`, option);
    }
    const loadOptions = (inputValue) => {
        return fetch(/*link for mongo*/)
            .then(response => response.json())
            .then(data => data.map(user => ({ /*get title of show*/})))
    }
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\\\\W/g, '');
        setInputValue(inputValue);
        return inputValue;
    }

    return (
        <div>
            <AsyncSelect 
                cacheOptions
                loadOption={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
            />
        </div>
    )
}

// .search-dropdown {
//     min-width="300px";
// }