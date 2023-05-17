import React from 'react'
import './image.scss'
import { getFullUrl } from '../../../utils/generalUtils'

export const Image = (props: { desktop_src?: string; mobile_src?: string; className?: string }) => {
    return <div>
        <img
            src={getFullUrl(props.desktop_src)}
            className="card-blog-image desktop"
            alt="blog-card"
        />
        <img
            src={getFullUrl(props.mobile_src)}
            className={`card-blog-image mobile ${props.className}`}
            alt="blog-card mobile"
        />
    </div>
}