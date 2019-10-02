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

  storiesOf('Checkbox', module)
  .add('checkbox component', () => (
    <Formik render={() => (
      <Checkbox id={text('Id', 'checkboxId')} label={text('Label', 'Hello Storybook')}></Checkbox>
    )}/>
  ));
