import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 194,
      },
      {
        x: "helicopter",
        y: 89,
      },
      {
        x: "boat",
        y: 99,
      },
      {
        x: "train",
        y: 138,
      },
      {
        x: "subway",
        y: 265,
      },
      {
        x: "bus",
        y: 158,
      },
      {
        x: "car",
        y: 60,
      },
    ],
  },
];

export function Line() {
  const theme = {
    background: "var(--bg-shadow-dark)",
    textColor: "var(--font)",
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: "var(--border-color)",
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 13,
          fill: "var(--font)",
        },
      },
      ticks: {
        line: {
          stroke: "var(--border-color)",
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: "var(--font-dark)",
        },
      },
    },
    grid: {
      line: {
        stroke: "var(--border-color)",
        strokeWidth: 1,
      },
    },
  };
  return (
    <ResponsiveLine
      theme={theme}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "LOSOWANIE",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "WYSTĄPIENIE",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "purple_blue" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "var(--font)",
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
