import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SurveyPie from '../components/SurveyPieChart'

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
        <div className="" style={{ width: '100%', height: '100%', marginTop: '50' }}>
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
    <div className="container" style={{ width: '100%', height: '100%' }}>
      <div className="columns navbar-start panel mx-6 my-6"
        style={{
          float: 'center',
          fontSize: 20,
          color: '#000000',
          width: '80%',
        }}>
        <div className="column">
          <a className="pl-6 mx-6 has-text-weight-light" style={{ color: '#000000' }}> Salary </a>
        </div>
        <div className="column">
          <a className="has-text-weight-light" style={{ color: '#000000' }}> Job / Career </a>
        </div>
        <div className="column">
          <a className="has-text-weight-light" style={{ color: '#000000' }}> Company </a>
        </div>
        <div className="column">
          <a className="has-text-weight-light" style={{ color: '#000000' }}> FOR UTYCC </a>
        </div>
      </div>
      <div className="pt-3"></div>
      <div className="columns  is-centered is-vcentered mx-3">
        <div className="column pb-6 pr-6 is-half" style={{ height: 350 }}>
          <SurveyPie
            data={salaryData}

          />
        </div>

        <div className="column is-small pt-6 is-centered is-vcentered mx-3">
          <div className="panel px-3 pt-3 has-text-weight-bold"
            style={{
              width: '40%',
              height: "15%",
              border: '2px solid #ccc',
              borderBottom: '5px solid #5C99C7',
              boxShadow: 'inset 0px 11px 8px -10px #CCC',
              borderRadius: 0,
              align: 'center'
            }}>
            Male
          </div>
          <div className="content is-centered is-vcentered">
            <div className="is-5 has-text-white has-text-weight-bold is-justify-content-center pt-3 pl-5">
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
        {/* <div className="clearfix" style={{clear: 'both'}}></div> */}
        <div className="column is-small pt-6 is-centered is-vcentered mx-3">
          <div className="panel px-3 pt-3 has-text-weight-bold is-6"
            style={{
              width: '40%',
              height: "15%",
              border: '2px solid #ccc',
              borderBottom: '5px solid #8A7ED5dd',
              boxShadow: 'inset 0px 11px 8px -10px #CCC',
              borderRadius: 0,
              align: 'center'
            }}>
            Female
          </div>
          <div className="content is-center is-vcenter">
            <div className="is-5 has-text-white has-text-weight-bold pt-3 pl-5">
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
      <div className="columns is-mobile is-desktop">
        <div className="column my-6 mb-6" style={{ height: '350px', paddingBottom: '50px' }}>
          <SurveyPie data={ratingData} />
        </div>
        <div className="column" style={{ height: '350px', paddingBottom: '50px' }}>
          <SurveyPie data={jobCareerData} isLegend/>
        </div>
      </div>
    </div>
  )
}
const salaryData = [
  {
    "id": "Male",
    "label": "Male",
    "value": 927,
    "color": "#5C99C7",
  },
  {
    "id": "Female",
    "label": "Female",
    "value": 1073,
    "color": "#8A7ED5dd",
  },
]

const jobCareerData = [
  {
    "id": "Owner Business",
    "label": "Owner Business",
    "value": 180,
    "color": "#984DEF"
  },
  {
    "id": "Other",
    "label": "Other",
    "value": 159,
    "color": "#8A7ED5"
  },
  {
    "id": "Government Staff",
    "label": "Government Staff",
    "value": 670,
    "color": "#6A48FD"
  },
  {
    "id": "Company",
    "label": "Company",
    "value": 991,
    "color": "#3344FF"
  }
]
const ratingData = [
  {
    "id": "Dissatisfied",
    "label": "Dissatisfied",
    "value": 506,
    "color": "#A23277"
  },
  {
    "id": "Neutral",
    "label": "Neutral",
    "value": 1494,
    "color": "#7C0BDF"
  }
]

export default withRouter(SurveyResult);
