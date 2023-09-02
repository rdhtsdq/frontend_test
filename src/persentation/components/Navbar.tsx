// import { Header } from "antd/es/layout/layout"
import { Layout } from "antd"
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
        <Layout.Header style={{ ...NavbarStyle, ...props.style }} data-testid="nav-test-id">
            <h2 style={titleStyle}>
                {props.title ?? "Articles"}
            </h2>
        </Layout.Header>
    )
}

export default Navbar