import React from 'react'

export default function Banner() {
  return (
    <div className="home-banner fl-fix pos-r ov-h">
  <div className="home-slider pos-r ov-h">
    <div className="item pos-r ov-h w100">
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r desktop-only w100"
        style={{
          backgroundImage:
            "url(-/media/images/myarthritisrx/bannerimages/home-banner-img1.jpg)"
        }}
      />
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r mobile-only w100"
        style={{
          backgroundImage:
            "url(-/media/images/myarthritisrx/bannerimages/mob-banner1.jpg)"
        }}
      />
      <div className="banner-content pos-a w100 h100 d-f ai-c c-white">
        <div className="full-wrapper">
          <div className="box">
            <h1 className="h1">
              Social distancing doesn't mean you have to manage your arthritis
              alone.
            </h1>
            <p>
              Join our innovative program to manage your arthritis with tailored
              resources and experts to help you guide you.
            </p>
            <span className="d-b covid-promo ff-MuseoSans-700 marB40">
              Use Promo Code: MARXCOVID
            </span>
            <div className="action-box d-f">
              <a
                className="btn btn-transparent-white marR20"
                href="covid-19.html"
              >
                View Our Videos
              </a>
              <a
                href="javascript:void(0)"
                onclick="javascript:$('.register-open').click();$('.reglink a').click(); return false;"
                className="btn"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="item pos-r ov-h w100">
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r desktop-only w100"
        style={{
          backgroundImage:
            "url(-/media/images/myarthritisrx/bannerimages/Banner01.jpg)"
        }}
      />
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r mobile-only w100"
        style={{
          backgroundImage:
            "url(-/media/images/myarthritisrx/bannerimages/mob-banner2.jpg)"
        }}
      />
      <div className="banner-content pos-a w100 h100 d-f ai-c c-white">
        <div className="full-wrapper">
          <div className="box">
            <h2 className="h1">
              An innovative self-care solution to get healthy and manage your
              knee arthritis at home
            </h2>
            <p>
              An engaging program to help you receive and manage your arthritis
              knee pain treatment at home with support from arthritis coach.
            </p>
            <span className="d-b covid-promo ff-MuseoSans-700 marB40">
              Use Promo Code: MARXCOVID
            </span>
            <div className="action-box d-f">
              <a
                className="btn btn-transparent-white marR20"
                href="our-program.html"
              >
                How it works
              </a>
              <a
                href="javascript:void(0)"
                onclick="javascript:$('.register-open').click();$('.reglink a').click(); return false;"
                className="btn"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item pos-r ov-h w100">
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r desktop-only w100"
        style={{
          backgroundImage:
            "url(../media/images/myarthritisrx/bannerimages/Banner07.jpg)"
        }}
      />
      <figure
        className="bgp-cc bgsz-cv bgr-n banner-img pos-r mobile-only w100"
        style={{
          backgroundImage:
            "url(-/media/images/myarthritisrx/bannerimages/mob-banner3.jpg)"
        }}
      />
      <div className="banner-content pos-a w100 h100 d-f ai-c c-white">
        <div className="full-wrapper">
          <div className="box">
            <h2 className="h1">
              Don’t face arthritis alone. Connect to people like yourself.{" "}
            </h2>
            <h4>How can our arthritis social network help? </h4>
            <p>
              You don’t need to face your arthritis treatment by yourself. The
              MyArthritisRX community is here for support and advice.
            </p>
            <span className="d-b covid-promo ff-MuseoSans-700 marB40">
              Use Promo Code: MARXCOVID
            </span>
            <div className="action-box d-f">
              <a
                className="btn btn-transparent-white marR20"
                href="our-program.html#six-week-program"
              >
                See How?
              </a>
              <a
                href="javascript:void(0)"
                onclick="javascript:$('.register-open').click();$('.reglink a').click(); return false;"
                className="btn"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  <div className="scroll-down pos-a fl-fix d-f jc-c c-white">
    <a href="#personalized-treatment" className="d-ib pos-r">
      Scroll Down
    </a>
  </div>
</div>

  )
}
