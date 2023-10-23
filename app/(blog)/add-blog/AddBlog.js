"use client";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { getBlogs } from "@/app/Redux/dataSlice";
import { CREATE_BLOG } from "@/constant/constants";
import post from "@/utils/post";

const AddBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.japanwheels?.blogs);
  console.log(`blogs`, blogs);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null); // To store the image preview URL
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Create a URL for image preview
    const imageURL = URL.createObjectURL(selectedImage);
    setPreviewImage(imageURL);
  };
  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", editorRef.current.getContent());
    formData.append("image", image);

    post(CREATE_BLOG, formData).then((res) => {
      if (res?.status === 200) {
        dispatch(getBlogs());
      }
    });
  };

  return (
    <form className="comments_form container mt-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <h4 className=" text-center">Write a Blog</h4>
        </div>

        <div className="col-md-12 my-2">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <Editor
              apiKey={"7csv5zhqne9pa8m8xmmbnyizrc9ytluyamh2x6kg9voi1o72"}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              className="form-control-file"
              onChange={(e) => handleImageChange(e)}
            />
          </div>
        </div>

        {previewImage && (
          <div className="col-md-12">
            <div className="form-group">
              <div className="image-preview">
                <img
                  src={previewImage}
                  alt="Image Preview"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        )}

        <div className="col-md-12 my-3 mx-auto text-center">
          <button type="submit" className="btn btn-thm">
            Post Blog
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;