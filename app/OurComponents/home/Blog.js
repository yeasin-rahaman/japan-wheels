import blogPosts from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      {blogPosts.slice(0, 3).map((post) => (
        <div
          key={post.id}
          className="col-md-6 col-xl-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >

          <Link href={`/blogs/${post?.id}`} className="more_listing">


            <div className="for_blog">
              <div className="thumb">
                <div className="tag">{post.tag}</div>
                <Image
                  width={394}
                  height={254}
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src={post.imgSrc}
                  alt={post.title}
                />
              </div>
              <div className="details">
                <div className="wrapper">
                  <div className="bp_meta">
                    <ul>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-user" />
                          {post.author}
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-chat" />
                          {post.numComments} Comments
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="flaticon-calendar-1" />
                          {post.date}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="title">
                    <Link href={`/blogs/${post?.id}`}>{post.title}</Link>
                  </h4>

                  Read More{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>

                </div>
              </div>
            </div>
          </Link >
        </div>

      ))}
    </>
  );
};

export default Blog;
