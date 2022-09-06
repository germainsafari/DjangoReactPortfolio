import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import decor4 from "../../images/decoration/Path-25.png";
import "./Intro.css";
import { useGetHomeDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";

const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  const [homeDetails, setHomeDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);
  const img_300 = "http://drive.google.com/uc?id=";

  useEffect(() => {
    setHomeDetails(homeData);
    setContact2Details(conta);

    console.log(conta);
  }, [homeDetails, homeData, contacts1Details, conta]);
  if (isFetching) return "loading";

  return (
    <>
      {homeDetails &&
        homeDetails.map((detail) => (
          <section className=" intro-page" id="home">
            <div className="decorations">
              <div className="decor-dot2">
                <img src={decor3} alt="" />
              </div>
              <div className="decor-box">
                <img src={decor4} alt="" />
              </div>
              <div className="parcol"></div>
            </div>
            <div className="small-intro">
              <div className="intro-row">
                <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                  <div className="intro-name">
                    <h3 className="hello">{detail.job_title}</h3>
                    <h3 className="name">Hey! I Am</h3>
                    <h3 className="job">{detail.name}</h3>
                    <p className="myinfo">{detail.par_inro}</p>
                  </div>
                  <div className="intro-btns">
                    <a
                      href={`mailto:${detail.hireMe_link}`}
                      className="contactMe"
                    >
                      <button className="contact-me">
                        Hire me <i class="bx bx-send "></i>
                      </button>
                    </a>
                  </div>
                  <div class="intro-contact">
                    <span>Follow Me:</span>
                    <ul>
                      <li>
                        {contacts1Details &&
                          contacts1Details.map((data1) => (
                            <a href={data1.link} className="icon-link">
                              <i className={data1.social_icon}></i>
                            </a>
                          ))}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 left-img ">
                  <div className="ff">
                    <img
                      className="intro-img"
                      src={`${img_300}${detail.avatar_img}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="intro-links"></div>
          </section>
        ))}
    </>
  );
};

export default Intro;
