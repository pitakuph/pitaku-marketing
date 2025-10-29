import mongoose, { Schema, Document, models } from 'mongoose'
import type { IMerchant } from './Merchant'

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}

export interface IReward extends Document {
  merchant: mongoose.Types.ObjectId | IMerchant
  name: string
  description?: string
  requiredPoints: number
  cap?: number
  notes?: string
  startDate?: Date
  endDate?: Date
  status: Status
  createdAt?: Date
  updatedAt?: Date
}

const RewardSchema = new Schema<IReward>(
  {
    merchant: {
      type: Schema.Types.ObjectId,
      ref: 'Merchant',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    requiredPoints: {
      type: Number,
      default: 1.0,
    },
    cap: {
      type: Number,
    },
    notes: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.ACTIVE,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
)

export const Reward =
  mongoose.models.Reward || mongoose.model<IReward>('Reward', RewardSchema)
