import React from "react";
import { IBlog } from "../../interfaces";
import { formatDate } from "../../utils/generalUtils";
import { BlogCard } from "../reusableComponents/BlogCard";
import { Image } from "../reusableComponents/Image";
import "./featured.scss";

interface IFeaturedProps {
  featuredBlog?: IBlog;
  blogsData?: IBlog[]
  onClick?: (path: string) => void
}

export const Featured = (props: IFeaturedProps) => {
  const { featuredBlog, blogsData } = props;
  return (
    <div>

      <div className="blog-container">
        <div className="top-section">
          <div className="left-section">
            <FeatureDetails
              onClick={() => props?.onClick && props?.onClick(`/${props.featuredBlog?.id}`)}
              published_on={featuredBlog?.published_on}
              titleText={featuredBlog?.blog_title}
            />
          </div>
          <Image className="big-image"
            mobile_src={featuredBlog?.mobile_banner?.url}
            desktop_src={featuredBlog?.banner_big?.url}
          />
        </div>
      </div>
      <div className="blog-cards">
        {blogsData?.map((blog, index) => < BlogCard key={index} blogData={blog} />)}
      </div>
    </div>
  );
};

const FeatureDetails = ({
  titleText,
  published_on,
  onClick
}: {
  titleText?: string;
  published_on?: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <div className="title-text">
        <h1 className="title-h1">{titleText}</h1>
      </div>
      <PublishDate date={new Date(published_on as any) as any} />
      <ReadMoreButton onClick={onClick} /> {" "}
    </div>
  );
};

const PublishDate = ({ date }: { date?: string }) => {
  return (
    <div className="publish-date">
      <h4 className="date"> {formatDate(date)} </h4>
    </div>
  );
};

const ReadMoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="read-more-button">
      <div onClick={onClick} className="read-blog">
        Read Blog <NextIcon />
      </div>
    </div>
  );
};

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6l-6 6Z"
    />
  </svg>
);
