import * as React from "react"
import { Frame, Stack } from "framer"
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
}
function Button({ title, active, onTap }) {
    const opacity = active ? 1 : 0.5
    return (
        <Frame height={80} onTap={onTap} opacity={opacity}>
            {capitalize(title)}
        </Frame>
    )
}
export function TabBar() {
    const [active, setActive] = React.useState("home")
    function propsFor(title) {
        return {
            title,
            active: active === title,
            onTap: () => setActive(title),
        }
    }
    return (
        <Stack>
            <Button {...propsFor("Option 1")} />
            <Button {...propsFor("Option 2")} />
        </Stack>
    )
}