import * as React from "react";
import { useField } from "formik";
import AUtextInput from '@gov.au/text-inputs';

export interface ITextFieldProps {
    name: string;
    label: string;
    description: string;
    prefix: string;
    postfix: string;
    maxCharacters: number;
}

const TextField = (props: ITextFieldProps) => {
    const [field, meta] = useField(props.name);
    const [characterCount, setCharacterCount] = React.useState(field.value.length)
    return (
        <>
            <label htmlFor={`id-${props.name}`}>{props.label}</label>
            <p>{props.description}</p>
            {props.prefix}
            <AUtextInput
                id={`id-${props.name}`}
                status={meta.touched && meta.error ? 'invalid' : meta.touched ? 'valid' : ''}
                {...field}
                {...props}
                onChange={(e: any) => {
                    field.onChange(e);
                    setCharacterCount(e.target.value.length)
                }}
            />
            {props.postfix}
            {props.maxCharacters &&
                <div>{characterCount} of {props.maxCharacters}</div>
            }
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

export default TextField
