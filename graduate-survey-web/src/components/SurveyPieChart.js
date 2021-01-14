import React from "react"
import { ResponsivePie } from '@nivo/pie'
const SurveyPieChart = props => {
    // const { data } = props
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ datum: 'data.color' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={-3}
            radialLabelsLinkDiagonalLength={22}
            radialLabelsLinkHorizontalLength={0}
            radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default SurveyPieChart

const data = [
    {
        "id": "Male",
        "label": "Male",
        "value": 927,
        "color": "blue"
    },
    {
        "id": "Female",
        "label": "Female",
        "value": 1073,
        "color": "purple"
    },
]