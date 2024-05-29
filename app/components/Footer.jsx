import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span>
          {" "}
          <img src="/images/log.png" alt="Logo" width={50} height={50} />
        </span>
        <p className="text-slate-700">All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
