import { Card } from "antd";
import Article from "../../domain/model/Article";
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
}


const ArticleCard: React.FC<Article> = (props) => {
    return (
        <Card
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