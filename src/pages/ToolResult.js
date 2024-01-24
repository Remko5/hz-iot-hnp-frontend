import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ToolResult({results}) {
  const resultsWrapperStyle = {
    width: "70vw",
    height: "76vh",
    margin: "5vw 0vw 0vw 15vw",
    border: "2px solid black",
    borderRadius: "5px",
  };

  var aiResults = [
    results['p1_certainty'],
    results['p2_variation'],
    results['p3_connection'],
    results['p4_significance'],
    results['p5_contribution'],
    results['p6_growth']
  ];

  // Data for chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Test chart'
      },
    },
  };

  const labels = ["Zekerheid", "Variatie", "Verbondenheid", "Speciaal", "Betrokken", "Groei"];

  const data = {
    labels,
    datasets: [
      {
        label: "Optimale waarden",
        data: [40, 25, 15, 10, 6, 4],
        backgroundColor: "rgba(47,47,48,1)",
      },
      {
        label: "AI waarden",
        data: aiResults,
        backgroundColor: "rgba(47,47,48,0.55)",
      },
    ],
  };
  
  return (
    <>
      <div className="results-wrapper" style={resultsWrapperStyle}>
        <h2 style={{textAlign: "center"}}>Resultaten</h2>
        <Bar options={options} data={data} style={{marginLeft: "2.5%"}} />
      </div>
    </>
  );
};
  
  export default ToolResult;
