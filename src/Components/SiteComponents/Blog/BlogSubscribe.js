import React from 'react'

export default function BlogSubscribe() {
  return (
    <div className="block subscribe-box">
    <h3>Subscribe to Our Blog</h3>
    <form method="post">
      <div className="row">
        <label>Name</label>
        <span id="rfvname" style={{ display: "none", color: "red" }}>
          Please enter your name.
        </span>
        <input
          type="text"
          name="name"
          id="name"
          maxLength={100}
          placeholder="Your Name"
        />
      </div>
      <div className="row">
        <label>Email</label>
        <span id="rfvemail" style={{ display: "none", color: "red" }}>
          Please enter your email address.
        </span>
        <input
          type="email"
          name="email"
          id="email"
          maxLength={100}
          placeholder="abc@xyz.com"
        />
      </div>
      <a
        onclick="return ValidateSubscribeBlog();"
        className="btn"
        id="blogSubscribe"
      >
        Submit
      </a>
      <p id="Successmsg" style={{ display: "none" }} />
    </form>
  </div>
  
  )
}
