import type { LegendPayload } from "recharts";

interface ChartDataItem {
  name: string;
  value: number;
  color: string;
}

interface ReChartLegendProps {
  payload?: readonly LegendPayload[];
  chartData: ChartDataItem[];
}

export function ReChartLegend({ payload, chartData }: ReChartLegendProps) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {payload?.map((entry, index) => {
        const name =
          entry.payload &&
          typeof entry.payload === "object" &&
          "name" in entry.payload
            ? (entry.payload.name as string) // här säger vi till TS att det är en string
            : "Unknown";

        const color =
          chartData.find((d) => d.name === name)?.color ??
          "rgba(255,255,255,1)";

        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              margin: "4px 8px",
              fontFamily: "orbitron",
              fontSize: 16,
              color: "white",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                backgroundColor: color,
                marginRight: 6,
              }}
            />
            {name} {/* nu är TypeScript nöjd */}
          </div>
        );
      })}
    </div>
  );
}
