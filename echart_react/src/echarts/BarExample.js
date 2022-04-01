import ReactECharts from "echarts-for-react";

const BarExample = () => {
  const barChartOptions = {
    title: {
      text: 'Basic fuck you',
      subtext: 'Fake Data',
      left: 'center'
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={barChartOptions} theme="dark" />;
};

export default BarExample;
