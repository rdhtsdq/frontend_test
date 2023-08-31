import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import ArticleInteractor from '../../domain/interactor/ArticleInteractor'
import Article from '../../domain/model/Article'
import ArticleRepository from '../../domain/repository/ArticleRepository'
import Loading from '../components/Loading'

const ArticlesListView: React.FC = () => {

    const interactor: ArticleInteractor = new ArticleInteractor(new ArticleRepository())

    const [loading, setLoading] = useState<boolean>(true)

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const fetchHeadline = async () => {
            const fetchedData = await interactor.getHeadline()
            setLoading(false)
            setArticles(fetchedData ?? [])
        }

        return () => {
            fetchHeadline()
        }
    }, [])

    return (
        <Layout>
            <Navbar />
            {
                loading ? <Loading /> : <MainContent type='List' data={articles} title='Headline News' />
            }
        </Layout>
    )
}

export default ArticlesListView