// CustomSelect.js
"use client"
import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '20px',
    padding: '4px',
    border: '1px solid #ccc',
    fontWeight:400, 
    fontFamily:'Jost,sans-serif',
    fontSize:'15.23px',
    boxShadow: 'none',
    '&:hover': { borderColor: '#ccc' }, 
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight:400, 
    fontFamily:'Jost,sans-serif',
    fontSize:'15.23px', 
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '10px',
  }),
  option: (provided, state) => ({
    ...provided,
    //color: state.isSelected ? 'white' : 'black',
    color:'black',
    backgroundColor: state.isSelected ? '#blue' : 'white',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
  }),
};

const options = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'daily', label: 'Daily' },
  { value: 'annually', label: 'Annually' },
];

const CustomSelect = ({ onChange }) => (
  <Select
    styles={customStyles}
    options={options}
    defaultValue={options[0]}
    isSearchable={false}
    onChange={onChange}
  />
);

export default CustomSelect;
