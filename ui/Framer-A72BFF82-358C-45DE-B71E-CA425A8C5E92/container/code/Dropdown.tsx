import * as React from "react"
import { PropertyControls, ControlType } from "framer"
import { AUcheckbox } from "@gov.au/control-input"
import AUheading from "@gov.au/headings"


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

export class Dropdown extends React.Component<Props> {
    static defaultProps = {
        text: "Open to selected",
        fill: "#FFFFFF",
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
            <div
                 style={{
                    ...style,
                    background: this.props.fill,
                }}
            >
                <AUheading size="sm" level="3">
                    Type of opporunity
                </AUheading><AUcheckbox label="Seek and Proposols" name="checkbox-ex" id="cb-phone" block />
                <AUcheckbox label="Specialists" name="checkbox-ex" id="cb-tablet" block  />
                <AUcheckbox label="Ask the market" name="checkbox-ex" id="cb-laptop" block  />
                <AUcheckbox label="Training" name="checkbox-ex" id="cb-laptop" block  />
            </div>
        )
    }
}

// export function Filter({defaultEnabled}) {
//     const [enabled, setEnabled] = React.useState(defaultEnabled); //dynamic default

//     return (
//       <div
//         className={"Filter " + (enabled ? "on" : "off")}
//         //onClick={setEnabled(!enabled)}
//       >
//         <div className="Filter_inner">

//         </div>
//       </div>
//     );
//   }
