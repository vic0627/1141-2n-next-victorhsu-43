import Wrapper from "@/app/demo/_assets/wrapper/Blog2_43";
import Blog2_43 from "./Blog2_43";
import { useBlogBlogContext_43 } from "../_blogContext_43";

const BlogList2_43 = () => {
  const { blogs_43 } = useBlogBlogContext_43();

  return (
    <Wrapper>
      <div className="blogs-center">
        {blogs_43.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog2_43
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BlogList2_43;
