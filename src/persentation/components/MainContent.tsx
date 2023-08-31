import { Content } from "antd/es/layout/layout"
import Article from "../../domain/model/Article"
import React from "react"
import ArticleCard from "./ArticleCard"

type ContentType = 'List' | 'Detail'

interface IMainContentProps {
    type: ContentType,
    data: Article[] | Article | null,
    title?: String | null,
}

const contentStyle: React.CSSProperties = {
    minHeight: '90vh',
    padding: '15px 30px',
}

const titleStyle: React.CSSProperties = {
    margin: '20px 0px'
}


const MainContent: React.FC<IMainContentProps> = ({ type = 'Detail', data = [], title = null }) => {
    return (
        <Content style={contentStyle}>
            {
                title && (
                    <h1 style={titleStyle}>
                        {title}
                    </h1>
                )
            }
            {type === 'List' && data && Array.isArray(data) && (
                data.map((art: Article, index: number) => (
                    <ArticleCard key={index} title={art.title} author={art.author} content={art.content} description={art.description} publishedAt={art.publishedAt} />
                ))
            )}
        </Content>
    )
}

export default MainContent