"use client";

import Blog2_43 from "./_components/Blog2_43";
import Wrapper from "../../_assets/wrapper/Blog2_43";
import Alert_43 from "./_components/Alert_43";
import {
  BlogContextProvider_43,
  useBlogBlogContext_43,
} from "./_blogContext_43";
import BlogList2_43 from "./_components/BlogList2_43";

const BlogLocalJsonPage_43 = () => {
  return (
    <BlogContextProvider_43> 
      <Content_43 />
    </BlogContextProvider_43>
  )
};

const Content_43 = () => {
  const {
    name,
    id,
    blogs_43,
    alert,
    showAlert,
    removeItem,
    clearAllBlogs,
    loadAllBlogs,
  } = useBlogBlogContext_43();

  return (
    <Wrapper>
      {alert.show && <Alert_43 alert={alert} showAlert={showAlert} />}
      <section className="blogs">
        <div className="section-title">
          <h2>
            blogs context from local json 2 -- {name}, {id}{" "}
          </h2>
        </div>
        <BlogList2_43 />
        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            type="button"
            className="text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded"
            onClick={clearAllBlogs}
          >
            clear all blogs
          </button>
          <button
            type="button"
            className="text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded"
            onClick={loadAllBlogs}
          >
            load all blogs
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage_43;
