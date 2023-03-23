import React from 'react'

export default function ProgramFaq() {
  return (
    <div className="our-faq bg-white fl-fix pos-r" id="faq">
  <div className="spacer50" />
  <div className="section-heading c-black padTB10">
    <div className="inner-wrapper">
      <h3 className="h1 ff-MuseoSans-500">FAQ</h3>
    </div>
  </div>
  <div className="inner-wrapper">
    <ul className="accordion fl-fix pos-r padB50" id="faqAccordian">
      <li className="item">
        <h5 className="accordion-btn ff-MuseoSans-500 active">
          <a>What is MyArthritisRx?</a>
        </h5>
        <div className="accordion-content" style={{'display':'block'}}>
          <p>
            MyArthritisRx is an innovative, 6-week program designed to help
            individuals manage their arthritis. The program is based on
            clinically-proven science and provides users with the tools they
            need to reduce their pain and increase their function to achieve an
            improved quality of life. MyArthritisRx brings together the
            individualized attention of arthritis coaches with a proved
            curriculum to help users achieve manageable but meaningful goals.
          </p>
        </div>
      </li>
      <li className="item">
        <h5 className="accordion-btn ff-MuseoSans-500">
          <a href="#">Am I eligible to participate in MyArthritisRx?</a>
        </h5>
        <div className="accordion-content">
          <p>
            MyArthritisRx is available for people who want to better manage
            their arthritis. The program focuses on education, targeted
            exercise, pain coping techniques and behavioral change to help you
            achieve lasting results.
          </p>
          <p>
            You can sign up for MyArthritisRx independently, but your employer
            may cover some or all of the costs. Please contact your human
            resources department to find out more or apply now as an individual.
          </p>
        </div>
      </li>
      <li className="item">
        <h5 className="accordion-btn ff-MuseoSans-500">
          <a href="#">
            Do I need a doctor’s note or prescription to participate?
          </a>
        </h5>
        <div className="accordion-content">
          <p>
            No, you don’t need a prescription to participate. MyArthritisRx
            provides you with tools and information that is beneficial for
            people who want to better manage their arthritis, including those
            who have been diagnosed with arthritis or who are otherwise at high
            risk for arthritis.
          </p>
        </div>
      </li>
      <li className="item">
        <h5 className="accordion-btn ff-MuseoSans-500">
          <a href="#">What are the most common types of arthritis?</a>
        </h5>
        <div className="accordion-content">
          <p>
            There are different types of arthritis. See a description of the
            different types in the{" "}
            <a href="about-arthritis.html#types-of-arthritis">
              About Arthritis
            </a>
            .
          </p>
        </div>
      </li>
      <li className="item">
        <h5 className="accordion-btn ff-MuseoSans-500">
          <a href="#">
            Can I use my existing computer/phone/tablet to participate or do I
            need special equipment?
          </a>
        </h5>
        <div className="accordion-content">
          <p>
            MyArthritisRx is designed to be used on any device connected to the
            internet. You can use MyArthritisRx with your existing
            computer/phone/tablet, as long as they are internet-enabled.
          </p>
        </div>
      </li>
    </ul>
  </div>
  <div className="spacer50" />
</div>

  )
}
