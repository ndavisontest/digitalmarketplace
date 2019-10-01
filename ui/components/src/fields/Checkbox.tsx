import * as React from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import { AUcheckbox } from '@gov.au/control-input';

export interface ICheckboxFieldProps {
    label: string;
    id: string;

}

    //"resolveJsonModule": true, add in tsconfig line 16

class Checkbox extends React.Component<ICheckboxFieldProps> {
    render() {
        return (
            <React.Fragment>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <Field name={this.props.id} render={(field: FieldProps) => (
                    <AUcheckbox {...field} id={this.props.id} block />
                )}/>
               {/* <AUcheckbox label="Phone" name="checkbox-ex" id="cb-phone"/>
               <AUcheckbox label="Tablet" name="checkbox-ex" id="cb-tablet" defaultChecked /> */} */}
            </React.Fragment>
        )
    }
}

export default Checkbox;