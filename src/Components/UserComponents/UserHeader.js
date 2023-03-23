import React from 'react'

export default function UserHeader() {
  return (
    <header className="header">
    <div className="pull-right">
      <div className="header-search">
        <form action="/api/sitecore/Search/MySearchResult" method="get">
          <input
            type="text"
            id="searchText"
            name="searchText"
            className="form-control"
            placeholder="Search Resources"
          />
          <input type="submit" className="search-btn" defaultValue="Search" />
        </form>
      </div>
      <div className="header-nav">
        <ul>
          <li>
            <a href="javascript:void(0)" className="help">
              Help
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="logout"
              onclick="javascript: UserLogout();"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  
  )
}
