import React from 'react';
import { AUradio } from '@gov.au/control-input';

class Radio extends React.Component {
    render(){
        return(
        //<AUradio label="Phone" status="valid" name="radio-ex" id="radio-phone-invalid"/>
        <AUradio label="Tablet" status="invalid" name="radio-ex" id="radio-tablet-invalid" defaultChecked />
        )
    }
}

export default Radio;

