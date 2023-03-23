import React from 'react'

export default function BenifitSection() {
  return (
    <div className="benefit-section bg-blue fl-fix pos-r c-white">
    <figure className="pos-a running-man">
      <img
        src="-/media/images/myarthritisrx/allpageimages/images/running-man.png"
        alt="Home Exercises for Arthritis"
      />
    </figure>
    <div className="wrapper">
      <div className="spacer150" />
      <div className="d-f w100 pos-r jc-sb ai-c">
        <div className="info-box w30 padR30">
          <h2 className="h1 ff-MuseoSans-500">Benefits</h2>
          <h5 className="h5 ff-MuseoSans-300">
            MyArthritisRx helps you manage your degenerative arthritis. Our
            digital, evidence-based approach gives you new health management tools
            specific to your needs. <br />
            MyArthritisRx allows you to:
          </h5>
        </div>
        <ul className="d-f w65 fxw-w benefit-list jc-sb">
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-activities.png"
                alt="icon-benefit-activities"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              Enjoy your daily activities knowing you are in control of your
              arthritis
            </h5>
          </li>
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-decrease.png"
                alt="icon-benefit-decrease"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              Decrease out-of-pocket healthcare costs by reducing unnecessary
              clinician visits
            </h5>
          </li>
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-wellness.png"
                alt="icon-benefit-wellness"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              Improve wellness by decreasing pain and improving your physical
              function
            </h5>
          </li>
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-optimize.png"
                alt="Optimize joint preservation"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              Optimize joint preservation and when appropriate avoiding invasive
              surgery
            </h5>
          </li>
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-appropriate.png"
                alt="Avoid Invasive Surgery"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              If appropriate, reduce unnecessary clinician visits and avoid
              invasive surgery
            </h5>
          </li>
          <li className="w45 item d-f ai-c">
            <span className="icon-box d-ib marR25">
              <img
                src="-/media/images/myarthritisrx/allpageimages/images/icon-benefit-access-latest.png"
                alt="icon-benefit-access-latest"
              />
            </span>
            <h5 className="h5 title ff-MuseoSans-300">
              Access information about current treatments and learn about
              innovative arthritis research
            </h5>
          </li>
        </ul>
      </div>
      <div className="spacer100" />
    </div>
  </div>
  
  )
}
