import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SalarPie from '../components/SurveyPieChart'

class SurveyResult extends Component {
  constructor() {
    super()
  }
  render() {
    const topSpace = -350
    return (
      <div className="is-size-1-mobilep p*-0 m*-0">
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
          fontFamily: 'Roboto, sans-serif;'
        }}></div>
        <PageTitle />
        <div className="pt-3 py-4" style={{ height: 200 }}></div>
        <div className="" style={{ height: 900, marginTop: '50' }}>
          <JobMenu />
        </div>
      </div>
    );
  }
}

const PageTitle = () => {
  return (
    <div style={{ marginTop: 0.5, height: 90 }} className="columns is-centered is-vcentered">
      <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
        <div className="columns is-vcentered is-centered pr-5 mr-5">
          <div className=" column has-text-white is-centered pt-3 pl-6" align="right">
            <div className="is-size-5 has-text-weight-bold ml-3 pt-3 ">This is based on</div>
            <div className="is-size-5 has-text-weight-bold ml-6 pt-3 pl-6"> 2000 participated students</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const JobMenu = (props) => {
  return (
    <div className="container" style={{ marginTop: '350' }}>
      <div className="columns navbar-start panel mx-6 my-6"
        style={{
          float: 'center',
          fontSize: 20,
          color: '#000000',
          width: '80%'
          // textAlign: 'center',
          // padding: '14px 16px',
        }}>
        <div className="column">
          <a className="pl-6 mx-6 has-text-weight-bold" style={{ color: '#000000' }}> Salary </a>
        </div>
        <div className="column">
          <a className="has-text-weight-bold" style={{ color: '#000000' }}> Job / Career </a>
        </div>
        <div className="column">
          <a className="has-text-weight-bold" style={{ color: '#000000' }}> Company </a>
        </div>
        <div className="column">
          <a className="has-text-weight-bold" style={{ color: '#000000' }}> FOR UTYCC </a>
        </div>
      </div>
      <div className="pt-6"></div>
      <div className="columns">
        <div className="column" style={{ height: 400, float: 'left' }}>
          <SalarPie />
        </div>

        <div className="column pt-6 ml-6 pl-6">
          <div className="panel pt-3 has-text-weight-bold has-text-center is-6" style={{ width: '30%' }}>
            Male
          <progress class="progress is-info" value="45" max="100"></progress>
          </div>
          <div className="clearfix" style={{ clear: 'both' }}></div>
          <div className="content is-center is-vcenter">
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> 46.35 %</h5>
            </div>
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> Salary Range </h5>
            </div>
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> $1500 - $4000 </h5>
            </div>
          </div>
        </div>
        <div className="column pt-6 pr-6">
          <div className="panel pt-3 has-text-weight-bold is-6" style={{ width: '30%' }}>
            Female
          <progress class="progress is-info" value="45" max="100"></progress>
          </div>
          <div className="clearfix" style={{ clear: 'both' }}></div>
          <div className="content is-center is-vcenter">
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> 53.65 %</h5>
            </div>
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> Salary Range </h5>
            </div>
            <div className="is-5 has-text-white has-text-weight-bold pt-3">
              <h5> $1200 - $4000 </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="is-center is-vcenter mx-6 px-6">
        <div className="has-text-weight-bold has-text-center ml-6">
          Salary by gender distribution. Based on this result,
        </div>
        <div className="has-text-weight-bold has-text-center ml-6">
          it can be seen that basic pay of female is less than male's
        </div>

      </div>
    </div>
  )
}


export default withRouter(SurveyResult);
