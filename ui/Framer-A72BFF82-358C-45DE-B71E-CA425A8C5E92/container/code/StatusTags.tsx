import * as React from "react"
import { PropertyControls, ControlType } from "framer"

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#09F",
    overflow: "hidden",
}

interface Props {
    text: string
    fill: string
    radius: number
}


export class StatusTags extends React.Component<Props> {
    static defaultProps = {
        text: "Submitted",
        fill: "#FFFFFF",
        radius: 100,
        width: 150,
        textSize: "16px",
        height: 50,
    }

    static propertyControls: PropertyControls = {
        text: { type: ControlType.String, title: "Text" },
        fill: { type: ControlType.Color, title: "Fill" },    
        textSize:{
            type: ControlType.Number,
            unit:'px'
        },
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