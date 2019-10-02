import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import TextField from "../src/fields/TextField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const TestSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
  });

storiesOf('TextField', module)
.add('with text', () => (
  <Formik
    initialValues={{
      name: ''
    }}
    validationSchema={TestSchema}
    onSubmit={values => {
      // same shape as initial values
      console.log('onSubmit', values);
    }}>
      {({ errors, touched }) => (
    <Form>
      <TextField
        name="name"
        description={text('Description', 'descriptive text')}
        label={text('Label', 'Name')}
        prefix={text('Prefix', 'prefix')}
        postfix={text('Postfix', 'postfix')}
        maxCharacters={number('Max characters', 10)}
      />
      <button type="submit">Submit</button>
    </Form>
      )}
  </Formik>

));