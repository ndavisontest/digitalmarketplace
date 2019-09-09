import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { AUcheckbox } from "@gov.au/control-input"
import AUheading from "@gov.au/headings"
import AUaccordion from '@gov.au/accordion';


const style: React.CSSProperties = {

    justifyContent: "center",
    textAlign: "center",
    color: "#000000",
    letterSpacing: "0",
    fontSize: "13px",
    fontFamily: "Helvetica",

}

interface Props {
    text: string
    fill: string
    radius: number
}

export class Filter extends React.Component<Props> {
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
            <AUaccordion header="Type">
                    <AUheading size="sm" level="3">
                    Type of opportunity
                    </AUheading>
                    <AUcheckbox label="Seek and Proposols" name="checkbox-ex" id="cb-phone" block />
                    <AUcheckbox label="Specialists" name="checkbox-ex" id="cb-tablet" block  />
                    <AUcheckbox label="Ask the market" name="checkbox-ex" id="cb-laptop" block  />
                    <AUcheckbox label="Training" name="checkbox-ex" id="cb-laptop" block  />
            </AUaccordion>
            </div>
        )
    }
}
