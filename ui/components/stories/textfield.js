import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { withActions, action } from '@storybook/addon-actions';
import TextField from "../src/fields/TextField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const testSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
  });

const formikForm = (field) => (
    <Formik
        initialValues={{
            name: ''
        }}
        validationSchema={testSchema}
        onSubmit={action('form-submitted')}>
        <Form>
            {field}
            <button className="btn" type="submit">Submit</button>
        </Form>
    </Formik>
)

storiesOf('TextField', module)
.add('full', () => (
    formikForm(
        <TextField
            name="name"
            description={text('Description', 'descriptive text')}
            label={text('Label', 'Name')}
            prefix={text('Prefix', 'prefix')}
            postfix={text('Postfix', 'postfix')}
            maxCharacters={number('Max characters', 10)}
            disabled={boolean('Disabled', false)}
        />
    )
))
.add('minimum', () => (
    formikForm(
        <TextField
            name="name"
            description={text('Description', undefined)}
            label={text('Label', 'Name')}
            prefix={text('Prefix', undefined)}
            postfix={text('Postfix', undefined)}
            maxCharacters={number('Max characters', undefined)}
            disabled={boolean('Disabled', false)}
        />
    )
))
.add('password', () => (
    formikForm(
        <TextField
            name="name"
            description={text('Description', undefined)}
            label={text('Label', 'Password')}
            prefix={text('Prefix', undefined)}
            postfix={text('Postfix', undefined)}
            maxCharacters={number('Max characters', undefined)}
            disabled={boolean('Disabled', false)}
            type="password"
        />
    )
))
.add('disabled', () => (
    formikForm(
        <TextField
            name="name"
            description={text('Description', undefined)}
            label={text('Label', 'Name')}
            prefix={text('Prefix', undefined)}
            postfix={text('Postfix', undefined)}
            maxCharacters={number('Max characters', undefined)}
            disabled={boolean('Disabled', true)}
        />
    )
));