import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { AUcheckbox } from "@gov.au/control-input"
import AUheading from "@gov.au/headings"
import AUcard, { AUcardInner, AUcardTitle } from '@gov.au/card';

const style: React.CSSProperties = {

    justifyContent: "center",
    color: "#000000",
    letterSpacing: "0",
    fontSize: "13px",
    fontFamily: "Helvetica",

    //adding css attributes
    boxShadow: '0 0 9px 0 rgba(0,0,0,0.30)',
    borderRadius: '8px',

}


interface Props {
    text: string
    fill: string
    radius: number
}

export class Card extends React.Component<Props> {
    static defaultProps = {
        text: "Open to selected",
        fill: "#FFFFFF",
        radius: 100,
        width: 1500,
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
            <AUcard>
                <AUcardInner>
                    <div> 
                        <h4> add number </h4>
                        <p>sellers invited</p>
                    </div>
                    <div> 
                        <h4> add Number </h4>
                        <p>sellers applied</p>
                    </div>
                    <div> 
                        <p>Closes in</p>
                        <h4> 1w : 2d : 1h </h4>
                    </div>
                </AUcardInner>
            </AUcard>
            </div>
        )
    }
}