import { Content } from "antd/es/layout/layout"
import React from "react"

interface IMainContentProps {
    children: React.ReactNode | React.ReactNode[]
    title: String,
}


const contentStyle: React.CSSProperties = {
    minHeight: '90vh',
    padding: '15px 30px',
    marginTop: '64px',
    marginBottom: '60px'
}

const titleStyle: React.CSSProperties = {
    margin: '10px 0px'
}



const MainContent: React.FC<IMainContentProps> = ({ children, title = null }) => {

    return (
        <Content style={contentStyle}>

            {/* type is list */}
            {
                title && (
                    <h1 style={titleStyle}>
                        {title}
                    </h1>
                )
            }

            {children}
        </Content>
    )
}

export default MainContent