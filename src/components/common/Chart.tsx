import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChartProps {
  type: "line" | "bar";
  data: any[];
  dataKey: string;
  colors: string[];
}

export const Chart = ({ type, data, dataKey, colors }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {type === "line" ? (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          {colors.map((color, idx) => (
            <Line key={idx} type="monotone" dataKey={dataKey[idx]} stroke={color} />
          ))}
        </LineChart>
      ) : (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          {colors.map((color, idx) => (
            <Bar key={idx} dataKey={dataKey[idx]} fill={color} />
          ))}
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};
