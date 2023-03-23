import React from 'react'

export default function OurProgram() {
  return (
    <div className="our-program bg-white fl-fix pos-r">
  <div className="spacer50" />
  <div className="section-heading bg-green c-white padTB10 marB40">
    <div className="inner-wrapper">
      <h3 className="h3 ff-MuseoSans-500">
        Once your arthritis self-management program coach and group is assigned,
        your MyArthritisRx 6-week program begins.
      </h3>
    </div>
  </div>
  <div className="inner-wrapper">
    <h3 className="h3 ff-MuseoSans-500 c-black">
      The program involves self-management relating to the home care for
      arthritis that includes:{" "}
    </h3>
    <ul className="circle-list h4 ff-MuseoSans-300">
      <li>
        Evidence-based interactive education so you can learn more about your
        condition and home care for arthritis.
      </li>
      <li>
        A personalized arthritis self-management program that helps to reduce
        pain while increasing your strength and movement.
      </li>
      <li>
        Support of a dedicated arthritis coach to answer your questions and
        support you through your journey for the self-management of arthritis
        symptoms.{" "}
      </li>
      <li>
        Social support and communication with other users who have arthritis for
        mutual support.
      </li>
      <li>
        Weekly assessments to help track your progress to better help you reach
        your goals throughout your arthritis self-management program.{" "}
      </li>
    </ul>
    <div className="action-box ta-c padTB40">
      <a
        href="javascript:void(0)"
        className="btn"
        title="Enroll Now"
        onclick="javascript: $('.register-open').click(); $('.reglink a').click(); return false;"
      >
        Enroll Now
      </a>
    </div>
  </div>
  <div className="spacer50" />
</div>

  )
}
