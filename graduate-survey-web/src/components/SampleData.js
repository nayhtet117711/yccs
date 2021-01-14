const SampleData = [
    {
        "survey_section_id": 1,
        "section_name": "section_1",
        "questions": [
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
                "question_name": "Degree Level *",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 8,
                        "option_choice_name": "Bachelor Programme(B.E)"
                    },
                    {
                        "option_choice_id": 9,
                        "option_choice_name": "Master Programme(M.E)"
                    },
                    {
                        "option_choice_id": 10,
                        "option_choice_name": "Doctorate Programme(Ph.D)"
                    }
                ]
            },
            {
                "question_id": 6,
                "question_name": "Major (or Department) *",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 11,
                        "option_choice_name": "Information Science and Technology"
                    },
                    {
                        "option_choice_id": 12,
                        "option_choice_name": "Computer Engineering"
                    },
                    {
                        "option_choice_id": 13,
                        "option_choice_name": "Electronics"
                    },
                    {
                        "option_choice_id": 14,
                        "option_choice_name": "Materials and Metallurgy"
                    },
                    {
                        "option_choice_id": 15,
                        "option_choice_name": "Mechanical Precision and Automation"
                    }
                ]
            }
        ],
    },
    {
        "survey_section_id": 2,
        "section_name": "section_2",
        "questions": [
            {
                "question_id": 7,
                "question_name": "Have you received other degrees? *",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 16,
                        "option_choice_name": "Yes"
                    },
                    {
                        "option_choice_id": 17,
                        "option_choice_name": "No"
                    },
                ],
                "sub_questions": [{
                    "sub_question_id": 1,
                    "sub_question_name": "Please mention your degree",
                    "input_type_id": 1,
                    "input_placeholder": "Please mention your degree",
                    "option_choices": []
                },]
            },
            {
                "question_id": 8,
                "question_name": "Are you currently in the University/College?",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 18,
                        "option_choice_name": "Yes",
                        "sub_question": [{
                            "input_type_id": 1,
                            "sub_question_name": "University/College Name"
                        },
                        {
                            "input_type_id": 1,
                            "sub_question_name": "Your current degree program"
                        },
                        ]

                    },
                    {
                        "option_choice_id": 19,
                        "option_choice_name": "No"
                    }
                ]
            },
            {
                "question_id": 9,
                "question_name": "Are you working now?",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 20,
                        "option_choice_name": "Yes",
                        "sub_question": [{
                            "input_type_id": 2,
                            "sub_option_choices": [
                                {
                                    "sub_option_id": 1,
                                    "sub_option_name": "Government Staff",

                                },
                                {
                                    "sub_option_id": 2,
                                    "sub_option_name": "Company"
                                },
                                {
                                    "sub_option_id": 3,
                                    "sub_option_name": "Own Business"
                                },
                                {
                                    "sub_option_id": 4,
                                    "sub_option_name": "Other"
                                }
                            ]
                        }]
                    },
                    {
                        "option_choice_id": 21,
                        "option_choice_name": "No"
                    },

                ]
            },

        ],
    },
    {
        "survey_section_id": 3,
        "section_name": "section_3",
        "questions": [
            {
                "question_id": 10,
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
            {
                "question_id": 11,
                "question_name": "How closely related is your current job to your degree major?",
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
            {
                "question_id": 12,
                "question_name": "The program studied in your university coverage in your professional life?",
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
            {
                "question_id": 13,
                "question_name": "How useful were the activities(projects, mini-thesis,field trip) in helping you with your current job?",
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
            {
                "question_id": 14,
                "question_name": "Do you think that the degree of UTYCC is an important factor to increase employability?",
                "input_type_id": 2,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": 22,
                        "option_choice_name": "Yes"
                    },
                    {
                        "option_choice_id": 23,
                        "option_choice_name": "No"
                    }
                ]
            },
            {
                "question_id": 15,
                "question_name": "Based on your experience as a student, rate the performance of the Department of Information Science.",
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
            {
                "question_id": 16,
                "question_name": "How good do you think about the facilities UTYCC provides?",
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
            {
                "question_id": 17,
                "question_name": "What are your thoughts of the teaching system of UTYCC?",
                "input_type_id": 4,
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
                "question_id": 18,
                "question_name": "Please give suggetions to improve our University.",
                "input_type_id": 4,
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
                "question_id": 19,
                "question_name": "Any advice for juniors?",
                "input_type_id": 4,
                "option_group_id": 9,
                "key": null,
                "option_choices": [
                    {
                        "option_choice_id": null,
                        "option_choice_name": null
                    },

                ]
            },
        ],
    },
]

export default SampleData