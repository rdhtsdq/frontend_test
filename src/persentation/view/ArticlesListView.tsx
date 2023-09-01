import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import ArticleInteractor from '../../domain/interactor/ArticleInteractor'
import Article from '../../domain/model/Article'
import ArticleRepository from '../../domain/repository/ArticleRepository'
import Loading from '../components/Loading'
import ArticleCard from '../components/ArticleCard'
import { useNavigate } from 'react-router-dom'

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

    const navigate = useNavigate()

    const handleNavigate = (art: Article) => {
        navigate("/detail", { state: { article: art } })
    }

    return (
        <Layout>
            <Navbar style={{ position: 'fixed', width: '100%', zIndex: '1' }} />
            {
                loading ?

                    <Loading /> :

                    <MainContent title='Headline News' >
                        {articles ? articles.map((art: Article, index: number) =>
                            <ArticleCard author={art.author} key={index} title={art.title} onClick={() => handleNavigate(art)} />
                        ) : <p>NO Article</p>}
                    </MainContent>
            }
        </Layout>
    )
}

export default ArticlesListView