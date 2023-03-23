import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Stages() {
  return (
    <section className="stages-section overflow-hidden" id="different-stages1">
    <div className="stages-slider slider1 grey-bg to-load-b">
      <h2>The severity of degenerative arthritis is divided into 4 stages</h2>
      <div className="wrapper2">
        <div className="container">
    <Swiper
      
      navigation={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <div className="item">
            <div className="left-block">
              <div className="">
                <h5>Stage 1</h5>
              </div>
            </div>
            <div className="right-block">
              <div className="">
                <p>
                  A person with stage 1 degenerative arthritis exhibits very minor
                  bone spur growth. (Bone spurs are boney growths that often
                  develop where arthritic bones meet each other in the joint.)
                  Likely, a person with stage 1 degenerative arthritis is not
                  experiencing any pain or discomfort as a result of the very
                  minor wear on the components of the joint.<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="item">
            <div className="left-block">
              <div className="">
                <h5>Stage 2</h5>
              </div>
            </div>
            <div className="right-block">
              <div className="">
                <p>
                  Considered a “mild” stage of the condition. X-rays of knee
                  joints in this stage will reveal greater bone spur growth, but
                  the cartilage likely remains at a healthy size — the space
                  between the bones is normal, and the bones are not rubbing or
                  scraping on one another. Synovial fluid is also typically still
                  present at sufficient levels for normal joint motion. However,
                  this is the stage where people may first begin experiencing
                  symptoms — pain after a long day of walking or running, greater
                  stiffness in the joint when it’s not used for several hours,
                  tenderness when kneeling, bending or climbing stairs.
                  <sup>2</sup>
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="item">
            <div className="left-block">
              <div className="">
                <h5>Stage 3</h5>
              </div>
            </div>
            <div className="right-block">
              <div className="">
                <p>
                  Classified as “moderate” degenerative arthritis. The cartilage
                  between bones displays obvious damage, and the space between the
                  bones is narrowing. Patients with stage 3 degenerative arthritis
                  of the knee likely experience frequent pain when walking,
                  running, bending or kneeling. They also may experience joint
                  stiffness after sitting for long periods of time or when waking
                  up in the morning. Joint swelling may be present after extended
                  periods of motion.<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="item">
            <div className="left-block">
              <div className="">
                <h5>Stage 4</h5>
              </div>
            </div>
            <div className="right-block">
              <div className="">
                <p>
                  Considered “severe” degenerative arthritis. People in stage 4
                  degenerative arthritis of the knee experience great pain and
                  discomfort when walking or moving the joint. This is because the
                  joint space between bones is dramatically reduced — the
                  cartilage is almost completely gone, leaving the joint stiff and
                  possibly immobile. The synovial fluid is decreased dramatically,
                  and no longer helps reduce friction among the moving parts of a
                  joint.<sup>2</sup>
                </p>
              </div>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
        </div>
      </div>
    </div>
    <div className="refrences-section to-load-b">
      <div className="wrapper2">
        <ol>
          <li>
            Altman R, Asch E, Bloch D, et al. Development of criteria for the
            classification and reporting of osteoarthritis. Classification of
            osteoarthritis of the knee. Diagnostic and Therapeutic Criteria
            Committee of the American Rheumatism Association. Arthritis Rheum
            1986; 29:1039.
          </li>
          <li>
            Kellgren JH, Lawrence JS. Radiological assessment of osteo-arthrosis.
            Ann Rheum Dis. 1957;16(4):494-502.
          </li>
        </ol>
      </div>
    </div>
  </section>
  
  )
}
