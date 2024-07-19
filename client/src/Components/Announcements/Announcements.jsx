import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AxiosCall from "../AxiosCall/AxiosCall";
import Loading from "../Loading/Loading";
import "./scss/Announcements.scss";
import { StatesContext } from "../../context/GlobalContext";
import { useContext } from "react";
import elonimage from "../../Images/elon.png";
const Announcements = () => {
  const navigate = useNavigate();
  const categoryId = "c3a98a08-9765-4925-9acd-f84e904ff600";
  const { lang } = useContext(StatesContext);
  const [data, setData] = useState([]);
  const demoData = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    get();
  }, []);
  function get() {
    AxiosCall("get", "/content/announcements/" + lang).then((res) => {
      setData(res.contents);
    });
  }
  function formatDateAndTime(dateTimeString) {
    const createdAt = new Date(dateTimeString);
    const formattedDate = `${
      createdAt.getMonth() + 1
    }.${createdAt.getDate()}.${createdAt.getFullYear()}`;
    console.log(formattedDate);
    return formattedDate;
  }

  return (
    <section className="Announcements">
      <div className="Announcements-header">
        {lang === "uz" ? (
          <>
            <h1>E'lonlar</h1>
            <span onClick={() => navigate(categoryId + "/all")}>
              Barcha E'lonlar
            </span>
          </>
        ) : lang === "en" ? (
          <>
            <h1> Announcement</h1>
            <span onClick={() => navigate(categoryId + "/all")}>
              {" "}
              All Announcements
            </span>
          </>
        ) : (
          <>
            <h1>Объявления</h1>
            <span onClick={() => navigate(categoryId + "/all")}>
              Все Объявления
            </span>
          </>
        )}
      </div>
      <div className="Announcements-body">
        {data.length > 0
          ? data?.map((item, index) => {
              return (
                <div
                  className="card-col"
                  key={index}
                  onClick={() => navigate(`/${item.id}`)}
                >
                  <div className="card-col-header">
                    <div className="time-container">
                      <span>{formatDateAndTime(item.created_at)}</span>
                    </div>
                    <div className="viwers">
                      <FontAwesomeIcon icon={faEye} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <div className="card-col-body">
                    <div className="title">{item.title}</div>
                    {/* <p>{item.description}</p> */}
                  </div>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium tenetur vel mollitia reprehenderit quidem
                    doloribus cum id culpa voluptate, explicabo excepturi, dolor
                    facere. Pariatur voluptate qui eveniet laudantium doloribus
                    ab?
                  </p>
                </div>
              );
            })
          : // for loading
            demoData.map((item, index) => {
              return (
                <div className="card-col" key={index}>
                  <div className="card-col-header"></div>

                  <div className="card-col-body">
                    <div className="image-container"></div>

                    <Loading />
                  </div>
                </div>
              );
            })}
      </div>
      <Outlet />
    </section>
  );
};

export default Announcements;
