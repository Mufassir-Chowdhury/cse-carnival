import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ label, type, name, classValue }) => {
    const id = name.replaceAll(' ', '-').toLowerCase()
    return (
        <label className={`label ${classValue}`}>
            <span className="text-sm font-medium text-gray-900 leading-6">{label}</span>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input required type={type} name={id} id={id} autoComplete={id} className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder={name}/>
            </div>
        </label>
    );
};

const SelectField = ({ label, name, classValue, options }) => {
    const id = name.replaceAll(' ', '-').toLowerCase()

    return (
        <label className={`label ${classValue}`}>
            <span className="text-sm font-medium text-gray-900 leading-6">{label}</span>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <select required name={name} id={id} className="select block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>
            </div>
        </label>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classValue: PropTypes.string.isRequired,
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    classValue: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export { FormField, SelectField };