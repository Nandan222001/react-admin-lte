import React from "react";

const Infobox = ({ icon: Icon, bgClass, text, number, small }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="info-box">
        <span className={`info-box-icon ${bgClass} elevation-1`}>
          <Icon />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">{text}</span>
          <span className="info-box-number">
            {number}
            {small && <small>{small}</small>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Infobox;
