import React from "react";
import "./socks.css";
import Sockscard1 from "./sockscard1.jsx";

function Socks() {
  return (
    <>
      <div className="bacgroundimg">
        <div className="socksh1">
          <h1>Anytime Socks</h1>
          <p>
            Made with a blend of light, breathable <br />
            materials like tree fiber and Organic Cotton, <br />
            our socks keep your feet cool, dry, and <br />
            smiling (if feet could smile).
          </p>
        </div>
      </div>

      <Sockscard1 />
    </>
  );
}

export default Socks;
