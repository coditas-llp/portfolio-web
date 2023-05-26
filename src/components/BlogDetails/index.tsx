import { HeroSection } from 'coditas-ui'
import queryString from 'query-string'
import React, { useState } from 'react'
import MarkdownRenderer from 'react-markdown-renderer'
import { BASE_URL, GET } from '../../HTTP'
import { IBlog } from '../../interfaces'
import { Async } from '../reusableComponents/Async'
import './blogDetails.scss'

export const BlogDetails = (props?: IBlog) => {
  const [blogData, setBlogData] = useState<IBlog>({})
  const { id } = queryString.parse(location.search)


  const promise = async () => {
    const data = await GET(`/get-content?name=blogs&showId=true&id=${id || props?.id}`);
    setBlogData(data.data)
  }

  return (
    <Async
      loader={<h1>LOGDER</h1>}
      promise={promise}
      content={<BlogContent {...blogData} />}
      error={<h1>Error</h1>}
    />
  )
}
const BlogContent = (props?: IBlog) => {
  return (
    <div className='blog-content'>
      <div className='blog-banner'>
        <div className='blog-details-image'>
          <HeroSection
            heading={`${props?.blog_title}` || ''}
            bgImg={`${BASE_URL}${props?.banner_big?.url}`}
            overlay='true'
            gradient={`${props?.gradient}`}
          />
        </div>
      </div>
      <div className='blue-banner'>
        <div className='tech-content'>
          <TechLine text={props?.industry} heading='Industry' />
          <TechLine text={props?.technologies} heading='Technologies' />
        </div>
      </div>
      <div className='blog-details m-font'>
        <div className='challenges'>
          <MarkdownRenderer
            className='markdown'
            markdown={props?.blog_content}
          />
          <MarkdownRenderer className='markdown' markdown={props?.solution} />
        </div>
        <div className='outcome'>
          <MarkdownRenderer className='markdown' markdown={props?.outcomes} />
        </div>
      </div>
    </div>
  )
}

const TechLine = ({ text, heading }: { heading?: string; text?: string }) => {
  return (
    <div className='tech-line'>
      <div className='tech-heading'>{heading}</div>
      <div className='tech-name'>{text}</div>
    </div>
  )
}
