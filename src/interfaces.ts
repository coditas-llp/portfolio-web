export interface IBlog {
    banner_small?: IImageURL;
    mobile_banner?: IImageURL;
    mobile_card?: IImageURL;
    banner_big?: IImageURL;
    blog_title?: string
    blog_subtitle?: string
    industry?: string
    technologies?: string
    duration?: string
    published_on?: string
    author?: string
    blog_content?: string
    card_subtitle?: string
    id?: string
    is_featured?: boolean
}

interface IImageURL {
    url: string;
}