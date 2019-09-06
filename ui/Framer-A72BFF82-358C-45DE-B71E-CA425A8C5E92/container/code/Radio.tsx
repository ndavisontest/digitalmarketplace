import * as React from "react"
//import Radio from "../design"
import Yup from "yup";
import { PropertyControls, ControlType } from "framer"
import classnames from "classnames";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    overflow: "hidden",
    fontWeight: "bold",
}

interface RadioProps {
    text: string;
    fill: string;
    radius: number;
}

export class Radio extends React.Component<RadioProps> {

    //framer needs this..
    static defaultProps = {
        text: "Get Started",
        fill: "#09F",
        radius: 100,
        width: 150,
        height: 50,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        fill: { type: ControlType.Color, title: "Fill" },
        radius: { type: ControlType.Number, title: "Radius" },
    }

    render() {
        return (
            <h1>Radio & checkbox inputs with Formik</h1>
    <Formik
      initialValues={{
        radioGroup: '',
        checkboxGroup: [],
        singleCheckbox: false
      }}
      validationSchema={
        Yup.object().shape({
          radioGroup: Yup.string()
            .required('A radio option is required'),
          checkboxGroup: Yup.array()
            .required('At least one checkbox is required'),
          singleCheckbox: Yup.bool()
            .oneOf([true], 'Must agree to something')
        })
      }
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
      render={({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        touched,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <h2>Single checkbox</h2>
          <Field
            component={Checkbox}
            name="singleCheckbox"
            id="singleCheckbox"
            label="Agree to something"
          />

    <h2>Radio group</h2>
          <RadioButtonGroup
            id="radioGroup"
            label="One of these please"
            value={values.radioGroup}
            error={errors.radioGroup}
            touched={touched.radioGroup}
            >
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption1"
              label="Choose this option"
            />
            <Field
              component={RadioButton}
              name="radioGroup"
              id="radioOption2"
              label="Or choose this one"
            />
          </RadioButtonGroup>
          </form>
      )}
    />
}

