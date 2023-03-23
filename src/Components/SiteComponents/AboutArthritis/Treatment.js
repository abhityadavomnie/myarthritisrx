import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Treatment() {
  return (
    <section className="treatments-section overflow-hidden" id="treatments">
    <div className="wrapper2 to-load-b">
      <h2>Treatments for Degenerative Arthritis</h2>
      <h4 className="">Self-Directed Interventions:</h4>
      <h3>Over the Counter Medications</h3>
      <p>
        Although there is no medication that will completely cure osteoarthritis,
        there are therapies that alleviate pain and reduce inflammation. These
        medications include over-the-counter (OTC) non-steroidal
        anti-inflammatories (NSAIDs), nutraceuticals, glucosamine, hyaluronic
        acid, chondroitin, diacerein and avocado-soybean unsaponifiables.
        <sup>1,2</sup>
      </p>
    </div>
    <div className="stages-slider slider2 grey-bg to-load-b">
      <div className="wrapper">
        <div className="">
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
                  <h5>
                    NSAIDs (Advil, Motrin, Ibuprofen, Excedrin, Naproxen, Aleve,
                    Midol)
                  </h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    These medications have anti-inflammatory and analgesic
                    properties to reduce pain and inflammation within the joint.
                    Side effects of NSAID usage include the potential to develop
                    ulcers in the stomach, leading to gastric bleeding.
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Acetaminophen (Tylenol)</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    This is a purely pain-relieving medication with no effect on
                    inflammation. Current guidelines recommend acetaminophen as a
                    first-line therapy for the treatment of osteoarthritis because
                    of the potential gastrointestinal complication that can be
                    caused by classic NSAIDs.{" "}
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Oral Glucosamine</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    Glucosamine is an endogenous monosaccharide working as an
                    important precursor in the biosynthesis of glycosylated
                    proteins, proteoglycans and lipids. In the body, it is a
                    synthesized from glucose and used to form proteoglycans. With
                    the progression of OA, the water content of cartilage
                    increases as the proteoglycans within the cartilage is lost.
                    Meta-analyses of all glucosamine studies found that when the
                    results were pooled, glucosamine significantly reduced
                    joint-space narrowing; however, the effect was modest.
                    <sup>1,2</sup>
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Oral Hyaluronan</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    Glucosamine is an endogenous monosaccharide working as an
                    important precursor in the biosynthesis of glycosylated
                    proteins, proteoglycans and lipids. In the body, it is a
                    synthesized from glucose and used to form proteoglycans. With
                    the progression of OA, the water content of cartilage
                    increases as the proteoglycans within the cartilage is lost.
                    Meta-analyses of all glucosamine studies found that when the
                    results were pooled, glucosamine significantly reduced
                    joint-space narrowing; however, the effect was modest.
                    <sup>1,2</sup>
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Oral Chondroitin Sulfate</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    Chondroitin sulfate comprises the majority of
                    glycosaminoglycans in human cartilage and plays an essential
                    role in the structural and functional integrity of the joints.
                    Evidence from three clinical studies of patients with knee OA
                    found that long-term treatment with chondroitin sulfate may
                    slow joint-space narrowing.<sup>1,2</sup>
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Oral Diacerein</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    Diacerein is believed to block the expression of
                    cartilage-degrading enzymes.<sup>1,2</sup>
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item">
              <div className="left-block">
                <div className="">
                  <h5>Avocado-Soybean Unsaponifiables</h5>
                </div>
              </div>
              <div className="right-block">
                <div className="">
                  <p>
                    Avocado–soybean unsaponifiable (ASU) preparations are believed
                    to have both antioxidant and analgesic actions.<sup>1,2</sup>
                  </p>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div className="refrences-section to-load-b">
      <div className="wrapper2">
        <ol>
          <li>
            Gregory PJ, Fellner C. Dietary supplements as disease-modifying
            treatments in osteoarthritis: a critical appraisal. P T.
            2014;39(6):436-52.
          </li>
          <li>
            Makary MA, Segev DL, Pronovost PJ, et al. Frailty as a predictor of
            surgical outcomes in older patients. J Am Coll Surg.
            2010;210(6):901-8.
          </li>
        </ol>
      </div>
    </div>
  </section>
  
  )
}
