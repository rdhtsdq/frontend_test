import { Card } from "antd";
import React from "react";

const cardTitleStyle: React.CSSProperties = {
    fontSize: 16,
    fontWeight: 'bold'
}

const cardDesc: React.CSSProperties = {
    color: 'gray'
}

const cardTextWrapper: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
}

interface ICardProps {
    onClick?: () => void | null
    title?: String | null
    author?: String | null
    id?: String
}


const ArticleCard: React.FC<ICardProps> = (props) => {
    return (
        <Card
            data-testid="article-card"
            id={props.id?.toString()}
            onClick={props.onClick}
            type="inner"
            style={{ marginBottom: "20px", }}>
            <div style={cardTextWrapper}>
                <span style={cardTitleStyle}>
                    {props.title ?? 'Untitled'}
                </span>
                <p style={cardDesc}>
                    {props.author ?? 'Unknown'}
                </p>
            </div>
        </Card>
    )
}

export default ArticleCard