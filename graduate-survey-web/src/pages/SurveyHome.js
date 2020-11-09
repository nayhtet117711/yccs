import React from "react"

import cfg from "../configs"

import Svg1 from "./home/Svg1"

import Component from "../components"

class SurveyHome extends React.Component {
  constructor() {
    super()
  }
  render() {
    const topSpace = -300
    const headerHeight = 60
    return (
      <div className=""  >
        <div style={{ 
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          top: topSpace,
          backgroundImage: "url('/home-banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "cover",
        }}></div>
        
        <PageTitle />

        <div style={{ height: 300 }}></div>

        <ContentRow1 />

        <ContentRow2 />

        <ContentRow3 />

        <ContentRow4 />

        <div className="p-5 is-size-5 has-text-centered is-italic has-text-dark has-text-weight-light">
          And lastly, don’t worry. Details of personal data will never be distributed or will not be used for any other purposes.
        </div>

        <div>

        </div>

      </div>
    );
  }
}

const PageTitle = () => {
  return(
    <div style={{ marginTop: 2, height: 230 }} className="columns is-centered is-vcentered">
      <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
        <div className="columns is-vcentered is-centered">
          <div className="column has-text-white p-5">
            <div className="is-size-3">
              University of Technology
            </div>
            <div className="is-size-4 py-2">
              (Yatanarpon Cyber City)
            </div>
            <div className="is-size-5">
              "Shape and bright your future at UTYCC"
            </div>
          </div>
          <div className="is-hidden-touch column has-text-white" style={{ marginTop: 300 }} align="right">
            <img src="/home-top-right.png" style={{ maxWidth: 320 }} />
          </div> 
        </div>
      </div>
    </div>
  )
}

const ContentRow1 = () => {
  return (
    <div className="" style={{  marginTop: 2, }}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
            <div className="columns is-vcentered is-centered">
              <div className="column has-text-black px-6">
                <div className="px-3" style={{  marginTop: -160, height: 140}}>
                  <Component.SurveyButton>Take Survey</Component.SurveyButton>
                </div>
                <div className="is-size-3">
                  What is this survey?
                </div>
                <div className="is-size-5 has-text-weight-light py-5">
                  This is a survey for UTYCC graduates. Every year there are many students graduating from UTYCC but there is no systematic information about them yet. 
                </div>
              </div>
              <div className="is-hidden-touch column has-text-black p-5" align="center">
                <Svg1/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

const ContentRow2 = () => {
  return (
    <div className="" style={{  marginTop: 2, }}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
            <div className="columns is-vcentered is-centered">
              <div className="is-hidden-touch column has-text-black p-5">
                <Svg1/>
              </div>
              <div className="column has-text-black px-6">
                <div className="is-size-5 has-text-weight-light py-5" >
                Whether the students working now or is in another academic program, is not known and it would be great to know if the academic plan and years in UTYCC were great experiences for graduated students.
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

const ContentRow3 = () => {
  return (
    <div className="" style={{  marginTop: 2, }}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
            <div className="columns is-vcentered is-centered">
              <div className="column has-text-black px-6">
                <div className="is-size-3">
                  Why you should be taking this survey?
                </div>
                <div className="is-size-5 has-text-weight-light py-5">
                  By taking this survey, the university can be in check with the trendings in working invironments, can be ahead with updated academic plans and courses, and can know which parts have to be improved.
                </div>
              </div>
              <div className="is-hidden-touch column has-text-black p-5" align="center">
                <Svg1/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

const ContentRow4 = () => {
  return (
    <div className="" style={{  marginTop: 2, }}>
        <div className="columns is-centered is-vcentered">
          <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
            <div className="columns is-vcentered is-centered">
              <div className="is-hidden-touch column has-text-black p-5">
                  <Svg1/>
              </div>
              <div className="column has-text-black px-6">
                <div className="is-size-5 has-text-weight-light py-5" >
                Juniors can know which kind of working environments their seniors are working on, and can prepare ahead of time for career choices.
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SurveyHome;
