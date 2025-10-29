// import mongoose, { Schema, Document, Model } from "mongoose";

// // --- ENUMS (mirror your Java enums) ---
// export enum AgeRange {
//   BELOW_18 = "BELOW_18",
//   AGE_18_24 = "AGE_18_24",
//   AGE_25_34 = "AGE_25_34",
//   AGE_35_44 = "AGE_35_44",
//   AGE_45_54 = "AGE_45_54",
//   AGE_55_64 = "AGE_55_64",
//   ABOVE_65 = "ABOVE_65",
// }

// export enum BirthMonth {
//   JANUARY = "JANUARY",
//   FEBRUARY = "FEBRUARY",
//   MARCH = "MARCH",
//   APRIL = "APRIL",
//   MAY = "MAY",
//   JUNE = "JUNE",
//   JULY = "JULY",
//   AUGUST = "AUGUST",
//   SEPTEMBER = "SEPTEMBER",
//   OCTOBER = "OCTOBER",
//   NOVEMBER = "NOVEMBER",
//   DECEMBER = "DECEMBER",
// }

// export enum RewardType {
//   BASIC = "BASIC",
//   PREMIUM = "PREMIUM",
//   VIP = "VIP",
// }

// export enum Gender {
//   MALE = "MALE",
//   FEMALE = "FEMALE",
//   OTHER = "OTHER",
//   UNSPECIFIED = "UNSPECIFIED",
// }

// // --- INTERFACE ---
// export interface ICustomer extends Document {
//   name?: string; // inherited from User (not shown but assumed)
//   email?: string;
//   password?: string;
//   mobile?: string;
//   ageRange?: AgeRange;
//   birthMonth?: BirthMonth;
//   rewardType?: RewardType;
//   dateOfBirth?: string;
//   age?: number;
//   gender?: Gender;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// // --- SCHEMA ---
// const CustomerSchema: Schema<ICustomer> = new Schema(
//   {
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
//     mobile: { type: String },
//     ageRange: { type: String, enum: Object.values(AgeRange) },
//     birthMonth: { type: String, enum: Object.values(BirthMonth) },
//     rewardType: { type: String, enum: Object.values(RewardType) },
//     dateOfBirth: { type: Date },
//     age: { type: Number },
//     gender: { type: String, enum: Object.values(Gender) },
//   },
//   { timestamps: true }
// );

// export const Customer: Model<ICustomer> =
//   mongoose.models.Customer || mongoose.model<ICustomer>("Customer", CustomerSchema);

import mongoose, { Schema, Document, Model } from 'mongoose'
import { User, IUser } from './User'

// Enums from before (AgeRange, BirthMonth, RewardType, Gender)
export enum AgeRange {
  BELOW_18 = 'BELOW_18',
  AGE_18_24 = 'AGE_18_24',
  AGE_25_34 = 'AGE_25_34',
  AGE_35_44 = 'AGE_35_44',
  AGE_45_54 = 'AGE_45_54',
  AGE_55_64 = 'AGE_55_64',
  ABOVE_65 = 'ABOVE_65',
}

export enum BirthMonth {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}

export enum RewardType {
  BASIC = 'BASIC',
  PREMIUM = 'PREMIUM',
  VIP = 'VIP',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  UNSPECIFIED = 'UNSPECIFIED',
}

export interface ICustomer extends IUser {
  mobile?: string
  ageRange?: AgeRange
  birthMonth?: BirthMonth
  rewardType?: RewardType
  dateOfBirth?: string
  age?: number
  gender?: Gender
}

const CustomerSchema = new Schema<ICustomer>({
  mobile: { type: String },
  ageRange: { type: String, enum: Object.values(AgeRange) },
  birthMonth: { type: String, enum: Object.values(BirthMonth) },
  rewardType: { type: String, enum: Object.values(RewardType) },
  dateOfBirth: { type: Date },
  age: { type: Number },
  gender: { type: String, enum: Object.values(Gender) },
})

export const Customer: Model<ICustomer> =
  mongoose.models.Customer ||
  User.discriminator<ICustomer>('Customer', CustomerSchema)
