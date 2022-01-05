/* pages/index.js */
import React, { useState } from "react";
import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantList from "/components/RestaurantList";

function Home(){
const [query, updateQurey] = useState("");
return(
    <div className="container-fluid">
        <Row>
            <col>
            <div className="Search">
                <InputGroup>
                <InputGroupAddon addonType="appens">
                Search
                </InputGroupAddon>
                <input onChange={e => UpdateQuery(e.target.value.toLocaleLowerCase())}
                value={query}
                />
                </InputGroup>
            </div>
            <RestaurantList search={query} />
            </col>
        </Row>
        <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
);
}
export default HTMLModElement;