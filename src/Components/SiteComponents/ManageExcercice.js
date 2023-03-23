import React from 'react'

export default function ManageExcercice() {
    return (
        <div className="registration-section fl-fix bg-green c-white d-f jc-sb ai-c">
            <div className="info-box w30">
                <div className="wrapper">
                    <h2 className="h1 ff-MuseoSans-500">
                        Personalized exercises to manage your arthritis at home
                    </h2>
                    <div className="short-info padB50">
                        <p>
                            With MyArthritisRX, you can take better control of your arthritis, and
                            even improve your quality of life with better knee pain treatment at
                            home. In fact, just a few simple exercises carefully overseen by
                            arthritis coach can help with your arthritis treatment. Sign up to
                            MyArthritisRX and start enjoying your life free from the pain of
                            chronic joint pain.
                        </p>
                    </div>
                    <a
                        href="javascript:void(0)"
                        className="btn btn-transparent-white"
                        title="Enroll Now"
                        onclick="javascript: $('.register-open').click(); $('.reglink a').click(); return false;"
                    >
                        Enroll Now
                    </a>
                </div>
            </div>
            <div className="video-box d-f ai-c jc-c w65">
                <a
                    href="https://vimeo.com/412760418"
                    className="d-b ov-h pos-r play-btn w100"
                    data-fancybox=""
                >
                    <img
                        src="assets/dist/images/video-banner.jpg"
                        alt="Arthritis Management Video"
                        className="w100"
                    />
                </a>
            </div>
        </div>

    )
}
