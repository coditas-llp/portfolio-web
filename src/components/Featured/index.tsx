import React from 'react'
import { IBlog } from '../../interfaces'
import { BlogCard } from '../reusableComponents/BlogCard'
import './featured.scss'
import { HeroSection } from 'coditas-ui'
import { BASE_URL } from '../../HTTP'
import { useNavigate } from 'react-router'

interface IFeaturedProps {
  featuredBlog?: IBlog
  blogs?: IBlog[]
  onClickFeatured?: (path: string) => void
  onClickCard?: (path: string) => void
}

export const Featured = (props: IFeaturedProps) => {
  const { featuredBlog, blogs } = props
  const navigate = useNavigate()
  return (
    <div>
      <div className='blog-container'>
        <div className='top-section'>
          <div className='left-section'>
            <HeroSection
              heading={
                (featuredBlog?.blog_title && featuredBlog?.blog_title) || ''
              }
              bgImg={`${BASE_URL}${featuredBlog?.banner_big?.url}`}
              overlay='true'
              gradient={featuredBlog?.gradient}
            />
          </div>
        </div>
      </div>
      <div className='blog-cards'>
        {blogs?.map((item: any, i: number) => {
          return (
            !item?.is_featured && (
                <BlogCard
                  onClickCard={(id: any) => navigate(`/portfolio/${id}`)}
                  blogData={item}
                />
            )
          )
        })}
      </div>
    </div>
  )
}
