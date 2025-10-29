import mongoose, { Schema, Document, Model } from 'mongoose'

export enum Role {
  ADMIN = 'ADMIN',
  MERCHANT = 'MERCHANT',
  CUSTOMER = 'CUSTOMER',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export interface IUser extends Document {
  email: string
  username: string
  firstName?: string
  lastName?: string
  password: string
  role: Role
  status: Status
  createdAt?: Date
  updatedAt?: Date
}

const UserSchema: Schema<IUser> = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.CUSTOMER },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.ACTIVE,
    },
  },
  { timestamps: true, discriminatorKey: 'user_group' },
)

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema)
