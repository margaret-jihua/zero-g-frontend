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
            <label htmlFor={input.name}>{input.name}: </label>
            {input.type === 'range' ? (
              <label className='d-flex justify-content-end'>
                {input.value}
              </label>
            ) : (
              ''
            )}
            <input
              type={input.type}
              value={input.value}
              onChange={input.onChange}
              className='form-control'
            />
          </div>
        );
      })}
      <button type='submit' className='btn btn-primary float-right'>
        Submit
      </button>
    </form>
  );
};

export default Form;
