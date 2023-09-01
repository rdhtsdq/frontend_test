import { Header } from "antd/es/layout/layout"
import React from "react"
interface INavbarProps {
    title?: String,
    style?: React.CSSProperties

}

const NavbarStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white',
    position: 'sticky',
    top: "0",
    width: "100%",
}

const titleStyle: React.CSSProperties = {
    fontWeight: 'bold'
}

const Navbar = (props: INavbarProps) => {
    return (
        <Header style={{ ...NavbarStyle, ...props.style }}>
            <h2 style={titleStyle}>
                {props.title ?? "Articles"}
            </h2>
        </Header>
    )
}

export default Navbar