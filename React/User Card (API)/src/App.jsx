import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./assets/style.css";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="a">
        {currentUsers.map((info) => (
          <div className="container" key={info.id}>
            <div className="card">
              <h2>
                {info.lastName} {info.firstName}
              </h2>
              <div className="title title--common">{info.email}</div>
              <div className="desc">{info.phone} </div>
              <img className="photo" src={info.image} alt="" />
              <Link to={`/detail/${info.id}`}>
                <div className="actions">
                  <button className="actions__details">Details</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <a href="#" onClick={() => paginate(currentPage - 1)}>
          &laquo;
        </a>
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <a
              href="#"
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </a>
          )
        )}
        <a href="#" onClick={() => paginate(currentPage + 1)}>
          &raquo;
        </a>
      </div>
    </div>
  );
}

export default App;
