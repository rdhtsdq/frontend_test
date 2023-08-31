import Article from "../model/Article";
import ArticleUseCase from "./ArticleUseCase";
import ArticleApi from "../repository/ArticleRepository";

class ArticleInteractor implements ArticleUseCase {
    private api: ArticleApi

    constructor(api: ArticleApi) {
        this.api = api
    }

    async searchArticle(query: String): Promise<Article[] | null> {
        const articles = await this.api.searchArticle(query)
        return articles
    }
    async getHeadline(): Promise<Article[] | null> {
        const articles = await this.api.getHeadline()
        return articles
    }

}

export default ArticleInteractor