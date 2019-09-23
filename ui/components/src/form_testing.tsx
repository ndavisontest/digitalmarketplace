import React from 'react';
import { SafeAreaView, TextInput, Button, ActivityIndicator} from 'react-native';
import{Formik} from 'formik';

export default () => (
    <SafeAreaView style = {{ marginTop: 90}}>
        <Formik>
            {formikProps => (
                <React.Fragment>
                    <TextInput />
                    <Button title = "Submit" />
                </React.Fragment>
            )}
            </Formik>
    </SafeAreaView>
);