import "./AboutMe.css";
import {
  useGetAboutMeQuery,
  useGetHomeDetailsQuery,
  useGetLanguagesIconsQuery,
} from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
  const { data: aboutData, isFetching } = useGetAboutMeQuery();
  const { data: langIcons } = useGetLanguagesIconsQuery();
  const [aboutMe, setAboutMe] = useState(aboutData);
  const [icons, setIcons] = useState(langIcons);
  const img_300 = "http://drive.google.com/uc?id=";

  const { data: conta2 } = useGetHomeDetailsQuery();
  const [contacts1Details, setContact2Details] = useState(conta2);
  const cv = contacts1Details && contacts1Details.map((data1) => data1.cv_link);
  console.log(cv);
  console.log(conta2);

  useEffect(() => {
    setAboutMe(aboutData);
    setContact2Details(conta2);

    setIcons(langIcons);
    console.log(langIcons);
  }, [aboutMe, aboutData, langIcons, icons, contacts1Details, conta2]);

  return (
    <>
      {aboutMe &&
        aboutMe.map((details) => (
          <main id="about" key={details.id}>
            <div className="aboutMe-container">
              <div className="about-decor">
                <div className="about-dots">
                  <img src={decor1} alt="" />
                </div>
                <div className="about-rect">
                  <img src={reactagle} alt="" />
                </div>
                <div className="about-shady">
                  <img src={shady} alt="" />
                </div>
              </div>
              <div className="abouMe-row">
                <div
                  className=" col-lg-6 col-md-5 col-sm-12 about-img"
                  data-aos="fade-up-right"
                >
                  <img src={`${img_300}${details.about_avatar}`} alt="" />
                </div>
                <div
                  className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
                  data-aos="fade-up-left"
                >
                  <div className="title">
                    <h2>{details.title}</h2>
                    <h3>{details.title_2}</h3>
                  </div>
                  <div className="about-description">
                    <p className="about-info">{details.description_one}</p>
                    {/* <p className="about-info-2">{details.description_two}</p> */}
                  </div>

                  <div className="lang">
                    {icons &&
                      icons.map((details4) => (
                        <div className="lang-info">
                          <i class={details4.icon} key={details4.id}></i>
                          <p className="pt-2">{details4.lang_name}</p>
                        </div>
                      ))}
                  </div>
                  <div className="itscv">
                    <a
                      href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
                      download="RESUME.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="download-cv">
                        Download Cv <i class="bx bx-download"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
    </>
  );
};

export default AboutMe;
