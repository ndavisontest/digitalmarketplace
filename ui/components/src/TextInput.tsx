import * as React from "react";
import { withFormik, FormikProps, Form } from "formik";
//import '../styles/TextInput.css';
import AUtextInput from '../node_modules/@gov.au/text-inputs';

interface FormValues{
    text: string;
  }
  //in case we wnat to pass other props to our component
  interface OtherProps{
    title?:string 
  }
  
  // define properties with initial values 
  interface MyFormProps {
    initialText?: string;
  }

const TextInput = (props: OtherProps & FormikProps<FormValues>) =>{
  return (
    <Form>
      <h1>About</h1>
       <label htmlFor="text-input" >Title</label>
       <AUtextInput id="text-input" />
    </Form>
  );
}
  

export default TextInput;