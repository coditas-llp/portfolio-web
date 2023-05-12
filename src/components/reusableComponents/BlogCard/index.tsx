import { useNavigate } from "react-router";
import { IBlog } from "../../../interfaces";
import { Image } from "../Image";
import "./blogCard.scss";
import "./blogCardMediaQueries.scss";
import { formatDate } from "../../../utils/generalUtils";

interface IBlogCardProps {
  blogData?: IBlog;
}

export const BlogCard = (props: IBlogCardProps) => {
  const navigate = useNavigate();
  console.log(">> props", props);
  return (
    <div
      className="card-container"
      onClick={() => navigate(props?.blogData?.id as any)}
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
