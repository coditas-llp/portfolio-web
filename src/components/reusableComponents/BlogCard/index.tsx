import React from "react";
import { IBlog } from "../../../interfaces";
import { formatDate } from "../../../utils/generalUtils";
import { Image } from "../Image";
import "./blogCard.scss";

interface IBlogCardProps {
  blogData?: IBlog;
  onClickCard?: (path: string) => void
}

export const BlogCard = (props: IBlogCardProps) => {
  console.log(">> props", props);
  return (
    <div
      className="card-container"
      onClick={() => props.onClickCard && props.onClickCard(props?.blogData?.id as any)}
    >
      <div className="card-image">
        <Image
          desktop_src={props.blogData?.banner_small?.url}
          mobile_src={props.blogData?.mobile_card?.url}
        />
      </div>
      <div className="bottom-content" >
        <div className="blog-title">{props?.blogData?.blog_title}</div>
        <div className="blog-date">{formatDate(props.blogData?.published_on)}</div>
        <div className="line" />
        <div className="r-font card-sub" >
          {props.blogData?.card_subtitle}
        </div>
        <div className="more-button r-font" >
          Read more
        </div>
      </div>
    </div>
  );
};
