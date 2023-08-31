import Article from "../../domain/model/Article";
import Api from "../../data/BaseHttp";

export default class ArticleRepository {
    async searchArticle(query: String): Promise<Article[] | null> {
        try {
            const response = await Api.get(`/everything/?q=${query}`)
            const articles = response.data.articles

            if (articles && articles.length > 0) {
                return articles.map((art: any) => ({
                    source: art.source,
                    author: art.author,
                    title: art.title,
                    description: art.description,
                    url: art.url,
                    urlToImage: art.urlToImage,
                    publishedAt: art.publishedAt,
                    content: art.content
                }))
            } else {
                return null
            }


        } catch (error) {
            throw Error(`Unable to get Articles : ${error}`)
        }
    }

    async getHeadline(): Promise<Article[] | null> {

        try {
            const response = await Api.get("/top-headlines?country=us")
            const articles = response.data.articles

            if (articles && articles.length > 0) {
                return articles.map((art: any) => ({
                    source: art.source,
                    author: art.author,
                    title: art.title,
                    description: art.description,
                    url: art.url,
                    urlToImage: art.urlToImage,
                    publishedAt: art.publishedAt,
                    content: art.content
                }))
            } else {
                return null
            }

        } catch (error) {

        }

        return null
    }
}