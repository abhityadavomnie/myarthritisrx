import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BasicAnatomy() {
  return (
    <section className="fullpage-section section2" id="basic-anatomy">
  <div className="head">
    <div className="wrapper2">
      <h2>Basic Anatomy</h2>
    </div>
  </div>
  <div className="fullpage-slider dir-rtl">
    <div className="to-load-b ">
      <div className="container">

      <Swiper
      
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {/* <div className="item swiper-slide"> */}
          <div className="table">
            <figure>
              {" "}
              <span className="">
                <img
                  src="-/media/images/myarthritisrx/allpageimages/images/about-arthritis-img2cab3.jpg?h=492&la=en&w=658&hash=CDACA1A93885C38C4555769A0D1F5C4E1CD13BE5"
                  alt="Basic Anatomy"
                  width={658}
                  height={492}
                />
              </span>{" "}
            </figure>
            <div className="content blue-bg">
              <div className="">
                <h3>Cartilage</h3>
                <div className="scroll">
                  <p>
                    Cartilage is a shock-absorbing connective tissue that is
                    found on the ends of bones. Lining in this area provides a
                    near frictionless gliding surface and as a barrier to
                    prevent bone on bone contact. Cartilage is primarily
                    composed of collagen, which provides cartilage with its
                    unique physical properties.<sup>1</sup> In load-bearing
                    areas such as the hips or knees, the erosion of cartilage
                    and the lack of regeneration cause severe pain and decreased
                    mobility that is associated with osteoarthritis.<sup>2</sup>{" "}
                    The hallmark of osteoarthritis is the loss of cartilage over
                    time, leading to bone-on-bone contact associated with
                    chronic pain and disability.<sup>3</sup>{" "}
                  </p>
                  <div className="refrences-section">
                    <div>
                      <ol>
                        <li>
                          Pratt, Rebecca. "Supporting Tissue:
                          Cartilage".AnatomyOne. Amirsys, Inc. Retrieved 26
                          October 2012.
                        </li>
                        <li>
                          Hayes WC, Mockros LF. Viscoelastic properties of human
                          articular cartilage. J Appl Physiol. 1971;31(4):562-8.
                        </li>
                        <li>
                          Arden N, Blanco F, Cooper C et al. Atlas of
                          Osteoarthritis. Springer; 2015.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        {/* <div className="item swiper-slide"> */}
        <SwiperSlide>
          <div className="table">
            <figure>
              {" "}
              <span className="">
                <img
                  src="-/media/images/myarthritisrx/allpageimages/images/about-arthritis-img2cab3.jpg?h=492&la=en&w=658&hash=CDACA1A93885C38C4555769A0D1F5C4E1CD13BE5"
                  alt="Basic Anatomy"
                  width={658}
                  height={492}
                />
              </span>{" "}
            </figure>
            <div className="content blue-bg">
              <div className="">
                <h3>Synovial Fluid</h3>
                <div className="scroll">
                  <p>
                    Synovial fluid is the viscoelastic fluid that surrounds
                    joint tissues. It provides lubrication and shock absorption,
                    and allows movement to occur smoothly and painlessly.
                    <sup>1</sup> Hyaluronic acid, also known as hyaluronan or
                    sodium hyaluronate, is the biopolymer responsible for the
                    viscoelastic properties of synovial fluid. The concentration
                    and quality of hyaluronic acid is diminished in joints
                    afflicted by aging and inflammation, especially in patients
                    with progressive osteoarthritis.<sup>2-4</sup> Synovial
                    fluid from osteoarthritic joints has a lower elasticity and
                    viscosity when compared to normal joints.<sup>5-7</sup>{" "}
                    Intra-articular injections of hyaluronic acid is an
                    FDA-approved treatment based on replacing the damaged
                    synovial fluid with a more protective temporary substitute.
                  </p>
                  <div className="refrences-section">
                    <div>
                      <ol>
                        <li>
                          Hui AY, Mccarty WJ, Masuda K, Firestein GS, Sah RL. A
                          systems biology approach to synovial joint lubrication
                          in health, injury, and disease. Wiley Interdiscip Rev
                          Syst Biol Med. 2012;4(1):15-37.
                        </li>
                        <li>
                          Band PA, Heeter J, Wisniewski HG, et al. Hyaluronan
                          molecular weight distribution is associated with the
                          risk of knee osteoarthritis progression. Osteoarthr
                          Cartil. 2015;23(1):70-6.
                        </li>
                        <li>
                          Balazs EA, Watson D, Duff IF, Roseman S. Hyaluronic
                          acid in synovial fluid: 1: molecular parameters of
                          hyaluronic acid in normal and arthritic human fields.
                          Arthritis Rheum 1967;10:357-76.
                        </li>
                        <li>
                          Larsen NE, Lombard KM, Parent EG, Balazs EA. Effect of
                          hylan on cartilage and chondrocyte cultures. J Orthop
                          Res. 1992;10(1):23-32.
                        </li>
                        <li>
                          Dahl LB, Dahl IMS, Engstrom-Laurent A, Granath K.
                          Concentration and molecular weight of sodium
                          hyaluronate in synovial fluid from patients with
                          rheumatoid arthritis and other arthropathies. Ann
                          Rheum Dis 1985;44:817-22. 5.{" "}
                        </li>
                        <li>
                          Hilbert BJ, Rowley G, Antonas KN. Hyaluronic acid
                          concentration in synovial fluid from normal and
                          arthritic joints of horses. Aust Vet J 1984;61:22-4.
                          6.{" "}
                        </li>
                        <li>
                          Sunblad L. Glycosaminoglycans and proteoglycans in
                          synovial fluid. In: Balazs EA, Jeanloz RW, eds. The
                          amino sugars: the chemistry and biology of compounds
                          containing amino sugars. New York: Academic Press,
                          1965:229-50.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        {/* </div> */}
        {/* <div className="item swiper-slide"> */}
        <SwiperSlide>
          <div className="table">
            <figure>
              {" "}
              <span className="">
                <img
                  src="-/media/images/myarthritisrx/allpageimages/images/HipImage4093.jpg?h=310&la=en&w=330&hash=750ED72C7D3B31BD186109F468F78BEEB99FC35C"
                  alt="Basic Anatomy"
                  width={330}
                  height={310}
                />
              </span>{" "}
            </figure>
            <div className="content blue-bg">
              <div className="">
                <h3>The Hip</h3>
                <div className="scroll">
                  <p>
                    The hip is one of the most flexible joints of the body. It
                    is a ball and socket joint formed between the proximal end
                    of the femur bone and the acetabulum (or the socket) of the
                    pelvic bone. This allows us to move our legs in a wide range
                    of motion for a number of activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        {/* </div> */}
        {/* <div className="item swiper-slide"> */}
        <SwiperSlide>
          <div className="table">
            <figure>
              {" "}
              <span className="">
                <img
                  src="-/media/images/myarthritisrx/allpageimages/images/about-arthritis-img2cab3.jpg?h=492&la=en&w=658&hash=CDACA1A93885C38C4555769A0D1F5C4E1CD13BE5"
                  alt="Basic Anatomy"
                  width={658}
                  height={492}
                />
              </span>{" "}
            </figure>
            <div className="content blue-bg">
              <div className="">
                <h3>The Knee</h3>
                <div className="scroll">
                  <p>
                    The knee is one of the strongest joints in the human body.
                    The knee joint is also known as the tibiofemoral joint and
                    is composed of three bones: the femur (thigh bone), the
                    patella (knee cap), and the tibia (shin bone). Together,
                    these bones come together to form a synovial hinge joint
                    that allows flexion and extension of the leg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        </SwiperSlide>
        </Swiper>
      </div>
      {/* Add Pagination */}
      <div className="swiper-pagination swiper-pagination2" />
    </div>
  </div>
</section>

  )
}
