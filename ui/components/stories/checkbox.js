import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Button, Welcome } from '@storybook/react/demo';
import TextField from "../src/fields/TextField";
import Checkbox from "../src/fields/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AUtextInput from '@gov.au/text-inputs';
import * as yup from "yup";

const schema = yup.object().shape({
  registerTerms: yup.boolean()
      .oneOf([false], "Must select checkbox! ")
});

const validInputObj = {
  registerTerms: true
}

schema.isValid(true)
schema.isValid(validInputObj).then(isValid => console.log(isValid));

// const invalidInputObj = {
//   registerTerms: false
// }

// schema.isValid(invalidInputObj).then(isValid => console.log(isValid));



  storiesOf('Checkbox', module)
  .add('Single Checkbox', () => (
    <Formik render={() => (
      <Checkbox id={text('Id', 'checkboxId')} label={text('Label', 'Hello Storybook')}></Checkbox>
    )}/>
  ));


  
storiesOf('checkbox validation', module)
.add('validation', () => (
  <Formik
    initialValues={{
      name: ''
    }}
    validationSchema={schema}
    onSubmit={action('form-submitted')}>
    <Form>
      <Checkbox
        registerTerms="registerTerms"
        description={text('Description', 'descriptive text')}
        label={text('Label', 'Checkbox Title')}
      />
      <button className="btn" type="submit">Submit</button>
    </Form>
  </Formik>

));
