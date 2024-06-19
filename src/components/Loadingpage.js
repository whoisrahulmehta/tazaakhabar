import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loadingpage() {
  return (
    <div>
      <p>
        <b
          style={{
            paddingRight: "14px",
            color: "gold",
            fontSize: "3rem",
          }}
        >
          <FontAwesomeIcon icon={faNewspaper} />
        </b>{" "}
        TAZAA<b>खबर</b>
      </p>
    </div>
  );
}

export default Loadingpage;
