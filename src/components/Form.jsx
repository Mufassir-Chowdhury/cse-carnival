import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ label, type="text", name, classValue="", onChange, required=true, note }) => {
    const id = name.replaceAll(' ', '-').toLowerCase();
    const isOptional = label.toLowerCase().includes('(optional)');
    const placeholderText = isOptional ? 'Enter if available' : `Enter ${label}`;

    return (
        <label className={`flex flex-col gap-2 label ${classValue}`}>
            <span className="text-lg font-merriweather font-bold text-field-title leading-6 pl-3">
                {label}
                {note && <span className="text-sm font-merriweather text-field-title leading-6 pl-3">{note}</span>}
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
            <span className="text-lg font-serif font-bold text-field-title leading-6 pl-3">
                {label}
                {note && <span className="text-sm font-merriweather text-field-title leading-6 pl-3">{note}</span>}
            </span>
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