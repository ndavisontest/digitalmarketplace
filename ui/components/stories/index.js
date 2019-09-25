import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Button, Welcome } from '@storybook/react/demo';
import TextField from "../src/fields/TextField";
import Checkbox from "../src/fields/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";


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

storiesOf('TextField', module)
  .add('with text', () => (
    <Formik render={() => (
      <TextField id={text('Id', 'textfieldId')} label={text('Label', 'Hello Storybook')}></TextField>
    )}/>
  ));

  storiesOf('Checkbox', module)
  .add('checkbox component', () => (
    <Formik render={() => (
      <Checkbox id={text('Id', 'checkboxId')} label={text('Label', 'Hello Storybook')}></Checkbox>
    )}/>
    
  ));
