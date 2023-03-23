import React from 'react'

export default function BlogSearch() {
  return (
    <div className="block search-box">
    <div className="form">
      <form action="https://www.myarthritisrx.com/blog/search" method="get">
        <input
          type="search"
          name="s"
          required="required"
          placeholder="Search..."
        />
        <input type="submit" />
      </form>
    </div>
  </div>
  
  )
}
