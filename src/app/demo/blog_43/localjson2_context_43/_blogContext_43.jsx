import { createContext, useContext, useState } from 'react';
import blogData_43 from '../../_assets/data/blogData.json';

const BlogContext = createContext(null);

export const BlogContextProvider_43 = ({ children }) => {
  const [name] = useState('victorhsu');
  const [id] = useState(213410243);
  const [blogs_43, setBlogs_43] = useState(blogData_43);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_43((prev) => prev.filter((blog) => blog.id !== id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_43([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_43(blogData_43);
  };

  return (
    <BlogContext.Provider
      value={{
        name,
        id,
        blogs_43,
        alert,
        showAlert,
        removeItem,
        clearAllBlogs,
        loadAllBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogBlogContext_43 = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog2_43 must be used within Blog2_43Provider');
  }
  return context;
};