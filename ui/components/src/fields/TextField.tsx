import * as React from "react";
import { useField } from "formik";
import AUtextInput from '@gov.au/text-inputs';

export interface ITextFieldProps {
    name: string;
    label: string;
}

const TextField = (props: ITextFieldProps) => {
    const [field, meta] = useField(props.name);

    return (
        <>
            <label>
                {props.label}
                <AUtextInput
                    {...field}
                    {...props}
                    status={meta.touched && meta.error ? 'invalid' : meta.touched ? 'valid' : ''}
                />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export default TextField
