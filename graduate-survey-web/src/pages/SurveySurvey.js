import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import Input from '../components/SurveyInput'
import Radio from '../components/SurveyRadio'
import RatingRage from '../components/SurveyRange'
import surveyData from '../components/SampleData'
import SvgSurvey2 from './home/SvgSurvey2'
import SvgSurvey1 from './home/SvgSurvey1'
import SureyComponents from '../components'

class SurveySurvey extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 0,
      AnswerData: []
    };
    this._handleNext = this._handleNext.bind(this);
    this._handleRadioChange = this._handleRadioChange.bind(this);
  }
  _handleNext() {
    this.setState({ pageNo: this.state.pageNo + 1 });
  }

  _handleSubmit() {
    console.log("SUBMIT")
  }

  isQuesId(quesId) {
    return this.state.AnswerData.filter((e) => e.questionId === quesId);
  };
  isQuesIdIndex(quesId) {
    const quesIdIndex = this.state.AnswerData.findIndex(
      (e) => e.questionId === quesId && e.subQuestionId === null
    );
    return quesIdIndex;
  };

  subIsQuesId(quesId, subQuesId) {
    return this.state.AnswerData.filter(
      (e) => e.questionId === quesId && e.subQuestionId === subQuesId
    );
  };
  subIsQuesIdIndex(quesId, subQuesId) {
    return this.state.AnswerData.findIndex(
      (e) => e.questionId === quesId && e.subQuestionId === subQuesId
    );
  };
  _handleRadioChange(ansId, quesId, subQuesId, keys, other) {
    console.log("Radio Change")
    const RadioAns = {
      // ...Ans,
      optionChoiceId: ansId,
      questionId: quesId.toString(),
      subQuestionId: subQuesId || null,
      keyValue: keys || quesId,
      other: other,
    };

    if (subQuesId !== undefined) {
      if (this.subIsQuesId(quesId, subQuesId).length >= 1) {
        this.state.AnswerData.splice(this.subIsQuesIdIndex(quesId, subQuesId), 1, RadioAns);
      } else {
        this.setState({ AnswerData: this.state.AnswerData.concat(RadioAns) });
      }
    } else {
      if (this.isQuesId(quesId).length >= 1) {
        this.state.AnswerData.splice(this.isQuesIdIndex(quesId), 1, RadioAns);
      } else {
        setAnswerData(this.state.AnswerData.concat(RadioAns));
      }
    }
    setIsAnswer(this.state.AnswerData.map((v, k) => v.optionChoiceId));


  }

  render() {
    const topSpace = -230
    console.log("Sample Data ->", surveyData.length)
    console.log("PageNo->", this.state.pageNo)
    const section_question_data = surveyData[this.state.pageNo].questions;
    const Ans = {
      other: "",
      optionChoiceId: null,
      userId: parseInt(userId),
      questionId: null,
      survey_headers_id: parseInt(surveyHeaderId),
      building_id: buildingId,
      keyValue: null,
      subQuestionId: null,
      surveySectionId: parseInt(surveySectionId),
      countryId: parseInt(countryId),
      selected: false,
    };
    console.log("section Data->", section_question_data)
    return (
      <div className="is-size-1-mobile p*-0 m*-0">
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
        <div className="p-3 py-4" style={{ height: 90 }}></div>
        <div className="columns">
          <div className="column is-one-quarter">
            <SvgSurvey1 />
          </div>
          <div className="column is-gapless">
            <SurveyQuestionColCard
              questionData={section_question_data}
              _handleRadioChange={this._handleRadioChange}
            />
          </div>
          <div className="column is-one-quarter is-gapless is-align-self-flex-end" style={{ paddingLeft: '-50px', left: 0 }}>
            <SvgSurvey2 />
          </div>
        </div>
        <div className="is-size-5" align="center">
          {
            surveyData.length !== this.state.pageNo + 1 ?
              < SureyComponents.SurveyButton onClick={this._handleNext}>   Next  </SureyComponents.SurveyButton>
              : < SureyComponents.SurveyButton onClick={this._handleSubmit}>   Submit  </SureyComponents.SurveyButton>

          }
        </div>
      </div >
    );
  }
}
const PageTitle = () => {
  return (
    <div style={{ marginTop: 0.5, height: 90 }} className="columns is-centered is-vcentered">
      <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
        <div className="columns is-vcentered is-centered pr-5 mr-5">
          <div className=" column has-text-white is-centered" align="right">
            <div className="is-size-5 has-text-weight-bold mx-6 px-6 pt-6" >Vision</div>
            <div className="is-size-7 is-italic has-text-weight-bold mx-3">To be a Globally Remarkable Research based</div>
            <div className="is-size-7 is-italic has-text-weight-bold mx-6"> University and Cyber University</div>
          </div>
        </div>
      </div>
    </div>
  )
}


const SurveyQuestionColCard = (props) => {
  const { questionData, _handleRadioChange } = props
  return (
    <div className="p-3" style={{ fontFamily: "Roboto, sans-serif", font: "{font}.small", boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.2)" }}>
      <div className="is-flex-direction-row is-justify-content-center p-3">
        {questionData.map((ques, key) => {
          return (
            <div>
              <div className="mx-3 p-2"> {`${ques.question_id}.`}{ques.question_name}</div>
              <div>
                {
                  ques.input_type_id === 1 ?
                    (<div className=" p-2 pl-5 pb-3  mx-4" style={{ borderBottom: '0.1px solid', borderColor: '#ccc' }}>
                      <Input placeholder={`${ques.input_placeholder}`} />
                    </div>) :
                    ques.input_type_id === 2 ?
                      (
                        <div className=" pl-4 mx-3 " style={{ borderBottom: '0.1px solid', borderColor: '#ccc' }}>
                          <Radio
                            value={ques.option_choices}
                            _handleRadioChange={_handleRadioChange}
                          />
                        </div>
                      ) : (
                        <div className=" pl-4 mx-3 " style={{ borderBottom: '0.1px solid', borderColor: '#ccc' }}>
                          <RatingRage />
                        </div>
                      )
                }</div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

const questionData = [
  {
    "question_id": 1,
    "question_name": "What is your name? *",
    "input_type_id": 1,
    "option_group_id": 9,
    "key": null,
    "option_choices": [
      {
        "option_choice_id": null,
        "option_choice_name": null
      },

    ]
  },
  {
    "question_id": 2,
    "question_name": "Gender *",
    "input_type_id": 2,
    "option_group_id": 9,
    "key": null,
    "option_choices": [
      {
        "option_choice_id": 1,
        "option_choice_name": "Male"
      },
      {
        "option_choice_id": 2,
        "option_choice_name": "Female"
      },
    ]
  },
  {
    "question_id": 3,
    "question_name": "Email address *",
    "input_type_id": 1,
    "option_group_id": 9,
    "key": null,
    "option_choices": [
      {
        "option_choice_id": null,
        "option_choice_name": null
      }
    ]
  },
  {
    "question_id": 4,
    "question_name": "Graduated Year *",
    "input_type_id": 2,
    "option_group_id": 9,
    "key": null,
    "option_choices": [
      {
        "option_choice_id": 3,
        "option_choice_name": "2014-2015"
      },
      {
        "option_choice_id": 4,
        "option_choice_name": "2015-2016"
      },
      {
        "option_choice_id": 5,
        "option_choice_name": "2016-2017"
      },
      {
        "option_choice_id": 6,
        "option_choice_name": "2017-2018"
      },
      {
        "option_choice_id": 7,
        "option_choice_name": "2018-2019"
      }
    ]
  },
  {
    "question_id": 5,
    "question_name": "How satisfied with your current job?",
    "input_type_id": 3,
    "option_group_id": 9,
    "key": null,
    "option_choices": [
      {
        "option_choice_id": null,
        "option_choice_name": null
      },

    ]
  },
]
// *********Survey Question Next1***********//
const NextPageTitle1 = () => {
  return (
    <div style={{ marginTop: 0.5, height: 90 }} className="columns is-centered is-vcentered">
      <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
        <div className="columns is-vcentered is-centered pr-5 mr-5">
          <div className=" column has-text-white is-centered" align="right">
            <div className="is-size-4 has-text-weight-bold mx-6 pt-3">Mission</div>
            <div className="is-size-7 is-italic has-text-weight-bold pt-3">To provide skillfull engineers and outstanding researchers</div>
            <div className="is-size-7 is-italic has-text-weight-bold"> To create broad access of engineering</div>
            <div className="is-size-7 is-italic has-text-weight-bold"> education opportunities with smart learning</div>
            <div className="is-size-7 is-italic has-text-weight-bold"> To be a national/regional/global</div>
            <div className="is-size-7 is-italic has-text-weight-bold"> level high ranking university</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SurveyNextQuestionCol1 = () => {
  return (
    <div className="panel p-3">
      <div>7.Have you received others degrees ? * </div>
      <div className="row">
        <Radio type="radio" name="degrees" checked />Yes
                <Radio className="ml-5" type="radio" name="degrees" />No
            </div>
      <div className=" p-5">
        <Input placeholders="Please mention your degree" />
      </div>
      <div className="is-divider"></div>
      <div>8.Are you currently in the University/Collage ? *</div>
      <div className="row">
        <Radio type="radio" name="universityCollage" checked />Yes
                <Radio className="ml-5" type="radio" name="universityCollage" />No
            </div>
      <div className=" p-5">
        <Input placeholders="University/Collage Name" />
        <Input placeholders="Your current degree program" />
      </div>
      <div className="is-divider"></div>
      <div>9.Are you working now ? *</div>
      <div className="row">
        <Radio type="radio" name="workingNow" checked />Yes
                <Radio className="ml-5" type="radio" name="workingNow" />No
            </div>
      <div className="">
        <div> i.Which organization are you working for? *</div>
        <div className="pt-3 pl-5">
          <div className="row">
            <label className="radio pt-1">
              <input type="radio" name="organizationName" checked />
                                Government Staff
                        </label>
            <label className="radio pt-1">
              <input type="radio" name="organizationName" />
                                Compony
                        </label>
            <label className="radio pt-1">
              <input type="radio" name="organizationName" />
                            Own Business
                        </label>
            <label className="radio pt-1">
              <input type="radio" name="organizationName" />
                            Other
                        </label>
          </div>
        </div>
        <div className="is-divider p-3 pt-5"></div>
        {/************* QUESTION FOR GOVERNMENT STAFF **************** */}
        <div className="pt-3 pl-5">
          <div> Please fill the following: * </div>
          <div className="government-staff">
            <div className="p-5">
              <Input placeholders="Ministry Name"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Department Name"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Location"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Position"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Total months/year of experience"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Salary"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
          </div>
          {/* **************** QUESTION FOR COMPANY STAFF & For Next Button 2 ****************** */}
          <div className="company">
            <div className="p-5">
              <Input placeholders="Company Name"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Company Address"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Number of employee in your company(estimate)"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Total Months of Experience"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Monthly salary"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="p-5">
              <Input placeholders="Position"
                style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
            </div>
            <div className="px-3">
              <p>
                How likely is it that you would recommend this company
                to a friend or colleague ?
                      </p>
            </div>
            <div className="">
              <label>lowest</label>
              <div className="row">
                <Radio type="radio" name="lowHigh" />
                <Radio type="radio" name="lowHigh" />
                <Radio type="radio" name="lowHigh" checked />
                <Radio type="radio" name="lowHigh" />
                <Radio type="radio" name="lowHigh" />
              </div>
              <label>highest</label>
            </div>
          </div>
        </div>
        <div className="is-divider p-3 pt-5"></div>
        <div className="p-5 is-size-5 has-text-centered">
        </div>
      </div>
      <div className="is-divider p-3 pt-5"></div>
    </div>
  )
}

//*********** QUESTION FOR Next3 **************//
const NextPageTitle2 = () => {
  return (
    <div style={{ marginTop: 0.5, height: 90 }} className="columns is-centered is-vcentered">
      <div className="column is-four-fifths-desktop is-two-thirds-fullhd">
        <div className="columns is-vcentered is-centered pr-5 mr-5">
          <div className=" column has-text-white is-centered" align="right">
            <div className="is-size-4 has-text-weight-bold mx-6 pt-3">Motto</div>
            <div className="is-size-7 is-italic has-text-weight-bold pt-3">"Shpe and Bright Your Future At UTYCC"</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SurveyNextQuestionCol2 = () => {
  <div className="panel p-3">
    <div>10. How satisfied are you with your current job ? </div>
    <div className="panel-block">
      <label>lowest</label>
      <div className="row pl-5">
        <Radio type="radio" name="lowHigh1" />
        <Radio type="radio" name="lowHigh1" />
        <Radio type="radio" name="lowHigh1" checked />
        <Radio type="radio" name="lowHigh1" />
        <Radio type="radio" name="lowHigh1" />
      </div>
      <label>highest</label>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>11. How closely related is your current job to your degree major?</div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh2" />
        <Radio type="radio" name="lowHigh2" />
        <Radio type="radio" name="lowHigh2" checked />
        <Radio type="radio" name="lowHigh2" />
        <Radio type="radio" name="lowHigh2" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>12.The program studied in your university coverage in your professional life.</div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh3" />
        <Radio type="radio" name="lowHigh3" />
        <Radio type="radio" name="lowHigh3" checked />
        <Radio type="radio" name="lowHigh3" />
        <Radio type="radio" name="lowHigh3" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>13.How useful were the activities(projects, mini-thesis, field trip) in helping you with your current job ? </div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh4" />
        <Radio type="radio" name="lowHigh4" />
        <Radio type="radio" name="lowHigh4" checked />
        <Radio type="radio" name="lowHigh4" />
        <Radio type="radio" name="lowHigh4" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>14. Do you think that the degree of UTYCC is an important factor to increase employability ? </div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh5" />
        <Radio type="radio" name="lowHigh5" />
        <Radio type="radio" name="lowHigh5" checked />
        <Radio type="radio" name="lowHigh5" />
        <Radio type="radio" name="lowHigh5" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>15. Based on your experience as a student, rate the performance of the Department of information Science. </div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh6" />
        <Radio type="radio" name="lowHigh6" />
        <Radio type="radio" name="lowHigh6" checked />
        <Radio type="radio" name="lowHigh6" />
        <Radio type="radio" name="lowHigh6" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>16. How good do you think about the facilities UTYCC provides? </div>
      <div className="row pl-5">
        <label>lowest</label>
        <Radio type="radio" name="lowHigh7" />
        <Radio type="radio" name="lowHigh7" />
        <Radio type="radio" name="lowHigh7" checked />
        <Radio type="radio" name="lowHigh7" />
        <Radio type="radio" name="lowHigh7" />
        <label>highest</label>
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>17. What are your thoughts of the teaching system of UTYCC ?</div>
      <div className="p-5">
        <Input placeholders="your answer here"
          style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>18. Please give suggestion to improve our University.</div>
      <div className="p-5">
        <Input placeholders="your answer here"
          style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
    <div className="panel-block">
      <div>19. Any advice for juniors ?</div>
      <div className="p-5">
        <Input placeholders="your answer here"
          style={{ borderTopStyle: 'none', borderRightStyle: 'none', borderLeftStyle: 'none' }} />
      </div>
    </div>
    <div className="is-divider p-3 pt-5"></div>
  </div>
}
// ********* BUTTON FOR SUBMIT ALL QUESTIONS *********** //
const SubmitAllQuestions = () => {
  return (
    <div className="is-right">
      <div className="is-size-5" align="center">
        <SureyComponents.SurveyButton onClick={() => this.props.history.push('/result')}>   Submit  </SureyComponents.SurveyButton>
      </div>
    </div>
  )
}

export default withRouter(SurveySurvey);
