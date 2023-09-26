import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  
  const dataPointValues = props.dataPoints.map(x => x.value);
  const totalMaximum = Math.max(...dataPointValues);
  console.log("valore massimo dell'anno = "+ totalMaximum);

  return (
      <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
      </div>
  );
}

export default Chart;
