 import React, { useEffect, useState } from "react";
import CarData from "./carData";
import "./style.css";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Pagination from "react-bootstrap/Pagination";
import { useParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [cdata, setCdata] = useState(CarData);
  const [copydata, setCopyData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const { page } = useParams();
  const itemsPerPage = 6;

  const navigate = useNavigate(); 

  const changeData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata === "") {
      setCopyData(cdata);
    } else {
      let storedata = cdata.filter((ele) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  useEffect(() => {
    setCopyData(cdata);
  }, [cdata]);

  useEffect(() => {
    const pagedatacount = Math.ceil(copydata.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPageData(copydata.slice(start, end));
  }, [copydata, page]);

  const handleNext = () => {
    if (page < pageCount) {
      const nextPage = parseInt(page) + 1;
      navigate(`/page/${nextPage}`);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      const prevPage = parseInt(page) - 1;
      navigate(`/page/${prevPage}`);
    }
  };

  const pageCount = Math.ceil(copydata.length / itemsPerPage);

  return (
    <>
      <div className="conatiner d-flex justify-content-between align-items-center">
        <h2
          style={{
            cursor: "pointer",
            fontWeight: 600,
            marginTop: 3,
            marginLeft: 100,
          }}
        >
          CarsLy
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => changeData(e.target.value)}
            placeholder="Search here..."
          />
        </Form.Group>
      </Form>

      <section className="item_section mt-4 container">
        <div className="row mt-2 justify-content-around align-items-center">
          {copydata && copydata.length ? (
            <Cards pageData={pageData} />
          ) : (
            "Loading Please Wait..."
          )}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Pagination>
            <Pagination.Prev onClick={handlePrevious} disabled={page === "1"} />
            {Array.from({ length: pageCount }, (_, i) => (
              <Pagination.Item
                key={i}
                active={i + 1 === parseInt(page)}
                onClick={() => {
                  const nextPage = i + 1;
                  navigate(`/page/${nextPage}`);
                }}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={handleNext}
              disabled={parseInt(page) === pageCount}
            />
          </Pagination>
        </div>
      </section>
    </>
  );
};

export default Search;
