import React from "react";
import BodyBreadCrumb from "../BodyBreadCrumb/BodyBreadCrumb";
import Infobox from "./Infobox";
import { FaCog, FaThumbsUp, FaArrowDown,FaShoppingCart, FaUsers, FaArrowUp, FaSearch, FaDownload, FaBars } from "react-icons/fa";
import { IoMdRefresh,  IoIosPeople } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import Card from "./Card";
import ChartCard from "./ChartCard";
import Table from "./Table";

const Home = () => {
  const tableColumns = ["Product", "Price", "Sales", "More"];
  const tableData = [
    [
      <span key="product1"><img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />Some Product</span>,
      "$13 USD",
      <span key="sales1"><small className="text-success mr-1"><FaArrowUp /> 12%</small> 12,000 Sold</span>,
      <a href="link1" className="text-muted" key="search1"><FaSearch /></a>,
    ],
    [
      <span key="product2"><img src="dist/img/default-150x150.png" alt="Product 2" className="img-circle img-size-32 mr-2" />Another Product</span>,
      "$23 USD",
      <span key="sales2"><small className="text-danger mr-1"><FaArrowDown /> 8%</small> 8,000 Sold</span>,
      <a href="link2" className="text-muted" key="search2"><FaSearch /></a>,
    ],
    [
      <span key="product3"><img src="dist/img/default-150x150.png" alt="Product 3" className="img-circle img-size-32 mr-2" />Third Product</span>,
      "$18 USD",
      <span key="sales3"><small className="text-success mr-1"><FaArrowUp /> 20%</small> 15,000 Sold</span>,
      <a href="link3" className="text-muted" key="search3"><FaSearch /></a>,
    ],
    [
      <span key="product4"><img src="dist/img/default-150x150.png" alt="Product 4" className="img-circle img-size-32 mr-2" />Fourth Product</span>,
      "$9 USD",
      <span key="sales4"><small className="text-warning mr-1"><FaArrowUp /> 5%</small> 5,000 Sold</span>,
      <a href="link4" className="text-muted" key="search4"><FaSearch /></a>,
    ],
  ];
  

  const infoBoxData = [
    {
      icon: FaCog,
      bgClass: "bg-info",
      text: "CPU Traffic",
      number: 10,
      small: "%",
    },
    { icon: FaThumbsUp, bgClass: "bg-danger", text: "Likes", number: "41,410" },
    { icon: FaShoppingCart, bgClass: "bg-success", text: "Sales", number: 760 },
    {
      icon: FaUsers,
      bgClass: "bg-warning",
      text: "New Members",
      number: "2,000",
    },
  ];

  return (
    <div className="content-wrapper">
      <BodyBreadCrumb value="Home"/>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {infoBoxData.map((info, index) => (
              <Infobox
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                icon={info.icon}
                bgClass={info.bgClass}
                text={info.text}
                number={info.number}
                small={info.small}
              />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Card title="Online Store Visitors" footerLink="View Report">
                <ChartCard
                  chartId="visitors-chart"
                  mainValue="820"
                  mainText="Visitors Over Time"
                  trendText="12.5%"
                  trendIcon={{ direction: "up", color: "success" }}
                  legend={[
                    { label: "This Week", color: "primary" },
                    { label: "Last Week", color: "gray" },
                  ]}
                />
              </Card>

              <Card title="Products" tools={[<FaDownload key="download" />, <FaBars key="bars" />]}>
                <Table columns={tableColumns} data={tableData} />
              </Card>
            </div>

            <div className="col-lg-6">
              <Card title="Sales" footerLink="View Report">
                <ChartCard
                  chartId="sales-chart"
                  mainValue="$18,230.00"
                  mainText="Sales Over Time"
                  trendText="-33.1%"
                  trendIcon={{ direction: "down", color: "danger" }}
                  legend={[
                    { label: "This Year", color: "primary" },
                    { label: "Last Year", color: "gray" },
                  ]}
                />
              </Card>

              <Card title="Online Store Overview">
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-success text-xl">
                    <IoMdRefresh />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <FaArrowUpFromBracket className="text-success" /> 12%
                    </span>
                    <span className="text-muted">CONVERSION RATE</span>
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-warning text-xl">
                    <FaShoppingCart />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <FaArrowUpFromBracket className="text-warning" /> 0.8%
                    </span>
                    <span className="text-muted">SALES RATE</span>
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <p className="text-danger text-xl">
                    <IoIosPeople />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <FaArrowDown className="text-danger" /> 1%
                    </span>
                    <span className="text-muted">REGISTRATION RATE</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
