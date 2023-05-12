import { useState } from "react";

import MarkdownRenderer from "react-markdown-renderer";
import { useParams } from "react-router";
import { GET } from "../../HTTP";
import { IBlog } from "../../interfaces";
import { Async } from "../reusableComponents/Async";
import { Image } from "../reusableComponents/Image";
import "./blogDetails.scss";
import "./blogDetailsMediaQueries.scss";

export const BlogDetails = (props?: IBlog) => {
  const [blogData, setBlogData] = useState<IBlog>({});
  const { blog_id } = useParams();

  const promise = async () => {
    const data = await GET(`/get-content?name=blogs&id=${blog_id}`);
    console.log(">> data", data);
    setBlogData(data.data);
  };

  return (
    <Async
      loader={<h1>LOGDER</h1>}
      promise={promise}
      content={<BlogContent {...blogData} />}
      error={<h1>Error</h1>}
    />
  );
};

const BlogContent = (props?: IBlog) => {
  return (
    <div className="blog-content">
      <div className="blog-banner">
        <div className="blog-text">
          <h1 className="blog-title m-font ">{props?.blog_title}</h1>
          <div className="blog-sub-title r-font ">{props?.blog_subtitle}</div>
        </div>
        <div className="blog-details-image">
          <Image className="blog-big-banner" mobile_src={props?.mobile_banner?.url} desktop_src={props?.banner_big?.url} />
        </div>
      </div>
      <div className="blue-banner">
        <div className="tech-content">
          <TechLine text={props?.industry} heading="Industry" />
          <TechLine text={props?.technologies} heading="Technologies" />
          <TechLine text={props?.duration} heading="Duration" />
        </div>
      </div>
      <div className="blog-details m-font">
        <MarkdownRenderer className="markdown" markdown={props?.blog_content} />
      </div>
    </div>
  );
};

const TechLine = ({ text, heading }: { heading?: string; text?: string }) => {
  return (
    <div className="tech-line" >
      <div className="tech-heading">{heading}</div>
      <div className="tech-name">{text}</div>
    </div>
  );
};
