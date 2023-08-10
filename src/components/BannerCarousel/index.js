import React from "react";
import { Col, Row, Carousel } from "antd";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const BannerCarousel = ({ content }) => {
  return (
    <>
      <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
        {content?.map((d, index) => (
          <div key={index}>
            <Row>
              <Col
                lg={{
                  span: 16,
                }}
                style={contentStyle}
              >
                <img src={d} alt="drawing_image" />
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default BannerCarousel;
