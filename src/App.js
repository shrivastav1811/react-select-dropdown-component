import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import SelectCurrency from 'react-select-currency'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function App() {

  // country select
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setValue(value)
  }

  // currency select
  const onSelectedCurrency = currencyAbbrev => {
    console.log((`Selected ${currencyAbbrev}`));
}

  // react select
  const [selectedOption, setSelectedOption] = useState();
  const option = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
  console.log(value);
  return (
    <div className>
      <Select options={options} value={value} onChange={changeHandler} className="select" />
      {/* <SelectCurrency value="" onCurrencySelected={onSelectedCurrency} /> */}
      <PhoneInput
        inputProps={{
    country:'us',
    name: 'phone',
    required: true,
    autoFocus: true
        }}
        className="select"          
      />
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={option}
        className="select"
      />
    </div>
  );
}

export default App;
