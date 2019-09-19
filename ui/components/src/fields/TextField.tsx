import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import AUtextInput from '@gov.au/text-inputs';


export interface ITextFieldProps {
    label: string;
    id: string;
}

class TextField extends React.Component<ITextFieldProps> {
    render() {
        return (
            <React.Fragment>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <AUtextInput id={this.props.id} block />
            </React.Fragment>
        )
    }
}

export default TextField;