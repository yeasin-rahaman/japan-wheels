import Image from "next/image";

const Descriptions = ({ imageUrls }) => {




  return (
    <>
      {/* {paragraphs.map((paragraph, index) => (
        <p className={paragraph.className} key={index}>
          {paragraph.content}
        </p>
      ))} */}
      <div>
        {
          imageUrls ?
            <Image
              src={imageUrls[imageUrls?.length - 1]}
              alt="Your Image Alt Text"
              width={500}
              height={500}
            />

            :

            <></>

        }
      </div>
    </>
  );
};

export default Descriptions;
