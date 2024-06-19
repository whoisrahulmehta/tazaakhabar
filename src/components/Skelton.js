import React from "react";

function Skelton({theme}) {
  return (
    <>
      <section className="card skele">
        <div className={`blurry-${theme} cardimg`}></div>
        <div className={`blurry-${theme} cardheading`}> </div>
        <div className={`blurry-${theme} cardbody`}></div>
      </section>
    </>
  );
}

export default Skelton;
