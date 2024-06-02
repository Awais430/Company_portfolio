import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { client } from "../client";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./OurTeam.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    companyName: "",
    size: "",
    message: "",
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await client.create({
        _type: 'form', // Schema type
        name: formData.name,
        email: formData.email,
        number: formData.number,
        companyName: formData.companyName,
        size: formData.size,
        message: formData.message,
      });
      toast.success('Form submitted successfully!');
      setFormData({ name: "", email: "", number: "", companyName: "", size: "", message: "" });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="block">
        <main
          style={{ overflow: "hidden", minHeight: "calc(100vh - 20.7rem)" }}
        >
          {/* hero section */}
          <section
            className="sm:w-[80%] w-[95%]"
            style={{
              boxSizing: "border-box",
              alignItems: "center",
              margin: "auto",
              backgroundImage:
                "url(https://squareboat.com/images/pattern-6.svg?c27134f856ba7d4a716e0575b015ebee)",
              backgroundPosition: "center",
              backgroundSize: "102%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full sm:px-[15px] mx-auto ">
              <div
                style={{
                  textAlign: "center",
                  padding: "5.8rem 0 7rem",
                  display: "block",
                }}
              >
                <div className="sm:flex block w-full flex-wrap sm:-mx-[-15px]">
                  <div
                    className=""
                    style={{ flexBasis: 0, flexGrow: 1, maxWidth: "100%" }}
                  >
                    <h1
                      className="mb-0 font-[600] text-[2.6rem]"
                      style={{ lineHeight: "1.35" }}
                    >
                      Meet our team
                    </h1>
                    <p
                      className="mt-[.45rem] mb-0 font-[400] opacity-100 text-[1.1rem] sm:max-w-[60%] mx-auto"
                      style={{
                        lineHeight: "1.6",
                        letterSpacing: "0.02em",
                        color: "#333",
                      }}
                    >
                      We are excited to take on your new project and help you
                      build something amazing!
                    </p>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="sm:flex w-full justify-center mt-3 sm:gap-8 gap-10">
                  <div className="sm:w-[50%] bg-white shadow-lg mb-4 rounded-[1rem] hover:-translate-y-3 transition-all hover:cursor-pointer">
                    <a href="mailto:hamzaaliics@gmail.com">
                      <div className="mt-7 pl-7 mb-7 flex flex-col gap-7">
                        <img
                          src="https://squareboat.com/images/icons/contact-mail.svg"
                          className="w-[65px] mb[1.5rem] pt-8 md:pt-0 lg:pt-0 xl:pt-0"
                          alt=""
                        />
                        <div className="text-[1.5rem] fon">Mail us (Preferred)</div>
                        <p
                          className="mb-7 md:mb-0 lg:mb-0 xl:mb-0"
                          style={{
                            color: "rgba(13,38,76,0.7)",
                            lineHeight: "1.8x",
                          }}
                        >
                          hamzaaliics@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="sm:w-[50%] bg-white shadow-lg mb-4 rounded-[1rem] hover:-translate-y-3 transition-all">
                    <div className="mt-7 pl-7 mb-7 flex flex-col gap-7">
                      <img
                        src="https://squareboat.com/images/icons/contact-call.svg"
                        className="w-[65px] mb[1.5rem] pt-8 md:pt-0 lg:pt-0 xl:pt-0"
                        alt=""
                      />
                      <div className="text-[1.5rem] fon">Office Phone</div>
                      <div className="flex items-center gap-1">
                        <a href="tel:+92384681127">
                          <p
                            className="mb-7 md:mb-0 lg:mb-0 xl:mb-0"
                            style={{
                              color: "rgba(13,38,76,0.7)",
                              lineHeight: "1.8x",
                            }}
                          >
                            <span className="text-[#444444] font-[600] text-[16px]">
                              Pakistan:
                            </span>
                            (+92) 0323 3787840
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-[100%] bg-white shadow-lg mb-4 rounded-[1rem] hover:-translate-y-3 transition-all hover:cursor-pointer">
                  <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x390cea3bcb922e83:0xc4e471b2f8babe2d?source=g.page.share">
                    <div className="mt-7 pl-7 mb-7 flex flex-col gap-7">
                      <img
                        src="https://squareboat.com/images/icons/contact-mail.svg"
                        className="w-[65px] mb[1.5rem]"
                        alt=""
                      />
                      <div className="text-[1.5rem] fon">Office Address</div>
                      <div className="flex flex-col">
                        <h1 className="text-[#444444] font-[600] text-[16px]">
                          Pakistan
                        </h1>
                        <p
                          style={{
                            color: "rgba(13,38,76,0.7)",
                            lineHeight: "1.8x",
                          }}
                        >
                          Manga Mandi Lahore
                        </p>
                        <div
                          className="text-[#007bff] bg-transparent"
                          style={{ textDecoration: "non" }}
                        >
                          View map location
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-sec relative mt-[1rem] block">
            <div className="relative w-full mt-[4rem]">
              <div className="w-full max-w-[100%] mx-auto">
                <div className=".container w-full px-[15px] mx-auto sm:max-w-[85%]">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-[66.6%] lg:w-[75%]">
                      <div className="form-wrapper mb-[6rem] p-0">
                        <h3
                          className="heading text-center font-[1.7rem] mb-[0.5rem]"
                          style={{
                            fontFamily: "inherit",
                            lineHeight: "1.2",
                            color: "inherit",
                          }}
                        >
                          Contact us
                        </h3>
                        <form action="" onSubmit={handleSubmit}>
                          <div className="justify-center mt-[20px]">
                            <div className="mb-[1rem] col-sm-12">
                              <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                Name*
                              </label>
                              <input
                                type="text"
                                name="name"
                                required
                                placeholder="Full Name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="sm:flex justify-center !w-full gap-7">
                              <div className="mb-[1rem] !max-w-[100%] !w-full">
                                <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                  Work Email*
                                </label>
                                <input
                                  type="email"
                                  required
                                  name="email"
                                  placeholder="Email Address"
                                  className="form-control"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-[1rem] !max-w-[100%] !w-full">
                                <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                  Mobile Number*
                                </label>
                                <input
                                  type="number"
                                  name="number"
                                  placeholder="Mobile Number"
                                  className="form-control"
                                  value={formData.number}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="sm:flex justify-center !w-full gap-7">
                              <div className="mb-[1rem] !max-w-[100%] !w-full">
                                <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  name="companyName"
                                  placeholder="Company Name"
                                  className="form-control"
                                  value={formData.companyName}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="mb-[1rem] !max-w-[100%] !w-full">
                                <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                  Company Size
                                </label>
                                <select
                                  id="size"
                                  type="number"
                                  name="size"
                                  className="form-control"
                                  value={formData.size}
                                  onChange={handleChange}
                                >
                                  <option value="">Select</option>
                                  <option value="1">1</option>
                                  <option value="2-10">2-10</option>
                                  <option value="11-100">11-100</option>
                                  <option value="101-500">101-500</option>
                                  <option value="501+">501+</option>
                                </select>
                              </div>
                            </div>
                            <div className="mb-[1rem] col-sm-12">
                              <label className="uppercase opacity-[0.8] font-[0.8rem] mt-[0.7rem] inline-block mb-[0.5rem]">
                                Message*
                              </label>
                              <textarea
                                name="message"
                                id="nothing-yet"
                                cols="30"
                                rows="3"
                                className="form-control"
                                placeholder="Your Message"
                                maxLength="100"
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="justify-center mt-[20px]">
                            <div className="form-group col-12 !pl-0">
                              <label
                                className=""
                                style={{
                                  opacity: "0.8",
                                  fontSize: ".85rem",
                                  fontWeight: "bold",
                                  display: "inline-block",
                                  marginBottom: ".5rem",
                                }}
                              >
                                Fields marked with * are mandatory.
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-outline-primary mt-[1.5rem] btn-block btn-loader"
                          >
                            <span className="">Submit</span>
                          </button>
                        </form>
                        {/* Include the ToastContainer */}
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
