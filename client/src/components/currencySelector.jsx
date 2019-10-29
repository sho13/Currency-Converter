import React from 'react';

const CurrencyConverter = (props) => {
  const { name, value, onChangeHandler, countries, type } = props;
  
  return (
    <select className="form-control" name={name} value={value} onChange={onChangeHandler}>
      <option>{type}</option>
      {Object.keys(countries).map(country => (<option value={country}>{country}</option>))}
    </select>
  )
}

export default CurrencyConverter;