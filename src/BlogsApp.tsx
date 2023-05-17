import { useEffect, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { GET } from "./HTTP";
import { BlogDetails } from "./components/BlogDetails";
import { Featured } from "./components/Featured";
import { Async } from "./components/reusableComponents/Async";
import "./fonts.scss";
import { IBlog } from "./interfaces";
import React from "react";

interface IPortfolioProps {
  env: string;
  onClickFeatured?: (path: string) => void
  onClickCard?: (path: string) => void
}

const Portfolio = (props: IPortfolioProps) => {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Home {...props} />,
      errorElement: <h1>Error!!</h1>,
    },
    {
      path: "/:blog_id",
      element: <BlogDetails {...props} />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

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
          <Featured {...props} blogsData={blogs} featuredBlog={blogs.find((blog) => blog.is_featured)} />
        }
      />
    </div>
  );
}

export default Portfolio;
