import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from './heatmap.json';

const Heatmap = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const sectors = data.response_content.sectorName;
      const symbols = data.response_content.stockSymbol;
      const percentChanges = data.response_content.percentChange;

      const chartOptions = {
        chart: {
          type: 'heatmap',
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
        },
        title: {
          text: 'Stock Percent Change Heatmap'
        },
        xAxis: {
          categories: sectors,
          title: 'Sector Name'
        },
        yAxis: {
          categories: symbols,
          title: 'Stock Symbol'
        },
        colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
          name: 'Percent Change',
          borderWidth: 1,
          data: symbols.flatMap((symbol, index) => sectors.map((sector, idx) => ({
            x: idx,
            y: index,
            value: percentChanges[index * sectors.length + idx] // Adjusting the index to match data
          }))),
          dataLabels: {
            enabled: true,
            color: '#000000'
          }
        }]
      };

      chartRef.current.chart.update(chartOptions);
    }
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={{}} ref={chartRef} />
    </div>
  );
};

export default Heatmap;
