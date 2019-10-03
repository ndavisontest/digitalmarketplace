import AUtextInput from '@gov.au/text-inputs';
import { useField } from 'formik';
import * as React from 'react';
import '../index.css';

export interface ITextFieldProps {
    name: string;
    label: string;
    description: string;
    prefix: string;
    postfix: string;
    maxCharacters: number;
    disabled: boolean;
    type: string;
}

const TextField = (props: ITextFieldProps) => {
    const [field, meta] = useField(props.name);
    const [characterCount, setCharacterCount] = React.useState(field.value.length);
    let columnSize: number = 12;
    if (props.prefix) {
        columnSize--;
    }
    if (props.postfix) {
        columnSize--;
    }
    return (
        <div className="au-grid">
            <div className="container-fluid">
                <div className="row">
                    <label className="text-bold text-size-lg" htmlFor={`id-${props.name}`}>{props.label}</label>
                </div>
                <div className="row text-size-sm">
                    <p>{props.description}</p>
                </div>
                <div className="row">
                    {props.prefix &&
                        <span className="float-left margin-top-sm">
                            {props.prefix}
                        </span>
                    }
                    <span className={`col-xs-${columnSize}`}>
                        <div className="row">
                            <div className="col-xs-12">
                                <AUtextInput
                                    id={`id-${props.name}`}
                                    status={meta.touched && meta.error ? 'invalid' : meta.touched ? 'valid' : ''}
                                    {...field}
                                    {...props}
                                    onChange={(e: any) => {
                                        field.onChange(e);
                                        setCharacterCount(e.target.value.length);
                                    }}
                                    type={props.type}
                                    disabled={props.disabled}
                                    block
                                />
                            </div>
                        </div>
                        <div className="row text-size-sm margin-top-xs margin-bottom-md">
                            <div className="col-xs-8 text-colour-red">
                                {meta.touched && meta.error ? (
                                    meta.error
                                ) : null}
                            </div>
                            <div className="col-xs-4 text-align-right">
                                {props.maxCharacters &&
                                    `${characterCount} of ${props.maxCharacters} characters`
                                }
                            </div>
                        </div>
                    </span>
                    {props.postfix &&
                        <span className="float-left margin-top-sm">
                            {props.postfix}
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default TextField;
