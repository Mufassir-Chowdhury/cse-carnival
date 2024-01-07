import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ label, type, name, classValue }) => {
    const id = name.replaceAll(' ', '-').toLowerCase();
    const placeholderText = `Enter ${label}`;

    return (
        <label className={`flex flex-col gap-2 label ${classValue}`}>
            <span className="text-md font-bold text-field-title leading-6 pl-3">{label}</span>
            <div className="flex rounded-full shadow-sm border border-field-border bg-field-body sm:max-w-md">
                <input
                    required
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={id}
                    className="block font-medium flex-1 border-0 bg-transparent py-1.5 px-4 text-field-title placeholder:text-field-placeholder sm:text-sm sm:leading-6"
                    placeholder={placeholderText}
                />
            </div>
        </label>
    );
};



const SelectField = ({ label, name, classValue, options }) => {
    const id = name.replaceAll(' ', '-').toLowerCase();
    const placeholderText = `Select ${label}`;

    return (
        <label className={`flex flex-col gap-2 label ${classValue}`}>
            <span className="text-md font-bold text-field-title leading-6 pl-3">{label}</span>

            <div className="flex rounded-full shadow-sm border border-selectfield-border bg-selectfield-body   sm:max-w-md ">

                <select
                    required
                    name={name}
                    id={id}
                    className="block font-medium flex-1 border-0 bg-transparent py-1.5 mx-4 text-field-title placeholder:text-field-placeholder  sm:text-sm sm:leading-6"

                >
                    <option value="" hidden>{placeholderText}</option>
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