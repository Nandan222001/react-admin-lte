import React from "react";

const Card = ({ title, children, footerLink, tools }) => {
  return (
    <div className="card">
      <div className="card-header border-0">
        <div className="d-flex justify-content-between">
          <h3 className="card-title">{title}</h3>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          {footerLink && <a href="sjavascript:void(0);">{footerLink}</a>}
          {tools && (
            <div className="card-tools">
              {tools.map((tool, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <a href="asas" className="btn btn-tool btn-sm" key={index}>
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <i className={tool}></i>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
