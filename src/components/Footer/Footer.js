import "./Footer.css";
import Main from "./scrollTop";
import { useGetSocialMediaQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { data: social, isFetching } = useGetSocialMediaQuery();
  const [socialDetails, setSocialDetails] = useState(social);
  useEffect(() => {
    setSocialDetails(social);

    // console.log(socialDetails);
  }, [socialDetails, social]);
  if (isFetching) return "loading";

  return (
    <>
      <Main />
      {/* <hr /> */}
      <section>
        <div className="my-footer">
          <div class="switch">
            <div class="circle"></div>
          </div>
          <div class="progress-wrap">
            <svg
              class="progress-circle svg-content"
              width="100%"
              height="100%"
              viewBox="-1 -1 102 102"
            >
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />

              <p>eee</p>
            </svg>
            {/* <i class="bx bxs-chevron-up"></i> */}
            <i class="bx bx-chevron-up"></i>
          </div>
          <div className="footer-info">
            <div className="copywrite">
              <p>
                Copyright ©2022 All rights reserved | Made with ❤️ by James
                Waweru
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
