interface Source {
    id?: String
    name?: String
}

export default interface Article {
    source?: Source
    author?: String | null
    title?: String | null
    description?: String | null
    url?: String | null
    urlToImage?: String | null
    publishedAt?: String | null
    content?: String | null
}

