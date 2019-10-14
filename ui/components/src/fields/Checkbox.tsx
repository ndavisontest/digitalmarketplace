import * as React from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import { AUcheckbox } from '@gov.au/control-input';
import * as yup from "yup";


export interface ICheckboxFieldProps {
    label: string;
    id: string;
    authorised: boolean;
}

class Checkbox extends React.Component<ICheckboxFieldProps> {
    render() {
        return (
            <React.Fragment>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <Field name={this.props.id} render={(field: FieldProps) => (
                    <AUcheckbox {...field} id={this.props.id} block />
                )}/> 
            </React.Fragment>
        )
    }
}

export default Checkbox;

