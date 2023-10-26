import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";

const Home = () => {
  return (
    <>
      {/* ================== Hero section ================== */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ================== Hero content ================== */}
            <div>
              <div className="ld:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-heading-Color font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent congue faucibus elit, id condimentum enim pulvinar a.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Mauris accumsan efficitur nunc ut luctus. Integer rutrum vitae
                  eros a porttitor. Ut tristique efficitur ex, id semper ante
                  rutrum nec.
                </p>
                <button className="btn">Request an appointment</button>
              </div>
              {/* ================== Hero counter ================== */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
          lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor-"
                  >
                    30
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of experience</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor-"
                  >
                    30
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic location</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor-"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full mb-[30px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================== Hero section end ================== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text para text-center">
            World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" /></div>
            </div>

            <div className="mt-[30px]"> 
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a doctor</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400px]">
                World class care for everyone. Our health System offers 
                unmatched, expert health care. From the lab to the clinic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
