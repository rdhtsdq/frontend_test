import { Layout } from "antd";
import Article from "../../domain/model/Article";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MainContent from "../components/MainContent";


const baseStyle: React.CSSProperties = {
    lineHeight: '18px',
    display: 'flex',
    justifyContent: 'center',
}

const authorStyle: React.CSSProperties = {
    color: 'GrayText',
    maxWidth: '20vw',
    marginBottom: "20px"
}

const descStyle: React.CSSProperties = {
    maxWidth: '60vw',
    marginTop: '30px',
    fontSize: "16px",
    marginBottom: '10px'
}

const contentWrapper: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: "90%",
    flexDirection: 'column'
}

const contentStyle: React.CSSProperties = {
    fontSize: '16px',
    maxWidth: '60vw'
}


const ArticleDetail: React.FC = () => {
    const [article, setArticle] = useState<Article>({})
    const { state } = useLocation()

    useEffect(() => {
        if (state.article) {
            setArticle(state.article)
        }
    }, [])

    return (
        <Layout>
            <Navbar style={{ position: 'fixed', width: '100%', zIndex: '1' }} />
            <MainContent title={article.title ?? ''} >
                {/* {JSON.stringify(article)} */}
                <div style={baseStyle}>
                    <div style={contentWrapper}>
                        <div style={authorStyle}>
                            {
                                article.author ?? 'unknown'
                            } -  {
                                new Date(Date.parse(article.publishedAt?.toString() ?? '')).toLocaleString()
                            }
                        </div>
                        {
                            article.urlToImage && (
                                <img src={article.urlToImage.toString() ?? null} alt='News Image' />
                            )
                        }
                        <div style={descStyle}>
                            {
                                article.description ?? 'no description'
                            }
                        </div>
                        <p style={contentStyle}>
                            {
                                article.content ?? 'no content'
                            }
                        </p>

                        <a href={article.url?.toString()} target="_blank" rel="noopener noreferrer">
                            more information
                        </a>
                    </div>
                </div>
            </MainContent>
        </Layout>
    )
}

export default ArticleDetail