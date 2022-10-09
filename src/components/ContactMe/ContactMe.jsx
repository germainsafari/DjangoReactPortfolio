import "./ContactMe.css";
import { useGetContactsQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const ContactMe = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const [contactsDetails, setContactDetails] = useState(contacts);
  // const img_300 = "http://127.0.0.1:8000";
  useEffect(() => {
    setContactDetails(contacts);
  }, [contactsDetails, contacts]);
  if (isFetching) return "loading";
  return (
    <>
      <section id="contact">
        <div className="contact-me2">
          <div className="contact-me2-dec"></div>
          <div class="row align-items-center mb-5">
            <div class="col-lg-5 col-md-12">
              <div class="work-togather-text">
                <h2 class="h2-title text-white ">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-7">
              <div class="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  class="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="work-togather-form-btn">
                <button type="submit" class="sec-btn">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="contact-row">
            {contactsDetails &&
              contactsDetails.map((details) => (
                <div className="contact-info " key={details.id}>
                  <div className="contact-details">
                    <i className={details.icon}></i>
                    <h4 className="icon-name">{details.contact_name}:</h4>
                    <p className="d-name">{details.contact_info}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
