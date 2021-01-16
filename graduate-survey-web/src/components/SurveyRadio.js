import React from "react"

const SurveyRadio = props => {
    const { onChange, type, name, value, checked, _handleRadioChange, quesId, keys, subQuesId,ans_data } = props
    return (
        value.map((answer, k) => {
            return (
                <div className="column" key={k}>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={answer.option_choice_name}
                            checked={
                                checked ||
                                ans_data.filter(
                                    (d) =>
                                        d.optionChoiceId === answer.option_choice_id &&
                                        (d.subQuestionId == null
                                            ? d.questionId === quesId || d.subQuestionId === subQuesId
                                            : d.subQuestionId == subQuesId)
                                ).length > 0
                            }
                            onChange={() => _handleRadioChange(
                                answer.option_choice_id,
                                quesId,
                                subQuesId,
                                keys
                            )}
                        />
                        <span>{answer.option_choice_name}</span>
                    </label>
                </div>
            )
        })
    )
}

export default SurveyRadio