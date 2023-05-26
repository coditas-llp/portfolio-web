import React, { useEffect, useState } from "react";
import "./App.css";
import { GET } from "./HTTP";
import { Featured } from "./components/Featured";
import { Async } from "./components/reusableComponents/Async";
import "./fonts.scss";
import { IBlog } from "./interfaces";

interface IPortfolioProps {
  env: string;
  onClickFeatured?: (path: string) => void
  onClickCard?: (path: string) => void
}

const Home = (props: IPortfolioProps) => {
  return <BlogsApp {...props} />;
};

function BlogsApp(props: IPortfolioProps) {
  const [blogs, setBlogs] = useState<IBlog[]>([{}]);

  const getData = async () => {
    try {
      const response = await GET(`/get-content?name=blogs&env=${props.env}&showId=true`);
      const { data } = response;
      setBlogs(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Async
        promise={getData}
        content={
          <Featured
            featuredBlog={blogs.find((blog) => blog.is_featured)}
            blogs={blogs}
          />
        }
      />
    </div>
  );
}

export default Home;
