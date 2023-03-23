import React from 'react'

export default function ProgramBanner() {
  return (
    <div className="inner-banner fl-fix pos-r ov-h">
    <div className="item pos-r ov-h w100">
      <figure>
        <img
          src="-/media/images/myarthritisrx/bannerimages/our-program-banner2ae4.jpg?h=550&la=en&w=1920&hash=3A527CE47133D8035CC0309650A536F9C4A04DFF"
          className="w100"
          alt="Self-care Arthritis Treatment Program"
          width={1920}
          height={550}
        />
      </figure>
      <div className="banner-content pos-a w100  h100 d-f ai-c c-white">
        <div className="inner-wrapper">
          <div className="box">
            <h1 className="h2">
              {/*An innovative solution to <br />
                                get healthy and manage your arthritis*/}
              Join Our Innovative Self-care Arthritis Treatment Program
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
        <h2 className="h1">Our 6 Week Program</h2>
      </div>
    </div>
  </div>
  
  )
}
