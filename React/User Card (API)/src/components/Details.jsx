import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "/src/assets/detail-style.css";

function Details() {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));
  }),
    [userId];

  return (
    <div className="a">
      <div className="card">
        <h2>
          {userDetails.lastName} {userDetails.firstName}
        </h2>
        <div className="title title--common">{userDetails.email}</div>
        <div className="desc">{userDetails.phone} </div>
        <img className="photo" src={userDetails.image} alt="" />
      </div>
    </div>
  );
}

export default Details;
