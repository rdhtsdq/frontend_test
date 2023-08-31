import { Spin } from "antd"
import { Content } from "antd/es/layout/layout"
import React from "react"

const loadingStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'

}

const Loading: React.FC = () => {
    return (
        <Content style={loadingStyle}>
            <Spin />
        </Content>
    )
}

export default Loading