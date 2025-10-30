import { ResponsiveContainer, XAxis, YAxis, Line, LineChart } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'

type LineChartContainerProps = {
  dataKey: string
  xAxisDataKey: string
  data: any[]
  chartConfig: ChartConfig
}

export const LineChartContainer = ({
  dataKey,
  xAxisDataKey,
  data,
  chartConfig,
}: LineChartContainerProps) => (
  <ResponsiveContainer className={'w-full h-full'}>
    <ChartContainer config={chartConfig} className="min-h-[230px] w-full">
      <LineChart data={data}>
        <XAxis
          dataKey={xAxisDataKey}
          tickLine={false}
          tickMargin={5}
          axisLine={true}
          padding={{ left: 30, right: 30 }}
        />
        <YAxis padding={{ bottom: 30, top: 30 }} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey={dataKey}
          activeDot={{
            r: 6,
            style: { fill: 'var(--primary)', opacity: 0.25 },
          }}
          style={
            {
              stroke: `hsl(var(--primary))`,
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ChartContainer>
  </ResponsiveContainer>
)
