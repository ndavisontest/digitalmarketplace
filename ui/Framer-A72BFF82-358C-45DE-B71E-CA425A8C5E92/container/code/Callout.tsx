import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { AUcheckbox } from "@gov.au/control-input"
import AUheading from "@gov.au/headings"
import AUcard, { AUcardInner, AUcardTitle } from '@gov.au/card';
import AUbutton from '@gov.au/buttons';
import { AUcallout } from '@gov.au/callout';

const style: React.CSSProperties = {
    background: "rgba(69,194,240,0.20)",
    fontFamily: "Helvetica",
    fontSize: "20px",
    color: "313131",
    letterSpacing: "0",
    //background: #00698F;
    lineHeight: "28px"
}



interface Props {
    text: string
    fill: string
    radius: number
}

export class Callouts extends React.Component<Props> {
    static defaultProps = {
        text: "Open to selected",
        fill: "#FFFFFF",
        radius: 100,
        width: 200,
        height: 50,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        fill: { type: ControlType.Color, title: "Fill" },
        radius: { type: ControlType.Number, title: "Radius" },
    }

    render() {
        return (
            <div
                 style={{
                    ...style,
                    background: this.props.fill,
                }}
            >
            <AUcallout srOnlyTitle title="Title of the callout">
                 <p>Description of the callout</p>
            </AUcallout>
            </div>
        )
    }
}