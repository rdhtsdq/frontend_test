import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import ArticleInteractor from '../../domain/interactor/ArticleInteractor'
import Article from '../../domain/model/Article'
import ArticleRepository from '../../domain/repository/ArticleRepository'

const ArticlesListView: React.FC = () => {
    const interactor: ArticleInteractor = new ArticleInteractor(new ArticleRepository())
    const [loading, setLoading] = useState<boolean>(false)
    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const fetchHeadline = async () => {
            setLoading(!loading)
            const fetchedData = await interactor.getHeadline()
            setLoading(!loading)
            setArticles(fetchedData ?? [])
        }

        return () => {
            fetchHeadline()
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            <MainContent type='List' data={articles} title='Headline News' />
        </Layout>
    )
}

export default ArticlesListView