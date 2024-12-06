import React from "react";
import BodyBreadCrumb from "../BodyBreadCrumb/BodyBreadCrumb";
import Infobox from "./Infobox";
import { FaCog, FaThumbsUp, FaShoppingCart, FaUsers } from "react-icons/fa";

const Home = () => {
  const infoBoxData = [
    {
      icon: FaCog,
      bgClass: "bg-info",
      text: "CPU Traffic",
      number: 10,
      small: "%",
    },
    {
      icon: FaThumbsUp,
      bgClass: "bg-danger",
      text: "Likes",
      number: "41,410",
    },
    {
      icon: FaShoppingCart,
      bgClass: "bg-success",
      text: "Sales",
      number: 760,
    },
    {
      icon: FaUsers,
      bgClass: "bg-warning",
      text: "New Members",
      number: "2,000",
    },
  ];

  return (
    <div className="content-wrapper">
      <BodyBreadCrumb />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {infoBoxData.map((info, index) => (
              <Infobox
                key={index}
                icon={info.icon}
                bgClass={info.bgClass}
                text={info.text}
                number={info.number}
                small={info.small}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
