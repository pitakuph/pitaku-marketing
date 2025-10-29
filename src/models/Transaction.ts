import mongoose, { Document, Schema, model, models } from 'mongoose'

export interface ITransaction extends Document {
  reference: string
  merchant: mongoose.Types.ObjectId
  customer: mongoose.Types.ObjectId
  amount: number
  earnedPoints: number
  notes?: string
  voided: boolean
  createdAt: Date
  updatedAt: Date
}

const TransactionSchema = new Schema<ITransaction>(
  {
    reference: {
      type: String,
      unique: true,
      required: true,
    },
    merchant: {
      type: Schema.Types.ObjectId,
      ref: 'Merchant',
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    earnedPoints: {
      type: Number,
      default: 0,
    },
    notes: {
      type: String,
    },
    voided: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

const Transaction =
  models.Transaction || model<ITransaction>('Transaction', TransactionSchema)

export default Transaction
