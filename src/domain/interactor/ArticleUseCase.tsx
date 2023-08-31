import Article from "../model/Article";

export default interface ArticleUseCase {
    searchArticle(query: String): Promise<Article[] | null>
    getHeadline(): Promise<Article[] | null>
}