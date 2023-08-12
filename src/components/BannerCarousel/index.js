import React from "react";
import { Col, Row, Carousel } from "antd";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const BannerCarousel = ({ content, imageClassName }) => {
  return (
    <>
      <Carousel effect="fade" autoplay>
        {content?.map((d, index) => (
          <div key={index}>
            <Row>
              <Col
                lg={{
                  span: 16,
                }}
                style={contentStyle}
              >
                <img
                  src={d}
                  className={`${imageClassName}`}
                  alt="drawing_image"
                />
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default BannerCarousel;
