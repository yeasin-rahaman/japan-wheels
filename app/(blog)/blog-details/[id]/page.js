"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import { Interweave } from "interweave";
import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "@/app/Redux/dataSlice";

const metadata = {
  title:
    "Blog Dynamic Single || Voiture - Automotive & Car Dealer NextJS Template",
};

const BlogDynamicSingle = () => {
  // const router = useRouter();  const { ids } = router.query;
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.japanwheels?.blog);
  const id = 1;
  useEffect(() => {
    dispatch(getBlog(id));
  }, [id]);
  console.log(`blog`, blog);
  return (
    <div className="wrapper">
      {/* Blog Single Post */}
      <section className="blog_post_container bt1 pt50 pb0 mt70-992">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="for_blog blog_single_post">
                <div className="details">
                  <div className="wrapper">
                    <h2 className="title">{blog?.title} </h2>
                    <div className="bp_meta">
                      <ul className="mb0">
                        <li className="list-inline-item">
                          <a href={"#"}>
                            <span className="flaticon-user" />
                            {blog?.created_by?.name}
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href={"#"}>
                            <span className="flaticon-calendar-1" />
                            {moment(blog?.created_at).format("ll")}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-post-thumb">
                <Image
                  width={1519}
                  height={475}
                  priority
                  style={{ objectFit: "cover" }}
                  className="img-whp"
                  src={blog?.image}
                  alt={blog?.title}
                />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End container-fluid */}
      </section>
      {/* Blog Single Post */}

      {/* Start Blog Single Post Description */}
      <section className="blog_post_container pt50 pb70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="main_blog_post_content">
                <div className="mbp_thumb_post">
                  <h4>Description</h4>
                  <Interweave
                    allowAttributes
                    allowElements
                    disableLineBreaks={true}
                    style={{ textAlign: 'justify' }}
                    content={blog?.description}
                  />

                  {/* End .row */}

                  <div className="row">
                    <div className="col-lg-12">
                      <Image
                        width={796}
                        height={465}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                        src={blog?.image}
                        alt={blog?.title}
                      />
                    </div>
                  </div>
                  {/* End .row */}

                  {/* End .row */}
                </div>
                {/* End mbp_thumb_post */}
              </div>
              {/* End main_blog_post_content */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Blog Single Post Description */}

      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default BlogDynamicSingle;
