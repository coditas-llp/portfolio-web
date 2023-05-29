import React from 'react'
import { IBlog } from '../../../interfaces'
import { Image } from '../Image'
import './blogCard.scss'

interface IBlogCardProps {
  blogData: IBlog
  onClickCard: (path: string) => void
}

export const BlogCard = (props: IBlogCardProps) => {
  return (
    <div className='card-container'>
      <div className='card-image'>
        <Image
          desktop_src={props.blogData?.banner_small?.url}
          mobile_src={props.blogData?.mobile_card?.url}
        />
        <span className='env'>{props?.blogData?.env}</span>
      </div>
      <div className='bottom-content'>
        <div className='blog-title'>{props?.blogData?.blog_title}</div>
        <div className='line' />
        <div className='r-font card-sub'>{props.blogData?.card_subtitle}</div>
        <div
          className='more-button r-font'
          onClick={() =>
            props?.onClickCard && props?.onClickCard(props?.blogData?.id as any)
          }
        >
          Read more
        </div>
        <span
          className='mob-read-more'
          onClick={() =>
            props?.onClickCard && props?.onClickCard(props?.blogData?.id as any)
          }
        >
          Read more
        </span>
      </div>
    </div>
  )
}
