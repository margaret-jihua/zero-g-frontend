import React from 'react';

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
          <div className='form-group'>
            {input.type === 'range' ? (
              input.name==='Day' ? (
                <div className="d-flex justify-content-center">
                  <label>{input.name} {input.value}</label>
                </div>
              ):(
              <div className="d-flex justify-content-between">
                <label htmlFor={input.name}>{input.name}: </label>
                <label>{input.value}</label>
              </div>
            )) : (
              ''
            )}
            {
              input.max 
              ? 
              (<input
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              className='form-control'
              placeholder={input.name}
              max={input.max}
              // required
              />)
              :
              (<input
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              className='form-control'
              placeholder={input.name}
              // required
              />)
            }
            
          </div>
        );
      })}
      <button type='submit' className='btn'>
        Submit
      </button>
    </form>
  );
};

export default Form;
