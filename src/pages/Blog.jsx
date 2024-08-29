import React from "react";
import Container from "../components/Container";
import BlogItem from "../components/BlogItem";
import Images1 from "./../components/images/blog1.png";
import Images2 from "./../components/images/blog2.png";
import Images3 from "./../components/images/blog3.png";

const Blog = () => {
  return (
    <div id="blog" className="pt-[94px] pb-[177px]">
      <Container>
        <div>
          <div className="mx-auto text-center mb-4">
            <h2 className="text-[48px] font-semibold leading-[64px] text-secondary">
              Caring is the new marketing
            </h2>
            <p className="max-w-[628px] text-4 font-normal leading-[24px] text-para mx-auto mt-4">
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div>
              <BlogItem
                src={Images1}
                alt="Blog Picture"
                itemDetails="Creating Streamlined Safeguarding Processes with OneRen"
              />
            </div>
            <div>
              <BlogItem
                src={Images2}
                alt="Blog Picture"
                itemDetails="What are your safeguarding responsibilities and how can you manage them?"
              />
            </div>
            <div>
              <BlogItem
                src={Images3}
                alt="Blog Picture"
                itemDetails="Revamping the Membership Model with Triathlon Australia"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
