import React from 'react';
import { Forward } from '../assets';
import thumb from '../assets/slider-thumb.png';
/**
 * input : {
 *  name,
 *  value
 *  onChange
 *  type (number, text, date, etc.)
 * }
 */
const Form = ({ inputs, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} method='POST'>
      {inputs.map((input, key) => {
        return (
          <div className='form-group' key={key}>
            {input.type === 'range' ? (
              input.name === 'Day' ? (
                <div className='d-flex justify-content-center'>
                  <label>
                    {input.name} {input.value}
                  </label>
                </div>
              ) : (
                <div className='d-flex justify-content-between'>
                  <label htmlFor={input.name}>{input.name}: </label>
                  <label>{input.value}</label>
                </div>
              )
            ) : (
              ''
            )}
            <input
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              className={
                input.type === 'range' ? 'range form-control' : 'form-control'
              }
              placeholder={input.name}
              // required
            />
          </div>
        );
      })}
      <button type='submit' className='btn'>
        <span>Submit</span>
        <Forward />
      </button>
    </form>
  );
};

export default Form;
