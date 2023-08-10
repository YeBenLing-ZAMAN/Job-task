import React from "react";
import BannerCarousel from "../../../../components/BannerCarousel";
import CustomLink from "../../../../components/Link";

const HeroSection = () => {
  const BannerCarouselContent = [
    "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjkxNjg1NjYz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
    "https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjkxNjg1NzQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
    "https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjkxNjg1ODg3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
  ];
  return (
    <>
      <div className="md:flex gap-4 p-4">
        <div className="md:w-3/4">
          <BannerCarousel content={BannerCarouselContent}></BannerCarousel>
        </div>
        <div className="grid items-stretch">
          <CustomLink
            href="/product"
            className="flex items-center border my-2 md:my-0"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1670509045675-af9f249b1bbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjkxNjg1NzQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
              alt="Banner_01"
              width={400}
              height={200}
            ></img>
          </CustomLink>
          <CustomLink href="/product" className="flex items-center border mt-2">
            <img
              src="https://plus.unsplash.com/premium_photo-1673502751768-586478eb3fcb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YXBwbGV8fHx8fHwxNjkxNjg1ODg3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
              alt="Banner_02"
              width={400}
              height={200}
            ></img>
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
