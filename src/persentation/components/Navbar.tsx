import { Header } from "antd/es/layout/layout"
import React from "react"
interface INavbarProps {
    title?: String
}

const NavbarStyle: React.CSSProperties = {
    backgroundColor: 'red',
    color: 'white'
}

const titleStyle: React.CSSProperties = {
    // fontSize: '20px',
    fontWeight: 'bold'
}

const Navbar = (props: INavbarProps) => {
    return (
        <Header style={NavbarStyle}>
            <h2 style={titleStyle}>
                {props.title ?? "Articles"}
            </h2>
        </Header>
    )
}

export default Navbar