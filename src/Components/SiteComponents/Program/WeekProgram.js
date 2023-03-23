import React from 'react'

export default function WeekProgram() {
  return (
    <div className="our-program bg-white fl-fix pos-r">
    <div className="spacer50" />
    <div className="section-heading bg-white c-black padTB10 marB40">
      <div className="inner-wrapper">
        <h3 className="h3 ff-MuseoSans-500">
          MyArthritisRx 6 Week Program Enrollment begins by completing:{" "}
        </h3>
      </div>
    </div>
    <div className="inner-wrapper">
      <div className="d-f w100 pos-r jc-sb ai-fs">
        <div className="w45 padR50">
          <ul className="circle-list h4 ff-MuseoSans-300">
            <li>
              A detailed self-assessment so we can better understand your
              individual health needs.
            </li>
            <li>
              MyArthritisRx uses it's staging algorithms to help determine your
              disease severity and risk of progression.
            </li>
            <li>Completing your profile.</li>
            <li>Coach and group assignment.</li>
          </ul>
        </div>
        <div className="video-box d-f ai-c jc-c w50 padL10">
          <a
            href="https://vimeo.com/412760418"
            className="d-b ov-h pos-r play-btn w100"
            data-fancybox=""
          >
            <img
              src="./assets/dist/images/our-program-video.jpg"
              alt="Arthritis Treatment Program Video"
              className="w100"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="spacer50" />
  </div>
  
  )
}
