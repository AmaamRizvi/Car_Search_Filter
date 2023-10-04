import React from "react";
import Card from "react-bootstrap/Card";
import CarData from "./carData";
import Search from "./Search";
import Button from "react-bootstrap/Button";


const Cards = ({ pageData }) => {
  return (
    <>
      {pageData.map((element, k) => {
        return (
          <>
            <Card style={{ width: "22rem", border: "none" }} className="hove">
              <Card.Img variant="top" className="cd" src={element.imgdata} />

              <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center mt-2">
                  <h4 className="mt-2">{element.rname}</h4>
                  <span>{element.price}</span>
                </div>

                <div className="specs">
                  <div className="specs1 d-flex justify-content-between align-items-center">
                    <h4>{element.people}</h4>
                    <h4>{element.usage}</h4>
                  </div>
                  <div className="specs2 d-flex justify-content-between align-items-center">
                    <h4>{element.range}</h4>
                    <h4>Automatic</h4>
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    style={{
                      marginLeft: 120,
                      marginBottom: 20,
                      marginTop: 15,
                    }}
                  >
                    BOOK NOW!
                  </Button>
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
