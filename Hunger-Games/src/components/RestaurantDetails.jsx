import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function RestaurantDetails() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState([]);
  console.log("show:", show);

  const url = "http://localhost:8080/get-restaurants";

  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setShow(res.data);
      setData(res.data);
    });
  }, []);

  // Handle Rating

  const handleRating = (val) => {
    let tem = show.filter((e) => {
      if (e.rating >= +val) {
        return e;
      }
    });
    setShow(tem);
  };

  // Cost for two sorting

  const handleCostSort = (cost) => {
    if (cost == 0) {
      let tem = [...show];
      tem.sort((a, b) => a.cost_for_two - b.cost_for_two);
      setShow(tem);
    }
    if (cost == 1) {
      let tem = [...show];
      tem.sort((a, b) => b.cost_for_two - a.cost_for_two);
      setShow(tem);
    }
  };

  // Payment Sorting

  const handlePayment = (met) => {
    if (met == "cash") {
      let tem = show.filter((e) => {
        if (e.payment_method.cash) {
          return e;
        }
      });
      setShow(tem);
    }
    if (met == "card") {
      let tem = show.filter((e) => {
        if (e.payment_method.card) {
          return e;
        }
      });
      setShow(tem);
    }
  };

  return (
    <div>
      <div className="buttons">
        <div className="page">
          <button>Prev</button>
          <button>Next</button>
        </div>
        <div className="rating">
          <button
            onClick={() => {
              handleRating(4);
            }}
          >
            4 and Above
          </button>
          <button
            onClick={() => {
              handleRating(3);
            }}
          >
            3 and Above
          </button>
          <button
            onClick={() => {
              handleRating(2);
            }}
          >
            2 and Above
          </button>
          <button
            onClick={() => {
              handleRating(1);
            }}
          >
            1 and Above
          </button>
        </div>
        <div className="payment">
          <button
            onClick={() => {
              handlePayment("cash");
            }}
          >
            Cash
          </button>
          <button
            onClick={() => {
              handlePayment("card");
            }}
          >
            Card
          </button>
          <Link to={"/all"}>
            <button>All</button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              handleCostSort(0);
            }}
          >
            Cost - Low to High
          </button>
          <button
            onClick={() => {
              handleCostSort(1);
            }}
          >
            Cost - High to Low
          </button>
        </div>
      </div>
      {show.map((e) => {
        return (
          <div className="overall">
            <div>
              <img src={e.img} alt="" />
            </div>
            <div className="hotel">
              <p>Name : {e.name}</p>
              <p>Category : {e.category}</p>
              <p>Cost for Two : {e.cost_for_two}</p>
              {/* <p>Payment Method : {e.payment_method.cash} {e.payment_method.card}</p> */}
            </div>
            <div className="review">
              <p>Rating : {e.rating}</p>
              <p>Reviews : {e.reviews}</p>
              <p>Votes : {e.votes}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
