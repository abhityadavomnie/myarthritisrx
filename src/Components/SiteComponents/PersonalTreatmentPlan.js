import React from 'react'

export default function PersonalTreatmentPlan() {
  return (
    <div
  className="personalized-treatment-plan bg-white ta-c fl-fix pos-r ov-h"
  id="personalized-treatment"
>
  <div className="wrapper">
    <div className="spacer100" />
    <div className="d-f w100 pos-r">
      <div className="info-box pos-a jc-c ai-c d-f bg-gray-2 c-black fxd-c">
        <h2 className="h2">
          Personalized <br /> treatment plan
        </h2>
        <h5 className="h5 ff-MuseoSans-500">
          for healthier joints <br />
          for patients with arthritis
        </h5>
        <a
          href="javascript:void(0)"
          className="btn"
          title="Enroll Now"
          onclick="javascript: $('.register-open').click(); $('.reglink a').click(); return false;"
        >
          Enroll Now
        </a>
      </div>
      <ul className="d-f jc-c w100 fxw-w ai-c plan-list">
        <li className="w50 item">
          <span className="icon-box d-ib marB10">
            <img
              src="-/media/images/myarthritisrx/allpageimages/images/feat-icon-small-1-active.png"
              alt="Evidence-based Approach"
            />
          </span>
          <h4 className="h4 title c-blue marB10">Evidence-based Approach</h4>
          <div className="short-info">
            This program is based on proven successes with clinical evidence and
            strong underlying science. mutual support and accountability.
          </div>
        </li>
        <li className="w50 item">
          <span className="icon-box d-ib marB10">
            <img
              src="-/media/images/myarthritisrx/allpageimages/images/feat-icon-small-3-active.png"
              alt="Interactive Modules"
            />
          </span>
          <h4 className="h4 title c-blue marB10">Interactive Modules</h4>
          <div className="short-info">
            Evaluate your condition through interactive, easy-to-understand
            lesson plans that educate patients regarding arthritis.
          </div>
        </li>
        <li className="w50 item">
          <span className="icon-box d-ib marB10">
            <img
              src="-/media/images/myarthritisrx/allpageimages/images/feat-icon-small-2-active.png"
              alt="Staging Algorithm"
            />
          </span>
          <h4 className="h4 title c-blue marB10">Staging Algorithm</h4>
          <div className="short-info">
            Our state-of-the-art technology provides a safe and user-friendly
            platform with the tools you need to manage and monitor your
            condition.
          </div>
        </li>
        <li className="w50 item">
          <span className="icon-box d-ib marB10">
            <img
              src="-/media/images/myarthritisrx/allpageimages/images/feat-icon-small-4-active.png"
              alt="Arthritis Coach"
            />
          </span>
          <h4 className="h4 title c-blue marB10">Arthritis Coach</h4>
          <div className="short-info">
            Receive professional guidance and customized treatment options. Our
            health coach helps you navigate the program and provides support
            throughout your progress.
          </div>
        </li>
        <li className="w50 item">
          <span className="icon-box d-ib marB10">
            <img
              src="-/media/images/myarthritisrx/allpageimages/images/feat-icon-small-5-active.png"
              alt="Social Support Network "
            />
          </span>
          <h4 className="h4 title c-blue marB10">Social Support Network</h4>
          <div className="short-info">
            Get the support you need. We match you up with other people
            struggling with the same condition to provide mutual support.
          </div>
        </li>
      </ul>
    </div>
    <div className="spacer100" />
  </div>
</div>

  )
}
