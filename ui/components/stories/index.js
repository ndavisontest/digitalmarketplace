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
import * as Yup from "yup";


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const TestSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
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
        />
        {/* <Field name="name"
          render={({ field }) => (
            <AUtextInput {...field} placeholder="name" />
          )} />

      <ErrorMessage name="name" /> */}
        <button type="submit">Submit</button>
      </Form>
        )}
    </Formik>

  ));

  storiesOf('Checkbox', module)
  .add('checkbox component', () => (
    <Formik render={() => (
      <Checkbox id={text('Id', 'checkboxId')} label={text('Label', 'Hello Storybook')}></Checkbox>
    )}/>
  ));
