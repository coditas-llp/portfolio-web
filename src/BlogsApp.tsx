import { useEffect, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { GET } from "./HTTP";
import { BlogDetails } from "./components/BlogDetails";
import { Featured } from "./components/Featured";
import { Async } from "./components/reusableComponents/Async";
import "./fonts.scss";
import { IBlog } from "./interfaces";
import "coditas-ui/dist/index.scss";

const Routes = (props: {}) => {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error AAYA</h1>,
    },
    {
      path: "/:blog_id",
      element: <BlogDetails />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

const Home = () => {
  return <BlogsApp />;
};

function BlogsApp() {
  const [blogs, setBlogs] = useState<IBlog[]>([{}]);

  const getData = async () => {
    try {
      const response = await GET("/get-content?name=blogs");

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
          <Featured featuredBlog={blogs.find((blog) => blog.is_featured)} />
        }
      />
    </div>
  );
}

export default Routes;
