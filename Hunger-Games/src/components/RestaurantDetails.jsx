import axios from "axios";
import { useEffect, useState } from "react";

export function RestaurantDetails() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/get-restaurants";

  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
          <div className="overall">
            <div>
              <img src={e.img} alt="" />
            </div>
            <div className="hotel">
              <p>Name : {e.name}</p>
              <p>Category : {e.category}</p>
              <p>Cost for Two : {e.cost_for_two}</p>
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
