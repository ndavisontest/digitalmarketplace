
import * as React from "react"
import { PropertyControls, ControlType } from "framer"



// background: #E8F5FA;
// border-radius: 100px;
// font-family: Helvetica;
// font-size: 13px;
// color: #313131;
// letter-spacing: 0;
// text-align: center;
// line-height: 26px;


const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#313131",
    overflow: "hidden",
    fontWeight: "bold",
    letterSpacing: "0",
    fontSize: "13px",
    fontFamily: "Helvetica",
    borderRadius: "100px"
    
}


interface Props {
    text: string
    fill: string
    radius: number
    
}

export class OpportunityTags extends React.Component<Props> {
    static defaultProps = {
        text: "Open to selected",
        fill: "#E8F5FA",
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
                    borderRadius: this.props.radius,
                }}
            >
                {this.props.text}
            </div>
        )
    }
}
