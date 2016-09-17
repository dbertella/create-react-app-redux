import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Filters = (props) => {
  const { handleSubmit, reset, change } = props
  const onChange = (e) => {
    const p = new Promise((resolve) => resolve(change('filterArtist', e.target.name, e.target.value)));
    p.then(() => handleSubmit());
  };
  return (
    <form onSubmit={handleSubmit}>
      Filters:
      <ul>
        <li>
          age range
          <Field component="input" type="text" placeholder="min" name="ageMin" onBlur={handleSubmit} />
          <Field component="input" type="text" placeholder="min" name="ageMax" onBlur={handleSubmit} />
        </li>
        <li>
          rate range
          <Field component="input" type="text" placeholder="min" name="rateMin" onBlur={handleSubmit} />
          <Field component="input" type="text" placeholder="min" name="rateMax" onBlur={handleSubmit} />
        </li>
        <li>
          gender:
          <label><Field component="input" type="radio" name="gender" value="" onClick={onChange} />none</label>
          <label><Field component="input" type="radio" name="gender" value="M" onClick={onChange} />M</label>
          <label><Field component="input" type="radio" name="gender" value="F" onClick={onChange} />F</label>
        </li>
      </ul>
      <button type="submit" onClick={reset}>Clear Filters</button>
    </form>
  )
}

export default reduxForm({
  form: 'filterArtist'
})(Filters)
