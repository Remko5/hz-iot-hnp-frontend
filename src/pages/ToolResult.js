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

const ToolResult = () => {
  const resultsWrapperStyle = {
    width: "70vw",
    height: "73vh",
    margin: "5vw 0vw 0vw 15vw",
    border: "2px solid black",
  };

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
        data: [43, 20, 16, 9, 4, 8], // TODO: waarden halen uit API-call
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