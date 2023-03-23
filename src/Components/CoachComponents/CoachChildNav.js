import React from 'react'
import { Link } from 'react-router-dom'

export default function CoachChildNav() {
  return (
    <div className="inner-nav bg-white text-center">
      <div className="wrapper3">
        <ul>
          <li className="lireportcategory ">
            <Link to='/Coach/ContactUsList'>
              Contact Us
            </Link>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/Referral'>
              Refferals
            </Link>
          </li>
          <li className="lireportcategory ">
            <a href="/en/coach/userlisting" id="UserListing">
              User Listing
            </a>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/GroupList'>
              Group Topics
            </Link>
          </li>
          <li className="lireportcategory active">
            <Link to='/Coach/NewUsers'>
              New Users
            </Link>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/currently-not-intersted'>Currently Not Interested</Link>

          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/GroupList'>
              Group
            </Link>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/red-flagged'>
              Red Flagged
            </Link>
          </li>
          <li className="lireportcategory ">
            <a href="/en/coach/self-managed" id="Self Managed">
              Self Managed
            </a>
          </li>
          <li className="lireportcategory ">
            <a href="/en/coach/coach-assigned" id="Coach Assigned">
              Coach Assigned
            </a>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/CoachList'>
              CoachListing
            </Link>
          </li>
          <li className="lireportcategory ">
            <Link to='/Coach/Resource'>
              Resources
            </Link>
          </li>
        </ul>
        <div className="message-count-block">
          <a href="/coach/group/message" title="Messages">
            <span className="message-icon icon">
              <img src="/assets/images/message-icon.png" alt="" />{" "}
            </span>
          </a>
        </div>
      </div>
    </div>

  )
}
