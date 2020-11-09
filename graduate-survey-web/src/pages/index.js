import React, { useState } from "react"
import SurveyHome from "./SurveyHome.js"
import SurveySurvey from "./SurveySurvey.js"
import SurveyResult from "./SurveyResult.js"

import { Redirect, Route, Switch, withRouter } from "react-router-dom"

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
        <div className="py-5 has-text-centered mt-6" style={{ backgroundColor: "#00000010", backdropFilter: "blur(4px)"}}>
            Footer
        </div>
    )
}

export default withRouter(Pages);