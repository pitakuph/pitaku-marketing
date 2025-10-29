import { monetary } from '@/lib/CurrencyUtils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../ui/card'
import { ChartConfig } from '../ui/chart'
import { TransactionChartData } from '@/types/types'
import { LineChartContainer } from './LineChartContainer'
import { TransactionStatisticsList } from '@/types/schema'
import { toMMMddString } from '@/lib/DateFormattingUtils'

const chartConfig = {
  amount: {
    label: 'Amount',
    color: '#2563eb',
  },
} satisfies ChartConfig

type TransactionChartCardProps = {
  transactionAmount: number
  transactionList: TransactionStatisticsList
  dateLabels: string[]
}

export const TransactionChartCard = ({
  transactionAmount,
  transactionList,
  dateLabels,
}: TransactionChartCardProps) => {
  const transactionData = dateLabels?.map((dateLabel: string) => {
    const transaction = transactionList?.find(
      (transaction) => transaction.date === dateLabel,
    )
    return {
      date: toMMMddString(dateLabel),
      amount: transaction ? transaction.amount : 0,
    } as TransactionChartData
  })

  return (
    <Card>
      <CardHeader className="flex flex-col space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Transactions</CardTitle>
        <CardDescription>
          <label className="text-2xl font-bold">
            {monetary('PHP', transactionAmount)}
          </label>
          <label className="text-xs ml-2 text-muted-foreground">
            for the last 7 days
          </label>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LineChartContainer
          dataKey="amount"
          xAxisDataKey="date"
          data={transactionData}
          chartConfig={chartConfig}
        />
      </CardContent>
    </Card>
  )
}
