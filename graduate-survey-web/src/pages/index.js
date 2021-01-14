import React, { useState } from "react"
import { Redirect, Route, Switch, withRouter } from "react-router-dom"

import SurveyHome from "./SurveyHome.js"
import SurveySurvey from "./SurveySurvey.js"
import SurveyResult from "./SurveyResult.js"
import SvgFacebook from './home/SvgFacebook'
import webImg from './home/yccWebsite.png'

const Pages = (props) => {
    return (
        <div className="">
            <Header {...props} />
            <Switch>
                <Route path="/home">
                    <SurveyHome />
                </Route>
                <Route path="/survey">
                    <SurveySurvey />
                </Route>
                <Route path="/result">
                    <SurveyResult />
                </Route>
                <Redirect to="/home" />
            </Switch>
            <Footer {...props} />
        </div>
    );
}

const Header = (props) => {
    const [navActive, setNavActive] = useState(false)
    const path = props.location.pathname
    return (
        <div style={{ 
            position: "-webkit-sticky",
            position: "sticky",
            top: 0,
            height: 60,
            backgroundColor: "#814af3d5",
            backdropFilter: "blur(4px)",
            zIndex: 100
        }}>
            <div className="columns is-centered">
                <div className="column is-four-fifths-desktop is-two-thirds-fullhd pt-1 pb-0">
                    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ backgroundColor: "transparent"}}>
                        <div className="navbar-brand">
                            <a href="/"  className="navbar-item ">
                                <div className="has-text-white is-size-4 has-text-weight-bold ycc-nav-title">
                                    UT-YCC
                                </div>
                            </a>
                            <a role="button" onClick={()=>setNavActive(!navActive)} className="mr-2 navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false" data-target="yccNavbar">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="yccNavbar" className={`navbar-menu p-0 ${(navActive && window.innerWidth<1024) ? "is-active" : ""}`} >
                            <div className="navbar-end" style={{ backdropFilter: (navActive && window.innerWidth<1024) ? "blur(4px)" : undefined, backgroundColor: (navActive && window.innerWidth<1024) ? "#814af3f5" : "transparent" }} >
                                <a href="/home" className={"has-text-white m-1 is-size-6 navbar-item ycc-menu " + (path==="/home" ? "menuActive" : "")}>HOME</a>
                                <a href="/survey" className={"has-text-white m-1 is-size-6 navbar-item ycc-menu " + (path==="/survey" ? "menuActive" : "")}>SURVEY</a>
                                <a href="/result" className={"has-text-white m-1 is-size-6 navbar-item ycc-menu " + (path==="/result" ? "menuActive" : "")}>RESULT</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>        
    )
}

const Footer = () => {
    return (
        <footer class="footer"
            style={{
                backgroundColor: "none",
                backdropFilter: "blur(4px)",
                // position: "absolute"#D29AF7,
                // zIndex: -1,
                width: "100%",
                height: "20%",
                backgroundPosition: "center bottom",
                backgroundImage: "linear-gradient(to right, #4568dc,#9634F1, #AA36E7)",
                opacity: 1.0,
                backgroundSize: "cover",
                // fontFamily: 'Roboto, sans-serif;'
            }}>
            <div className="container py-5 has-text-centered mt-6">
                <div className="columns is-mobile is-desktop">
                    <div className="column mx-3 pl-3 is-4">
                        <div className="is-3 has-text-white has-text-weight-bold">
                            CONTACT
            </div>
                        <div className="is-4 has-text-white has-text-weight-bold pt-3">
                            +95-025178100, +95-015178200, +95-025178300
            </div>
                        <div className="is-4 has-text-white has-text-weight-bold">
                            info@utycc.edu.mm
            </div>
                        <div className="is-4 has-text-white has-text-weight-bold">
                            most.yatanarpon@gmail.com
            </div>
                    </div>

                    <div className="column is-3">
                        <p className=" is-3 has-text-white has-text-weight-bold is-vcenter mr-6 pr-4">
                            SOCIAL
            </p>
                        <div className="row is-flex is-center" >
                            <a className="is-5 has-text-white has-text-weight-bold ml-4 pl-6 pt-3 is-vcenter" href="https://www.facebook.com/coeutycc" target="_blank">
                                <SvgFacebook className="image is-32x32" />facebook
                </a>
                            <a className="has-text-weight-bold pt-3 is-vcenter pl-3" href="https://www.utycc.edu.mm/" target="_blank">
                                <figure className="image is-32x32 is-5 has-text-white">
                                    <img src={webImg} />website
                </figure>
                            </a>
                        </div>
                    </div>

                    <div className="column is-4">
                        <div className="is-3 has-text-white has-text-weight-bold">
                            LOCATION
                </div>
                        <div className="is-4 has-text-white has-text-weight-bold pt-3">
                            At 28 miles on Mandalay-Lashio road,
                </div>
                        <div className="is-4 has-text-white has-text-weight-bold">
                            between Pyin Sar Village and Thone Taung Village,
                </div>
                        <div className="is-4 has-text-white has-text-weight-bold">
                            Pyin Oo Lwin, Myanmar;
                </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Pages);