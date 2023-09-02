import { Spin, Layout } from "antd"
import React from "react"

const loadingStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'

}

const Loading: React.FC = () => {
    return (
        <Layout.Content style={loadingStyle} >
            <Spin data-testid="loading" />
        </Layout.Content>
    )
}

export default Loading