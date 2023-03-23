import React from 'react'

export default function BlogBanner() {
  return (
    <div className="inner-banner fl-fix pos-r ov-h">
    <div className="item pos-r ov-h w100">
      <figure>
        <img
          src="-/media/images/myarthritisrx/bannerimages/blog_banner_updated6b84.jpg?h=550&la=en&w=1920&hash=71562D67BB65B671768BCA634FF4185BC5457B45"
          className="w100"
          alt="blog_banner_updated"
          width={1920}
          height={550}
        />
      </figure>
      <div className="banner-content pos-a w100  h100 d-f ai-c c-white">
        <div className="inner-wrapper">
          <div className="box">
            <h1 className="h2">Latest Blog Posts About Arthritis</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
