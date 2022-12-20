import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <section id="contact ">
        <div className="contact-me2">
          <div className="contactme-t1 pb-3">
            <h2>Newsletter</h2>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default ContactMe;
