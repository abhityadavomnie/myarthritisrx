import React from 'react'

export default function IncidencePrevilience() {
  return (
    <section className="content-section" id="incidence-prevalence">
    <div className="wrapper2">
      <div className="content-row">
        <div className="figure ">
          <div className="adult-percentage to-load-b loaded">
            <strong>
              <span className="counter counter-default" id="counter1">
                50
              </span>
              %
            </strong>{" "}
            <span>
              American adults will develop arthritis in at least one knee in their
              lifetime*
            </span>
          </div>
          <div className="to-load-b loaded">
            {" "}
            <span className="map-animate ">
              <img src="assets/images/map-red.png" alt="" className="red" />{" "}
              <span
                className="blue"
                style={{ backgroundImage: "url(assets/images/map-blue.png)" }}
              >
                {" "}
                <img src="assets/images/map-blue.png" alt="" className="" />{" "}
              </span>{" "}
            </span>{" "}
          </div>
        </div>
        <div className="text to-load-b">
          <h2>Incidence and Prevalence of degenerative arthritis</h2>
          <p>
            In 2005 over 10% of the United States population held a clinical
            diagnosis degenerative arthritis, affecting 27 million Americans, and
            in 2009 it was the fourth most common cause of hospitalization.
            <sup>1</sup> With increasing life expectancy, it is expected that the
            prevalence of osteoarthritis will also continue to rise.{" "}
          </p>
          <p>
            1. Murphy, L., Helmick, CG. The impact of osteoarthritis in the United
            States: a population-health perspective.AM J Nurs. 2012; 112(3 Suppl
            1):S13-9
          </p>
        </div>
      </div>
      <div className="content-row">
        <div className="figure">
          <div className="burden-graph to-load-b loaded">
            <strong className="mild">Mild</strong>{" "}
            <strong className="moderate">Moderate</strong>{" "}
            <strong className="severe">Severe</strong>{" "}
            <span className="min">Min</span> <span className="max">Max</span>
            <div className="overflow-hidden">
              <img
                src="assets/images/graph-holder.gif"
                alt=""
                style={{ opacity: 0 }}
              />{" "}
              <span className="green" /> <span className="blue" />{" "}
              <span className="red" />{" "}
            </div>
          </div>
          <div className="stats to-load-b loaded">
            <div className="knee-percantage ">
              <img src="assets/images/knee-percantage.png" alt="" />
              <div className="text2">
                <strong className="coutner" id="counter2">
                  96
                </strong>
                % <span>of total replacements</span>{" "}
              </div>
            </div>
            <div className="cost-stats">
              <img src="assets/images/knee.png" alt="" />
              <div className="stats-block">
                <div className="top-row">
                  ~
                  <strong className="counter counter3" id="counter3">
                    700,000
                  </strong>
                </div>
                <div className="bottom-row">
                  $
                  <strong className="counter counter4" id="counter4">
                    35
                  </strong>{" "}
                  billion
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text to-load-b">
          <h2>Burden of degenerative arthritis</h2>
          <p>
            degenerative arthritis is the leading cause of disability among
            American adults. Because of its association with aging, prevalence of
            degenerative arthritis is increasing alongside the aging of the baby
            boomer generation. degenerative arthritis is the primary diagnosis
            indicated as the reason for total joint replacement surgery.
          </p>
          <p>
            {" "}
            Total joint replacement is currently the definitive treatment for
            end-stage osteoarthritis, but it is a costly intervention and not
            without risk. In fact, the yearly burden of osteoarthritis has totaled
            $149.4 billion for insurers and $36.1 billion in out-of-pocket costs
            for patients.<sup>1</sup>{" "}
          </p>
          <p>
            {" "}
            1. "Osteoarthritis Costs U.S. Over $185 Billion a Year." US News and
            World Report Health. US News and World Report LP, 2011. Web.{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}
