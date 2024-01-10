import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

const FormField = ({ label, type="text", name, classValue="", onChange, required=true, note }) => {
    const id = name.replaceAll(' ', '-').toLowerCase();
    const isOptional = label.toLowerCase().includes('(optional)');
    const placeholderText = isOptional ? 'Enter if available' : `Enter ${label}`;

    return (
        <label className={`flex flex-col gap-2 label ${classValue}`}>
            <span className="text-lg flex items-baseline font-merriweather font-bold text-field-title leading-6 pl-3">
                {label}
                {note && <span>
                    <Tooltip title={note}>
                        <svg className='mx-4' width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z" fill="#080341"/>
                        </svg>
                    </Tooltip>
                    {/* <span className="text-sm font-merriweather text-field-title leading-6 pl-3">{note}</span> */}
                 </span>}
            </span>
            <div className="flex  w-full rounded-full shadow-sm border border-field-border bg-field-body">
                <input
                    required={required}
                    type={type}
                    name={name}
                    id={id}
                    autoComplete={id}
                    className="block w-full focus:outline-none font-medium flex-1 border-0 bg-transparent py-1.5 px-4 text-field-title placeholder:text-field-placeholder sm:text-sm sm:leading-6"
                    placeholder={placeholderText}
                    onChange={(e) => onChange(e)}
                />
            </div>
        </label>
    );
};



const SelectField = ({ label, name, classValue="", options, onChange, note }) => {
    const id = name.replaceAll(' ', '-').toLowerCase();
    
    return (
        <label className={`flex flex-col gap-2 label font-merriweather ${classValue}`}>
            <span className="text-lg flex  items-baseline font-serif font-bold text-field-title leading-6 pl-3">
                {label}
                {note && <span>
                    <Tooltip title={note}>
                        <svg className='mx-4' width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12.75 15V16.5H11.25V15H12.75ZM10.5 10.4318C10.5 9.66263 11.1497 9 12 9C12.8503 9 13.5 9.66263 13.5 10.4318C13.5 10.739 13.3151 11.1031 12.9076 11.5159C12.5126 11.9161 12.0104 12.2593 11.5928 12.5292L11.25 12.7509V14.25H12.75V13.5623C13.1312 13.303 13.5828 12.9671 13.9752 12.5696C14.4818 12.0564 15 11.3296 15 10.4318C15 8.79103 13.6349 7.5 12 7.5C10.3651 7.5 9 8.79103 9 10.4318H10.5Z" fill="#080341"/>
                        </svg>
                    </Tooltip>
                    {/* <span className="text-sm font-merriweather text-field-title leading-6 pl-3">{note}</span> */}
                 </span>}            </span>
            <div className="flex rounded-full shadow-sm border  border-selectfield-border bg-selectfield-body">

                <select
                    required
                    name={name}
                    id={id}
                    className="block  focus:outline-none font-medium flex-1 border-0 bg-transparent py-1.5 mx-4 text-field-title placeholder:text-field-placeholder  sm:text-sm sm:leading-6"
                    onChange={(e) => onChange(e)}
                >
                    <option value="" selected disabled hidden>Select an option</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>
            </div>
        </label>
    );
};

// Example usage:
// <SelectField label="Country" name="country" classValue="your-custom-class" options={[{ value: 'us', name: 'United States' }, { value: 'ca', name: 'Canada' }]} />


FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    classValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    note: PropTypes.string,
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classValue: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    note: PropTypes.string,
};

export { FormField, SelectField };