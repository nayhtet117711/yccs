import React from "react"
import { ResponsivePie } from "@nivo/pie"

const SurveyPieChart = props => {
    const { data, isLegend } = props
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={0.5}
            colors={{ datum: 'data.color' }}
            borderWidth={0.1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabel="value"
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={-3}
            radialLabelsLinkDiagonalLength={22}
            radialLabelsLinkHorizontalLength={0}
            radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
            enableSliceLabels={false}
            sliceLabelsSkipAngle={8}
            sliceLabelsTextColor="#333333"

            legends={isLegend ? [
                {
                    anchor: 'right',
                    direction: 'column',
                    justify: false,
                    translateX: 28,
                    translateY: 32,
                    itemsSpacing: 0,
                    itemWidth: 80,
                    itemHeight: 32,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ] : []}
        />
    )
}


export default SurveyPieChart;

