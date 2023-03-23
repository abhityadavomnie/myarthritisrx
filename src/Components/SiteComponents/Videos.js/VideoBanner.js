import React from 'react'

export default function VideoBanner() {
  return (
    <div className="inner-banner fl-fix pos-r ov-h">
  <div className="item pos-r ov-h w100">
    <figure>
      <img
        src="-/media/images/myarthritisrx/bannerimages/video-page-banner2a6f.jpg?h=550&la=en&w=1920&hash=4E4FBBE841053FDA29E443490B2F4A29CA22A7FB"
        className="w100"
        alt="Arthritis and COVID-19"
        width={1920}
        height={550}
      />
    </figure>
    <div className="banner-content pos-a w100  h100 d-f ai-c c-white">
      <div className="inner-wrapper">
        <div className="box">
          <h1 className="h2">
            {/*Social distancing doesn't mean you <br>
                                           have to manage your arthritis alone. <br>
                                           Join our program.*/}
            Our Take On Arthritis and COVID-19
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div
    className="banner-heading bg-blue c-white ta-c pos-r"
    id="six-week-program"
  >
    <div className="inner-wrapper">
      <h2 className="h1" />
    </div>
  </div>
</div>

  )
}
