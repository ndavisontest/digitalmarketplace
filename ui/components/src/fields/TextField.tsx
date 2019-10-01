import * as React from "react";
import { useField } from "formik";
import AUtextInput from '@gov.au/text-inputs';


const TextField = ({
    label,
    ...props
}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>
                {label}
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
