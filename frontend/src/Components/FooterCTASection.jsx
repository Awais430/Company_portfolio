import React from "react";

const FooterCTASection = () => {
  return (
    <>
      <section className="footerCTASection hidden md:block with-bg blue">
        <div className="  w-full px-[15px] mx-auto mb-8 sm:mb-0 ">
          <div
            className="artwork"
            style={{
              backgroundImage:
                "url(https://squareboat.com/images/illustrations/footer-cta-illustration.svg)",
            }}
          ></div>
          <div className="flex flex-wrap flex-row -mx-[15px]">
            <div className="col-md-6 holder-item">
              <div className="holder-tem justify-center flex flex-wrap -mx-[15px]">
                <div className="col-md-10 col-lg-8">
                  <h3
                    className="header-title mt-[5rem] font-[600] text-[1.85rem]  mb-0"
                    style={{
                      lineHeight: "1.6",
                      latterSpacing: "0.05rem",
                      color: "#2d94f3",
                    }}
                  >
                    View our work
                  </h3>
                  <p
                    className=" mt-[1.3rem] opacity-[0.5] mb-10"
                    color="rgba(13,38,76,0.71)"
                  >
                    Our work page contains detailed case studies on all the key
                    projects we have done so far. Have a look!
                  </p>
                  <a
                    href="/client"
                    className="btn btn-sm btn-outline-primary btn-width mt-[20px] text-[0.95rem] !px-[1.3rem] !rounded-[.6rem] !py-[.7rem]"
                  >
                    See work
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 holder-item">
              <div className="holder-tem justify-center flex flex-wrap -mx-[15px]">
                <div className="col-md-10 col-lg-8">
                  <h3
                    className="header-title mt-[5rem] font-[600] text-[1.85rem]  mb-0"
                    style={{
                      lineHeight: "1.6",
                      latterSpacing: "0.05rem",
                      color: "#0d264c ",
                    }}
                  >
                    Contact us
                  </h3>
                  <p
                    className=" mt-[1.3rem] opacity-[0.5] mb-10"
                    color="rgba(13,38,76,0.71)"
                  >
                    We'd love to hear more about your product. Let's talk and
                    turn your great ideas into something even greater!
                  </p>
                  <a
                    href="/contact-us"
                    className="btn btn-sm btn-outline-secondary btn-width mt-[20px] text-[0.95rem] !px-[1.3rem] !rounded-[.6rem] !py-[.7rem]"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* view our work for small screen */}
      <section
        className=" block md:hidden relative pt-[4rem] pb-[4rem] "
        style={{
          background: "linear-gradient(to right,  rgb(255, 253, 253),#eaf4ff)",
        }}
      >
        <div className=" flex flex-col items-center gap-8 justify-center">
          <h3
            className="  font-[600] text-[1.85rem]  mb-0"
            style={{
              lineHeight: "1.6",
              latterSpacing: "0.05rem",
              color: "#2d94f3",
            }}
          >
            View our work
          </h3>
          <button
            className="text-[20px] mt-8 border-blue-500 py-[8px] text-blue-500 hover:text-white hover:bg-blue-500
              border-[2px]  rounded-md  px-4"
          >
            See work
          </button>
        </div>
      </section>
    </>
  );
};

export default FooterCTASection;
