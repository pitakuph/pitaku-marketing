import mongoose, { Schema, Document, Model } from 'mongoose'

export enum PointBasis {
  AMOUNT = 'AMOUNT',
  QUANTITY = 'QUANTITY',
}

export enum Currency {
  PHP = 'PHP',
  USD = 'USD',
  EUR = 'EUR',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export interface IMerchant extends Document {
  name: string
  address: string
  mobile?: string
  email?: string
  phone?: string
  pointBasis: PointBasis
  basePoint: number
  currency: Currency
  slug?: string
  logoUrl?: string
  about?: string
  status?: Status
  createdAt?: Date
  updatedAt?: Date
}

const MerchantSchema: Schema<IMerchant> = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    mobile: String,
    email: String,
    phone: String,
    pointBasis: {
      type: String,
      enum: Object.values(PointBasis),
      default: PointBasis.AMOUNT,
    },
    basePoint: { type: Number, default: 50.0 },
    currency: {
      type: String,
      enum: Object.values(Currency),
      default: Currency.PHP,
    },
    slug: String,
    logoUrl: String,
    about: String,
    status: { type: String, enum: Object.values(Status) },
  },
  { timestamps: true },
)

export const Merchant: Model<IMerchant> =
  mongoose.models.Merchant ||
  mongoose.model<IMerchant>('Merchant', MerchantSchema)
