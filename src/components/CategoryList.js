import React from "react";
import { MDBIcon, MDBListGroup, MDBListGroupItem } from "mdbreact";
import posed from "react-pose";

import { ProductConsumer } from "../context";
const CategoryList = () => {
  const Item = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    },
    hover: {
      scale: 1.045,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
      background: "#198FE3",
    },
    press: {
      scale: 1,
    },
  });

  return (
    <div>
      <ProductConsumer>
        {(value) => (
          <MDBListGroup className="my-5 py-2 ">
            <h4 className="h4 mb-3">Categories</h4>

            {value.categories.map((item, idx) => {
              let clr = idx === value.currentCategory ? "#ff6600" : "#000000";
              return (
                <Item key={idx}>
                  <MDBListGroupItem
                    style={{ color: clr }}
                    key={idx}
                    onClick={() => {
                      value.setCategory(idx);
                    }}
                    className=" "
                  >
                    <p className="">
                      {item}
                      {"  "}
                      {idx === value.currentCategory ? (
                        <MDBIcon icon="check" />
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}
                    </p>
                  </MDBListGroupItem>
                </Item>
              );
            })}
          </MDBListGroup>
        )}
      </ProductConsumer>
    </div>
  );
};

export default CategoryList;
