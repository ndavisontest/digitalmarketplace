import * as React from "react";
import { connect, FormikContext } from "formik";
import AUtextInput from '@gov.au/text-inputs';


export interface IFormikTextFieldProps {
    formik: FormikContext<any>;
}

export interface ITextFieldProps {
    label: string;
    name: string;
}

interface ITextFieldState {
    value: string;
}

class TextField extends React.Component<IFormikTextFieldProps & ITextFieldProps, ITextFieldState> {
    constructor(props: IFormikTextFieldProps & ITextFieldProps) {
        super(props);
        this.state = {
            value: props.formik.values[props.name]
        }
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    private onBlur(e: any) {
        this.props.formik.values[this.props.name] = e.target.value;
        // this.props.formik.validateField(this.props.name)
        // if (this.props.formik.validationSchema) {
        //     this.props.formik.validationSchema.isValid({

        //     })
        // }
        this.props.formik.validateForm(this.props.formik.values);
    }
    private onChange(e: any) {
        this.setState({
            value: e.target.value
        });
    }
    public render() {
        const error = this.props.formik.errors[this.props.name];
        const touched = this.props.formik.touched[this.props.name];

        return (
            <>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <AUtextInput
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    value={this.state.value}
                />
                {/* {touched && error ? error : ''} */}
                {error}
            </>
        )
    }
}
 
export default connect<ITextFieldProps, any>(TextField);