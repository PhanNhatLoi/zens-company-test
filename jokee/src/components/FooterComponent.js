import React from "react";

const FooterComponent = () => {
  return (
    <div className="footer flex items-center justify-center">
      <div className="w-full text-center md:w-3/4">
        <span className="block" style={{ color: "#969696" }}>
          {`This website is created as part of HIsolutions program. The materials
      contained on this website are provided for general information only
      and do not constitute any form of advice. HLS assumes no
      responsibility for the accuracy of an particular statement and accepts
      no liability for any loss or damage which may arise from reliance on
      the information contained on this site.`}
        </span>
        <span className="block mt-5">{`Copyright 2021 HLS`}</span>
      </div>
    </div>
  );
};

export default FooterComponent;
