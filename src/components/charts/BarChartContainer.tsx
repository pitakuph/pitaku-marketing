import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
} from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'

type BarChartContainerProps = {
  dataKey: string
  xAxisDataKey: string
  data: any[]
  chartConfig: ChartConfig
}

export const BarChartContainer = ({
  dataKey,
  xAxisDataKey,
  data,
  chartConfig,
}: BarChartContainerProps) => (
  <ResponsiveContainer className={'w-full h-full'}>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={xAxisDataKey}
          tickLine={false}
          tickMargin={5}
          axisLine={false}
          padding={{ left: 10, right: 10 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey={dataKey}
          style={
            {
              fill: 'hsl(var(--primary))',
              opacity: 1,
            } as React.CSSProperties
          }
          radius={4}
          barSize={30}
        />
      </BarChart>
    </ChartContainer>
  </ResponsiveContainer>
)
