import React from "react";

import Dirctory from "../../components/dirctory/Dirctory";

import "./HomePage.scss";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="homepage">
          <Dirctory />
        </div>
      </div>
    );
  }
}

export default HomePage;
