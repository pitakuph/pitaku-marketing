import { ChartConfig } from '../ui/chart'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { RedemptionChartData } from '@/types/types'
import { BarChartContainer } from './BarChartContainer'
import { RedemptionStatisticsList } from '@/types/schema'
import { toMMMddString } from '@/lib/DateFormattingUtils'

const chartConfig = {
  quantity: {
    label: 'Quantity',
    color: '#2563eb',
  },
} satisfies ChartConfig

type RedemptionChartCardProps = {
  redemptionCount: number
  redemptionList: RedemptionStatisticsList
  dateLabels: string[]
}

export const RedemptionChartCard = ({
  redemptionCount,
  redemptionList,
  dateLabels,
}: RedemptionChartCardProps) => {
  const redemptionData = dateLabels?.map((dateLabel: string) => {
    const redemption = redemptionList?.find(
      (redemption) => redemption.date === dateLabel,
    )
    return {
      date: toMMMddString(dateLabel),
      quantity: redemption ? redemption.quantity : 0,
    } as RedemptionChartData
  })

  return (
    <Card>
      <CardHeader className="flex flex-col space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Redemptions</CardTitle>
        <CardDescription>
          <label className="text-2xl font-bold">{redemptionCount}</label>
          <label className="text-xs ml-2 text-muted-foreground">
            for the last 7 days
          </label>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BarChartContainer
          dataKey="quantity"
          xAxisDataKey="date"
          data={redemptionData}
          chartConfig={chartConfig}
        />
      </CardContent>
    </Card>
  )
}
