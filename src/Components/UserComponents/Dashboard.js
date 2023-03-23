import React from 'react'

export default function Dashboard() {
    return (
        <section className="main">
            <div className="main-container index-page">
                {/*Header Alert end*/}
                {/*left side bar end*/}
                <div className="disp-tbl">
                    <div className="disp-tbl-cell left-cell">
                        <div className="cell-header">
                            <div className="heading-div">
                                <h2 className="heading">My Education Lesson</h2>
                                <div className="programInfo">
                                    <div className="col">
                                        Program: <strong>Moderate - Program</strong>
                                    </div>
                                    <div className="col">
                                        Start Date: <strong>12/15/2019</strong>
                                    </div>
                                    <div className="col">
                                        End Date: <strong>1/26/2020</strong>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="cell-body">
                            <h2 className="lets-begin">
                                Let's begin<span>Week 6</span>
                            </h2>
                            <div className="card-group">
                                <div className="cell-card">
                                    <h3>Lesson 1: What is Osteoarthritis?</h3>
                                    <div
                                        className="cell-card-txt ellipsis-line3"
                                        data-href="/6-week-program/moderate/week-6/my-education-lesson/lesson-1"
                                    >
                                        Arthritis refers to the inflammation of a joint and the most
                                        common type of arthritis is osteoarthritis. It is the leading
                                        cause of disability and pain in the elderly and there is an
                                        increasing prevalence among middle age individuals as wel
                                    </div>
                                    <figure>
                                        <a
                                            href="/6-week-program/moderate/week-6/my-education-lesson/lesson-1"
                                            className="myitem"
                                            name="{1BE4EA07-03B0-428B-A50A-0A76C5224895}"
                                        >
                                            <img src="-/media/E6058E80DFEA440A94A40F436ACEA67C.ashx" />
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <div className="video-duration">20:10</div>
                                </div>
                                <div className="cell-card">
                                    <h3>Lesson 2: Overview of Treatments</h3>
                                    <div
                                        className="cell-card-txt ellipsis-line3"
                                        data-href="/6-week-program/moderate/week-6/my-education-lesson/lesson-2"
                                    >
                                        There are four main areas of treatment for arthritis. 1.
                                        Nonpharmacologic Treatment of Osteoarthritis (mindfulness,
                                        weight loss, exercise etc
                                    </div>
                                    <figure>
                                        <a
                                            href="/6-week-program/moderate/week-6/my-education-lesson/lesson-2"
                                            className="myitem"
                                            name="{B52FE617-685A-4508-AFBB-FFE8ACA830A4}"
                                        >
                                            <img src="-/media/1A3F40DDE64C40069FCB6FD20390AC41.ashx" />
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <div className="video-duration">30:15</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="disp-tbl-cell right-cell">
                        <h2 className="right-heading">
                            6-Week Program Status{" "}
                            <a href="/myaccount/my-program" className="more">
                                View Details
                            </a>
                        </h2>
                        <div className="weeks-wrap marB20">
                            <ul className="nav nav-tabs">
                                <li>
                                    <a data-toggle="tab" href="#week1">
                                        Week 1
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#week2">
                                        Week 2
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#week3">
                                        Week 3
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#week4">
                                        Week 4
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#week5">
                                        Week 5
                                    </a>
                                </li>
                                <li>
                                    <a data-toggle="tab" href="#week6">
                                        Week 6
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="week1" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={25}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                                <div id="week2" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                                <div id="week3" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                                <div id="week4" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                                <div id="week5" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                                <div id="week6" className="tab-pane fade">
                                    <div className="week-graphs">
                                        <div className="week-graph">
                                            <h3>Educational Lessons</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                        <div className="week-graph">
                                            <h3>Exercise Plan</h3>
                                            <div className="circle-graph">
                                                <div className="circle-chart circle-md" data-percent={0}>
                                                    {" "}
                                                    <span className="chart-value" />
                                                </div>
                                            </div>
                                            <h4>
                                                <span>0</span> in your group have completed the educational
                                                lessons{" "}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                {/*week end*/}
                            </div>
                        </div>
                        <div className="previousWeekinfo pad20">
                            <div className="marB10">
                                Please,{" "}
                                <a
                                    className="popuplink"
                                    href="javascript:void(0)"
                                    data-weekid="{AFDCED64-AC9A-42D3-A591-EC2024C0F90C}"
                                    data-weekname="Week 2"
                                >
                                    click here
                                </a>{" "}
                                to provide Week 2 scores
                            </div>
                            <div className="marB10">
                                Please,{" "}
                                <a
                                    className="popuplink"
                                    href="javascript:void(0)"
                                    data-weekid="{7C172D96-1059-4ABC-B263-D093886966D4}"
                                    data-weekname="Week 3"
                                >
                                    click here
                                </a>{" "}
                                to provide Week 3 scores
                            </div>
                            <div className="marB10">
                                Please,{" "}
                                <a
                                    className="popuplink"
                                    href="javascript:void(0)"
                                    data-weekid="{5ECC19DA-B973-46D6-BCAC-8F51D324B920}"
                                    data-weekname="Week 4"
                                >
                                    click here
                                </a>{" "}
                                to provide Week 4 scores
                            </div>
                            <div className="marB10">
                                Please,{" "}
                                <a
                                    className="popuplink"
                                    href="javascript:void(0)"
                                    data-weekid="{92BE2B28-5FC9-49DA-A550-623BD02EB16D}"
                                    data-weekname="Week 6"
                                >
                                    click here
                                </a>{" "}
                                to provide Week 6 scores
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disp-tbl" id="ExercisePlan">
                    <div className="disp-tbl-cell left-cell">
                        <div className="cell-header">
                            <h2 className="heading">My Exercise Plan</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="cell-body category-wrap">
                            <h2 className="lets-begin">
                                Let's begin<span>Week 6</span>
                            </h2>
                            <div className="card-group">
                                <h3 className="category-heading">Category 1: Warm-up</h3>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-1">
                                            <img src="-/media/A61F3F2F8DAA4536B7550B0A9EF15D0E.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Range of Motion of Hips and Knees<span>3.5 min</span>
                                    </h4>
                                </div>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-2">
                                            <img src="-/media/4AE2941AD79B4F2DB5B645DB1FEFCB90.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Breathing<span>2.5 min</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="card-group">
                                <h3 className="category-heading">Category 2: Core Stability</h3>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-3">
                                            <img src="-/media/9241D3C9F1B34DACB57718F0852820E3.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Abdominal Activation<span>2.5 min</span>
                                    </h4>
                                </div>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-4">
                                            <img src="-/media/2EED8C6A7F79486C92BE3BEE59946180.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Pelvic Tilts<span>2.5 min</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="card-group">
                                <h3 className="category-heading">Category 3: Hip Stability</h3>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-5">
                                            <img src="-/media/42E04B5706E843BFB08A6D0DB47B7693.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Glute sets<span>2.5 min</span>
                                    </h4>
                                </div>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-6">
                                            <img src="-/media/068D724EF57940B192D2C83D06D37DFA.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Pelvic Tilts<span>2.5 min</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="card-group">
                                <h3 className="category-heading">
                                    Category 4: Knee Mobility/ Stability
                                </h3>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-7">
                                            <img src="-/media/C66BE52A96744C69940BFA7420C60FC6.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Active Knee extension in sitting<span>2.5 min</span>
                                    </h4>
                                </div>
                                <div className="cell-card">
                                    <figure className="border-red">
                                        <a href="/6-week-program/moderate/week-6/my-exercise-plan/exercise-8">
                                            <img src="-/media/4421F31D533F4CB7B9FAF286AD88E2EE.ashx" />
                                            {/*<img src="/assets/MyAccount/assets/images/video2.jpg" />*/}
                                            <span>Start here</span>
                                        </a>
                                    </figure>
                                    <h4>
                                        Breathing<span>2.5 min</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="disp-tbl-cell right-cell charts">
                        <div className="chart-wrap">
                            <h2 className="right-heading">
                                Sit-to-Stand Test{" "}
                                <a href="/myaccount/my-progress" className="more">
                                    View Details
                                </a>
                            </h2>
                            <div className="chart-box sit-to-stand" data-title="Repetitions">
                                <div
                                    className="chartjs-size-monitor"
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        overflow: "hidden",
                                        pointerEvents: "none",
                                        visibility: "hidden",
                                        zIndex: -1
                                    }}
                                >
                                    <div
                                        className="chartjs-size-monitor-expand"
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: 1000000,
                                                height: 1000000,
                                                left: 0,
                                                top: 0
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="chartjs-size-monitor-shrink"
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                width: "200%",
                                                height: "200%",
                                                left: 0,
                                                top: 0
                                            }}
                                        />
                                    </div>
                                </div>
                                <canvas
                                    id="sit-to-stand"
                                    width={393}
                                    className="marT5 chartjs-render-monitor"
                                    height={246}
                                    style={{ display: "block", width: 393, height: 246 }}
                                />
                            </div>
                            <div className="chart-txt">
                                <ul>
                                    <li className="gray-dots">
                                        US population normative value for age and gender
                                    </li>
                                    <li className="blue-dots">
                                        Normative value within your Arthritis severity category
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="chart-wrap">
                            <h2 className="right-heading">Knee Pain Score</h2>
                            <div className="chart-box">
                                <div className="knee-scores">
                                    <div
                                        className="chartjs-size-monitor"
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            className="chartjs-size-monitor-expand"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: 1000000,
                                                    height: 1000000,
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="chartjs-size-monitor-shrink"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "200%",
                                                    height: "200%",
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <canvas
                                        id="knee-scores"
                                        width={318}
                                        className="marT5 chartjs-render-monitor"
                                        height={199}
                                        style={{ display: "block", width: 318, height: 199 }}
                                    />
                                </div>
                            </div>
                            <div className="chart-txt">
                                <ul>
                                    <li className="blue-dots">
                                        Normative value of your Arthritis category
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*Group graph End*/}
                        <div className="chart-wrap">
                            <h2 className="right-heading">
                                Steps{" "}
                                <a href="/myaccount/my-progress" className="more">
                                    View Details
                                </a>
                            </h2>
                            <div className="chart-box">
                                <div className="wearables-graph">
                                    <div
                                        className="chartjs-size-monitor"
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            overflow: "hidden",
                                            pointerEvents: "none",
                                            visibility: "hidden",
                                            zIndex: -1
                                        }}
                                    >
                                        <div
                                            className="chartjs-size-monitor-expand"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: 1000000,
                                                    height: 1000000,
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className="chartjs-size-monitor-shrink"
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                bottom: 0,
                                                overflow: "hidden",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                zIndex: -1
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "200%",
                                                    height: "200%",
                                                    left: 0,
                                                    top: 0
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <canvas
                                        id="wearables"
                                        width={408}
                                        className="marT5 chartjs-render-monitor"
                                        height={256}
                                        style={{ display: "block", width: 408, height: 256 }}
                                    />
                                    <img
                                        src="/assets/MyAccount/assets/images/dead-man-walking.png"
                                        className="step-icon"
                                        alt="Step Icon"
                                    />
                                    <strong>Steps</strong>
                                </div>
                            </div>
                            {/*<div class="chart-steps" data-title="Steps">
                          <strong>6,000</strong><br><span>Yesterday</span>
                      </div>*/}
                        </div>
                    </div>
                </div>
                {/*right-navigation end*/}
                {/* main section end*/}
                {/*main wrap section end*/}
                <div className="footer">
                    <ul>
                        <li>
                            <a href="/Terms-of-Use">Terms of Use</a>
                        </li>
                        <li>
                            <a href="/Privacy-Statement">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/HIPAA">HIPAA Notice</a>
                        </li>
                    </ul>
                </div>
                <div className="right-navigation">
                    <div className="inner">
                        <ul>
                            <li className="messageLi">
                                <a href="javascript:void(0)">
                                    Messages <span>0</span>
                                </a>
                            </li>
                            <li className="notificationLi">
                                <a href="javascript:void(0)">
                                    Notifications <span>0</span>
                                </a>
                            </li>
                            <li className="alertLi">
                                <a href="javascript:void(0)">
                                    Alerts <span>4</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-tabs">
                        <div className="right-tab" id="messageId">
                            <ul className="right-msg-link">
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="active"
                                        data-tab="coach-msg"
                                    >
                                        Messages from Coach
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" data-tab="group-msg">
                                        Messages from Group
                                    </a>
                                </li>
                            </ul>
                            <div className="msg-contaners">
                                <div className="msg-contaner" id="coach-msg">
                                    <ul></ul>
                                </div>
                                {/*Message from coach container end*/}
                                <div className="msg-contaner" id="group-msg">
                                    <ul></ul>
                                </div>
                                {/*Message from coach container end*/}
                            </div>
                        </div>
                        {/*Message tab container end*/}
                        <div
                            className="right-tab"
                            id="notificationsId"
                            style={{ display: "none" }}
                        >
                            <h3 className="tab-title">Notifications</h3>
                            <div className="msg-contaners">
                                <div className="msg-contaner">
                                    <ul></ul>
                                </div>
                                {/*Message from coach container end*/}
                            </div>
                        </div>
                        {/*notifications tab container end*/}
                        <div className="right-tab" id="alertsId" style={{ display: "none" }}>
                            <h3 className="tab-title">Alerts</h3>
                            <div className="msg-contaners">
                                <div className="msg-contaner">
                                    <ul>
                                        <li>
                                            <h4>You haven't provided Week 2 scores yet.</h4>
                                            <p>
                                                Please,{" "}
                                                <a
                                                    className="popuplink"
                                                    href="javascript:void(0)"
                                                    data-weekid="{AFDCED64-AC9A-42D3-A591-EC2024C0F90C}"
                                                    data-weekname="Week 2"
                                                >
                                                    click here
                                                </a>{" "}
                                                to provide scores
                                            </p>
                                        </li>
                                        <li>
                                            <h4>You haven't provided Week 3 scores yet.</h4>
                                            <p>
                                                Please,{" "}
                                                <a
                                                    className="popuplink"
                                                    href="javascript:void(0)"
                                                    data-weekid="{7C172D96-1059-4ABC-B263-D093886966D4}"
                                                    data-weekname="Week 3"
                                                >
                                                    click here
                                                </a>{" "}
                                                to provide scores
                                            </p>
                                        </li>
                                        <li>
                                            <h4>You haven't provided Week 4 scores yet.</h4>
                                            <p>
                                                Please,{" "}
                                                <a
                                                    className="popuplink"
                                                    href="javascript:void(0)"
                                                    data-weekid="{5ECC19DA-B973-46D6-BCAC-8F51D324B920}"
                                                    data-weekname="Week 4"
                                                >
                                                    click here
                                                </a>{" "}
                                                to provide scores
                                            </p>
                                        </li>
                                        <li>
                                            <h4>You haven't provided Week 6 scores yet.</h4>
                                            <p>
                                                Please,{" "}
                                                <a
                                                    className="popuplink"
                                                    href="javascript:void(0)"
                                                    data-weekid="{92BE2B28-5FC9-49DA-A550-623BD02EB16D}"
                                                    data-weekname="Week 6"
                                                >
                                                    click here
                                                </a>{" "}
                                                to provide scores
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                {/*alerts tab container end*/}
                                {/*
                          <div class="msg-contaner" id="group-msg">
                              <ul>
                                  <li>
                                      <h4>Alert Messages from group dolor sit amet</h4>
                                      <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                  </li>

                                  <li>
                                      <h4>Messages from group adipiscing consectetur elit</h4>
                                      <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                  </li>

                                  <li>
                                      <h4>Lorem ipsum dolor sit amet adipiscing consectetur elit</h4>
                                      <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                  </li>

                                  <li>
                                      <h4>Lorem ipsum dolor sit amet adipiscing consectetur elit</h4>
                                      <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                  </li>

                                  <li>
                                      <h4>Lorem ipsum dolor sit amet adipiscing consectetur elit</h4>
                                      <p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                  </li>
                              </ul>
                          </div><!--Message from coach container end*/}
                            </div>
                        </div>
                        {/*Message tab container end*/}
                    </div>
                </div>
            </div>
            {/* Select Prescriber Modal Start */}
            <div
                className="modal fade"
                id="myModal1"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="false"
            >
                <div className="modal-dialog modal-lg">
                    {/* Modal content*/}
                    <div className="modal-content programMedel">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                ×
                            </button>
                            <h4 className="modal-title currentweekName">
                                Please, provide week 6 scores
                            </h4>
                        </div>
                        {/*modal-header end*/}
                        <div className="modal-body sittostand bodydata">
                            <input
                                type="hidden"
                                id="hdnUserId"
                                name="hdnUserId"
                                defaultValue={7503}
                            />
                            <div className="question-section display-table w100">
                                <div
                                    className="table-cell w75 intake-right"
                                    style={{
                                        backgroundImage:
                                            'url("/assets/intake/assets/images/intake-form/right-bg.jpg")'
                                    }}
                                >
                                    <div className="intake-body f-fix intake">
                                        <div className="question-bar">
                                            <h2 className="" />
                                        </div>
                                        <div className="answer-body">
                                            <div className="answer-row ">
                                                <p
                                                    id="intakeError"
                                                    style={{ color: "red", display: "none" }}
                                                    className="errorMsg"
                                                >
                                                    Please answer this question.
                                                </p>
                                                <div className="video-in-popup">
                                                    <div className="display-table w100">
                                                        <div className="table-cell w55 sit-to-stand-test">
                                                            <div className="answer-body">
                                                                <div className="question-bar">
                                                                    <h2 className="">
                                                                        Let's take a short break and do a 30 second sit
                                                                        to stand test.
                                                                    </h2>
                                                                </div>
                                                                <div className="sit-stand">
                                                                    <div className="video-box">
                                                                        <p className="marB10 hide-videotitle">
                                                                            Play video and watch until the end to activate
                                                                            timer and begin test
                                                                        </p>
                                                                        <iframe
                                                                            src="https://player.vimeo.com/video/337248039"
                                                                            width={560}
                                                                            height={315}
                                                                            frameBorder={0}
                                                                            webkitallowfullscreen=""
                                                                            mozallowfullscreen=""
                                                                            allowFullScreen=""
                                                                        />
                                                                    </div>
                                                                    <div className="timer-box"></div>
                                                                    <div className="image-box">
                                                                        <img src="/assets/Intake/assets/images/marx-animation-sitting.jpg" />
                                                                    </div>
                                                                    <input
                                                                        type="hidden"
                                                                        id="gif-animation"
                                                                        defaultValue="/assets/Intake/assets/images/marx-gif-animation.gif"
                                                                    />
                                                                    <input
                                                                        type="hidden"
                                                                        id="gif-image"
                                                                        defaultValue="/assets/Intake/assets/images/marx-animation-sitting.jpg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="timer-pop" style={{ display: "none" }}>
                                <div className="pop-center">
                                    <div className="timer-wrap">
                                        <h3 className="c-blue">Get</h3>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="mysittostand" />
                        </div>
                        {/*modal-body end*/}
                        <div className="modal-body kneescore bodydata">
                            <div>
                                <div className="question-bar">
                                    <h2 className=""> Pain</h2>
                                </div>
                                <div className="answer-body">
                                    <div className="answer-row">
                                        <p
                                            id="intakeError"
                                            style={{ color: "red", display: "none" }}
                                            className="errorMsg"
                                        >
                                            Please answer all the questions.
                                        </p>
                                        <input
                                            type="hidden"
                                            id="hdnQuestionID"
                                            name="hdnQuestionID"
                                            defaultValue=""
                                        />
                                        <input
                                            type="hidden"
                                            id="hdnWeightage"
                                            name="hdnWeightage"
                                            defaultValue=""
                                        />
                                        <input
                                            type="hidden"
                                            id="hdnUserId"
                                            name="hdnUserId"
                                            defaultValue={7503}
                                        />
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                How often do you experience knee pain?
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{8D1CEB5D-01F0-489B-9719-567965FC61BC}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="8D1CEB5D-01F0-489B-9719-567965FC61BC"
                                                            defaultValue="{5C2B5178-7AE6-4231-BFC7-F7B87AA77B15}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>Never</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="8D1CEB5D-01F0-489B-9719-567965FC61BC"
                                                            defaultValue="{EC570A7B-F953-42E7-9E19-ACE436E1CDBC}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Monthly</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="8D1CEB5D-01F0-489B-9719-567965FC61BC"
                                                            defaultValue="{7DD147C9-B0F6-4999-A535-89CA21848E81}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Weekly</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="8D1CEB5D-01F0-489B-9719-567965FC61BC"
                                                            defaultValue="{D4B60124-7E4F-42E9-A31C-DADAD4878715}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Daily</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="8D1CEB5D-01F0-489B-9719-567965FC61BC"
                                                            defaultValue="{BF3CC7A2-26B0-4B58-93D8-E8310B99C642}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Always</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h5 className="padT30 marB15">
                                                What amount of knee pain have you experienced{" "}
                                                <u>during the last week</u> following activities?
                                            </h5>
                                            <p />
                                            <h6 className="question">
                                                Twisting/pivoting on your knee
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{7EC3A7BE-07F5-4BEC-88A6-18EB19650058}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="7EC3A7BE-07F5-4BEC-88A6-18EB19650058"
                                                            defaultValue="{98CAC4AB-2CCA-4CA6-AD33-64CA81289811}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="7EC3A7BE-07F5-4BEC-88A6-18EB19650058"
                                                            defaultValue="{B7DAE311-38C6-4A9B-879E-A757EA1EF29B}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="7EC3A7BE-07F5-4BEC-88A6-18EB19650058"
                                                            defaultValue="{E32489C0-150B-4304-AD2A-247D1D4E1D8F}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="7EC3A7BE-07F5-4BEC-88A6-18EB19650058"
                                                            defaultValue="{CB8DB2CE-044A-4E8B-8415-372E13C746D5}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="7EC3A7BE-07F5-4BEC-88A6-18EB19650058"
                                                            defaultValue="{C316A41C-856B-49AE-B919-FE073F910EA3}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Straightening knee fully
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{27CCF76E-4F04-4D35-9133-47E5FB96DF2E}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27CCF76E-4F04-4D35-9133-47E5FB96DF2E"
                                                            defaultValue="{4D12B6EC-1B43-4B2A-A69E-FCA155DC685B}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27CCF76E-4F04-4D35-9133-47E5FB96DF2E"
                                                            defaultValue="{3B97ACC0-1E18-4673-9052-A3AD5C5363C2}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27CCF76E-4F04-4D35-9133-47E5FB96DF2E"
                                                            defaultValue="{A04995A2-B33B-4DCD-84B1-FB6F40E634B4}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27CCF76E-4F04-4D35-9133-47E5FB96DF2E"
                                                            defaultValue="{C1021328-3690-4BBB-BE94-5820BF26CAFB}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27CCF76E-4F04-4D35-9133-47E5FB96DF2E"
                                                            defaultValue="{A5CF63FD-8019-4BDC-81E2-626E599F2808}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Bending knee fully
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{6855EB48-10B5-4A22-A225-E4C971B64954}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="6855EB48-10B5-4A22-A225-E4C971B64954"
                                                            defaultValue="{D4213ACF-D3BD-4A26-B7D2-27898934BF5C}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="6855EB48-10B5-4A22-A225-E4C971B64954"
                                                            defaultValue="{531FE08B-C28C-410E-9BFA-C9C68BD90BE5}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="6855EB48-10B5-4A22-A225-E4C971B64954"
                                                            defaultValue="{34348ACA-69D7-4AF7-93B5-3A30E279F1D4}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="6855EB48-10B5-4A22-A225-E4C971B64954"
                                                            defaultValue="{94D40DA5-5C33-47CD-B8BB-646AEEAE0C96}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="6855EB48-10B5-4A22-A225-E4C971B64954"
                                                            defaultValue="{B723982B-A473-4683-9D46-9F63492FD8D9}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Walking on flat surface
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8"
                                                            defaultValue="{B1EFED7B-DC3A-4659-B94F-29A2B04ED863}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8"
                                                            defaultValue="{67FE26B0-C00B-404D-A4E5-A5E471B0CBC1}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8"
                                                            defaultValue="{1F817657-C5AF-4F5F-9075-1CEF441FD729}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8"
                                                            defaultValue="{E857886E-E736-4B3D-8D0E-94E81C5A8749}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="DDCC6640-26DD-4F50-BF9D-FBF02FBDE3B8"
                                                            defaultValue="{E9AC294A-2CD2-4737-B3B7-2357F4140371}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Going up or down stairs
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{0769DDDC-6325-469B-AA31-E42C016E4BA2}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="0769DDDC-6325-469B-AA31-E42C016E4BA2"
                                                            defaultValue="{F41A8BE5-A749-4208-AE2B-03F638000004}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="0769DDDC-6325-469B-AA31-E42C016E4BA2"
                                                            defaultValue="{19AA4ECF-4DE1-4269-8EA9-3A7E6F1F1852}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="0769DDDC-6325-469B-AA31-E42C016E4BA2"
                                                            defaultValue="{BFD17026-FFF7-4ECD-91B2-9416CB200BFE}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="0769DDDC-6325-469B-AA31-E42C016E4BA2"
                                                            defaultValue="{0D205EE2-8295-40CE-BA69-601083850D9F}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="0769DDDC-6325-469B-AA31-E42C016E4BA2"
                                                            defaultValue="{59B0D2DF-D864-48F0-BA1E-83750F036A50}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                At night while in bed
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{335E116D-54A9-4C86-AA15-22A8A3E2DF5B}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="335E116D-54A9-4C86-AA15-22A8A3E2DF5B"
                                                            defaultValue="{F5DB3978-9BD8-4DC9-BB40-7F47DCFF2FC3}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="335E116D-54A9-4C86-AA15-22A8A3E2DF5B"
                                                            defaultValue="{7C76FF7A-736C-4CF2-BD16-7D425C807B32}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="335E116D-54A9-4C86-AA15-22A8A3E2DF5B"
                                                            defaultValue="{E8885047-93AF-47E2-8C90-157E3CC34B7F}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="335E116D-54A9-4C86-AA15-22A8A3E2DF5B"
                                                            defaultValue="{AB5DFA75-2CD2-4067-9DFB-CD81C7491CEB}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="335E116D-54A9-4C86-AA15-22A8A3E2DF5B"
                                                            defaultValue="{6203982C-3D99-40D5-9330-7CC69E9096C7}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Sitting or lying
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8"
                                                            defaultValue="{F3A6F9C0-0012-4D2F-98B4-F67C0FE17A5A}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8"
                                                            defaultValue="{E6D4CF86-6340-44EC-BD77-F3A86838A964}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8"
                                                            defaultValue="{E6766688-8693-4174-8771-5F267A19C971}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8"
                                                            defaultValue="{7BE61947-5406-44B7-8029-D23259364011}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="B22EBE4F-AC1E-41DA-8FEF-CF7C5B3E07A8"
                                                            defaultValue="{2F0C0EE9-9DC5-485F-A576-83C37E8E970F}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intake inline-option ">
                                            <p className="questionInfo" />
                                            <h6 className="question">
                                                Standing upright
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionID{1}"
                                                    name="hdnQuestionID{1}"
                                                    defaultValue="{27DCC33F-A6EC-4912-AFE7-DB232091E9EB}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnWeightage{1}"
                                                    name="hdnWeightage{1}"
                                                    defaultValue=""
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionGroup"
                                                    name="hdnQuestionGroup"
                                                    defaultValue="{42BB7836-A15F-4646-86D9-613DCE7F78C3}"
                                                />
                                                <input
                                                    type="hidden"
                                                    id="hdnQuestionCategory"
                                                    name="hdnQuestionCategory"
                                                    defaultValue={3}
                                                />
                                            </h6>
                                            <div className="question-opt">
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27DCC33F-A6EC-4912-AFE7-DB232091E9EB"
                                                            defaultValue="{95C31FDA-70C9-411F-917E-51BB2110D712}"
                                                            onchange="validateIntake()"
                                                            data-weightage={0}
                                                        />
                                                        <span>None</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27DCC33F-A6EC-4912-AFE7-DB232091E9EB"
                                                            defaultValue="{0A6C0E6F-D009-4459-8A6E-A2E89AA2EE46}"
                                                            onchange="validateIntake()"
                                                            data-weightage={1}
                                                        />
                                                        <span>Mild</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27DCC33F-A6EC-4912-AFE7-DB232091E9EB"
                                                            defaultValue="{8A55F2B3-F84E-4B2B-B064-E267BEE8DDB5}"
                                                            onchange="validateIntake()"
                                                            data-weightage={2}
                                                        />
                                                        <span>Moderate</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27DCC33F-A6EC-4912-AFE7-DB232091E9EB"
                                                            defaultValue="{120ACB10-70BE-4322-BA6F-5C267FBC12F9}"
                                                            onchange="validateIntake()"
                                                            data-weightage={3}
                                                        />
                                                        <span>Severe</span>
                                                    </label>
                                                </div>
                                                <div className="c-radio">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="27DCC33F-A6EC-4912-AFE7-DB232091E9EB"
                                                            defaultValue="{57C52354-47FC-4674-8D7A-C89501D41CF7}"
                                                            onchange="validateIntake()"
                                                            data-weightage={4}
                                                        />
                                                        <span>Extreme</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="mykneescore" />
                        </div>
                        {/*modal-body end*/}
                        <div className="modal-body stepslastweek bodydata">
                            <div className="fitbitdata" style={{ display: "none" }}>
                                <p
                                    className="WearableValue"
                                    style={{ color: "red", display: "none" }}
                                >
                                    Please provide steps from wearable device
                                </p>
                                <div className="display-table w100">
                                    <div className="table-cell w55 sit-to-stand-test">
                                        <div className="answer-body">
                                            <div className="question-bar">
                                                <h2 className="">
                                                    Let's fetch the steps from the wearable device you have.
                                                </h2>
                                            </div>
                                            <div className="sit-stand-left-item">
                                                <p>
                                                    <a
                                                        id="fitbitUrl"
                                                        className="btn"
                                                        href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22DQV2&redirect_uri=https%3A%2F%2Fsitecore.myarthritisrx.com%2Ffitbit%2Ffitbitdashboard.aspx&scope=activity&expires_in=604800"
                                                    >
                                                        Get Steps from Fitbit
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    name="wearabledata"
                                    id="wearabledata"
                                    className="stepsdata"
                                    maxLength={5}
                                />
                            </div>
                            <div className="inputstepdata">
                                <p
                                    className="WearableValue"
                                    style={{ color: "red", display: "none" }}
                                >
                                    Please answer this question
                                </p>
                                <input type="hidden" id="hdnstepslastweek" />
                                <h2 className="Question">
                                    Ajay Kumar, on average how many steps did you take in{" "}
                                    <span className="mycurrentWeek">week 6</span>?
                                </h2>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={1000}
                                            onchange="setSteps()"
                                        />
                                        <span>0 - 2000 (&lt;1 mile)</span>
                                    </label>
                                </div>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={3000}
                                            onchange="setSteps()"
                                        />
                                        <span>2000 - 4000 (1-2 miles)</span>
                                    </label>
                                </div>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={5000}
                                            onchange="setSteps()"
                                        />
                                        <span>4000 - 6000 (2-3 miles)</span>
                                    </label>
                                </div>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={7000}
                                            onchange="setSteps()"
                                        />
                                        <span>6000 - 8000 (3-4 miles)</span>
                                    </label>
                                </div>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={9000}
                                            onchange="setSteps()"
                                        />
                                        <span>8000 - 10000 (4-5 miles)</span>
                                    </label>
                                </div>
                                <div className="c-radio marB15 StepsOptions">
                                    <label>
                                        <input
                                            type="radio"
                                            name="stepsoption"
                                            defaultValue={10000}
                                            onchange="setSteps()"
                                        />
                                        <span>&gt; 10,000 (&gt;5 miles)</span>
                                    </label>
                                </div>
                            </div>
                            <input type="hidden" id="mylastweeksteps" />
                        </div>
                        {/*modal-body end*/}
                        {/*modal-body end*/}
                        <div className="modal-footer">
                            <div className="pull-right">
                                <button type="button" className="btn btn-default btn-prev">
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-next"
                                    id="setsittostand"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        {/*modal-footer end*/}
                    </div>
                    {/*modal-content end*/}
                </div>
                {/*modal-dialog end*/}
            </div>
        </section>

    )
}
