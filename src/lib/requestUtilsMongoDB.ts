import { MongoClient, Db, ObjectId } from 'mongodb'
import crypto from 'crypto'

import {
  AuthToken,
  CustomerReward,
  CustomerRewardsList,
  Merchant,
  MerchantStatistics,
  Redemption,
  RedemptionsList,
  Reward,
  RewardsList,
  Transaction,
  TransactionsList,
  User,
  UsersList,
} from '@/types/schema'
import {
  AuthCredentials,
  CustomerCreateParams,
  MerchantRequestParams,
  RedemptionCreateParams,
  RewardRequestParams,
  TransactionCreateParams,
  UserRequestParams,
  SignUpData,
} from '@/types/types'

const MONGODB_URI: any = process.env.MONGODB_URI
const DB_NAME: any = process.env.DB_NAME

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in your environment variables')
}

let clientPromise: Promise<MongoClient> | null = null

async function getClient(): Promise<MongoClient> {
  if (!clientPromise) {
    clientPromise = MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any)
  }
  return clientPromise
}

async function getDb(): Promise<Db> {
  const client = await getClient()
  console.log('Connected to MongoDB:', client)
  console.log('Connected to MongoDB:', DB_NAME)
  return client.db(DB_NAME)
}

export function getStoredToken(): string | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('userAccessToken')
  }
  return null
}

async function generateToken(): Promise<string> {
  if ((crypto as any).randomUUID) return (crypto as any).randomUUID()
  return crypto.randomBytes(32).toString('hex')
}

export async function login(credentials: AuthCredentials) {
  const db = await getDb()
  const users = db.collection('users')

  const user = await users.findOne({
    $or: [{ email: credentials.username }, { username: credentials.username }],
    password: credentials.password,
  })

  if (!user) {
    return Promise.reject(new Error('Invalid credentials'))
  }

  const token = await generateToken()
  const tokens = db.collection('tokens')
  await tokens.insertOne({
    token,
    userId: user._id,
    createdAt: new Date(),
  })

  const authToken: AuthToken = { accessToken: token } as any

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('userAccessToken', token)
  }

  return Promise.resolve(authToken)
}

/**CREATE/SIGN UP MERCHANT ACCOUNT */
export async function signup(signUpData: SignUpData) {
  const db = await getDb()
  const merchants = db.collection('merchants')
  const result = await merchants.insertOne({
    ...signUpData,
    createdAt: new Date(),
    status: 'pending',
  })
  const merchant: any = await merchants.findOne({ _id: result.insertedId })
  return merchant as Merchant
}

export async function activateMerchant({ merchantId }: any) {
  const db = await getDb()
  const merchants = db.collection('merchants')
  const res: any = await merchants.findOneAndUpdate(
    {
      _id:
        typeof merchantId === 'string' ? new ObjectId(merchantId) : merchantId,
    },
    { $set: { status: 'active', activatedAt: new Date() } },
    { returnDocument: 'after' },
  )
  return res.value as Merchant
}

export async function logout() {
  const token = getStoredToken()
  if (token) {
    const db = await getDb()
    const tokens = db.collection('tokens')
    await tokens.deleteMany({ token })
  }
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.clear()
  }
  return Promise.resolve()
}

// called when the user request to reset password
export async function requestResetPassword(email: string) {
  const db = await getDb()
  const users = db.collection('users')
  const user = await users.findOne({ email })
  if (!user) return Promise.reject(new Error('User not found'))

  const resetToken = await generateToken()
  const resets = db.collection('password_resets')
  await resets.insertOne({
    userId: user._id,
    token: resetToken,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
  })

  return { message: 'reset requested', token: resetToken }
}

/** POST */

export async function postTransaction({
  merchantId,
  data,
}: TransactionCreateParams) {
  const db = await getDb()
  const transactions = db.collection('transactions')
  const doc = {
    ...data,
    merchantId,
    createdDate: new Date(),
  }
  const res = await transactions.insertOne(doc)
  const transaction: any = await transactions.findOne({ _id: res.insertedId })
  return transaction as Transaction
}

export async function postRedemption({
  merchantId,
  data,
}: RedemptionCreateParams) {
  const db = await getDb()
  const redemptions = db.collection('redemptions')
  const doc = {
    ...data,
    merchantId,
    createdDate: new Date(),
  }
  const res = await redemptions.insertOne(doc)
  const redemption: any = await redemptions.findOne({ _id: res.insertedId })
  return redemption as Redemption
}

export async function postCustomer({ merchantId, data }: CustomerCreateParams) {
  const db = await getDb()
  const customers = db.collection('customers')
  const doc = {
    ...data,
    merchantId,
    createdAt: new Date(),
  }
  const res = await customers.insertOne(doc)
  const customer: any = await customers.findOne({ _id: res.insertedId })
  return customer as User
}

export async function postReward({ merchantId, data }: RewardRequestParams) {
  const db = await getDb()
  const rewards = db.collection('rewards')
  const doc = {
    ...data,
    merchantId,
    createdAt: new Date(),
  }
  const res = await rewards.insertOne(doc)
  const reward: any = await rewards.findOne({ _id: res.insertedId })
  return reward as Reward
}

export async function postOperator({ merchantId, data }: UserRequestParams) {
  const db = await getDb()
  const operators = db.collection('operators')
  const doc = {
    ...data,
    merchantId,
    createdAt: new Date(),
    active: true,
  }
  const res = await operators.insertOne(doc)
  const operator: any = await operators.findOne({ _id: res.insertedId })
  return operator as User
}

export async function activateOperator({
  merchantId,
  userId,
}: UserRequestParams) {
  const db = await getDb()
  const operators: any = db.collection('operators')
  const res: any = await operators.findOneAndUpdate(
    {
      _id: typeof userId === 'string' ? new ObjectId(userId) : userId,
      merchantId,
    },
    { $set: { active: true } },
    { returnDocument: 'after' },
  )
  return res.value as User
}

export async function deactivateOperator({
  merchantId,
  userId,
}: UserRequestParams) {
  const db = await getDb()
  const operators: any = db.collection('operators')
  const res = await operators.findOneAndUpdate(
    {
      _id: typeof userId === 'string' ? new ObjectId(userId) : userId,
      merchantId,
    },
    { $set: { active: false } },
    { returnDocument: 'after' },
  )
  return res.value as User
}

/** PUT */

export async function putOperator({
  merchantId,
  userId,
  data,
}: UserRequestParams) {
  const db = await getDb()
  const operators: any = db.collection('operators')
  const res = await operators.findOneAndUpdate(
    {
      _id: typeof userId === 'string' ? new ObjectId(userId) : userId,
      merchantId,
    },
    { $set: data },
    { returnDocument: 'after' },
  )
  return res.value as User
}

export async function putReward({
  merchantId,
  rewardId,
  data,
}: RewardRequestParams) {
  const db = await getDb()
  const rewards: any = db.collection('rewards')
  const res = await rewards.findOneAndUpdate(
    {
      _id: typeof rewardId === 'string' ? new ObjectId(rewardId) : rewardId,
      merchantId,
    },
    { $set: data },
    { returnDocument: 'after' },
  )
  return res.value as Reward
}

export async function putMerchant({ merchantId, data }: MerchantRequestParams) {
  const db = await getDb()
  const merchants: any = db.collection('merchants')
  const res = await merchants.findOneAndUpdate(
    {
      _id:
        typeof merchantId === 'string' ? new ObjectId(merchantId) : merchantId,
    },
    { $set: data },
    { returnDocument: 'after' },
  )
  return res.value as Merchant
}

/** GET */

export async function getMe() {
  const token = getStoredToken()
  if (!token) {
    if (typeof window !== 'undefined') {
      localStorage.clear()
      window.location.replace('/login')
    }
    return Promise.reject(new Error('No token'))
  }
  const db = await getDb()
  const tokens = db.collection('tokens')
  const tokenDoc = await tokens.findOne({ token })
  if (!tokenDoc) {
    if (typeof window !== 'undefined') {
      localStorage.clear()
      window.location.replace('/login')
    }
    return Promise.reject(new Error('Invalid token'))
  }
  const users = db.collection('users')
  const user: any = await users.findOne({ _id: tokenDoc.userId })
  if (!user) return Promise.reject(new Error('User not found'))
  return user as User
}

export async function getMerchantRewards(merchantId: string) {
  const db = await getDb()
  const rewards = db.collection('rewards')
  const docs: any = await rewards.find({ merchantId }).toArray()
  return { items: docs } as RewardsList
}

export async function getMerchantTransactions(merchantId: string) {
  const db = await getDb()
  const transactions = db.collection('transactions')
  const docs: any = await transactions
    .find({ merchant: merchantId })
    .sort({ createdDate: -1 })
    .limit(1000)
    .toArray()
  return { items: docs } as TransactionsList
}

export async function getMerchantRedemptions(merchantId: string) {
  const db = await getDb()
  const redemptions = db.collection('redemptions')
  const docs: any = await redemptions
    .find({ merchantId })
    .sort({ createdDate: -1 })
    .limit(1000)
    .toArray()
  return { items: docs } as RedemptionsList
}

export async function getMerchantStatistics(
  merchantId: string,
  days: number = 0,
) {
  const db = await getDb()
  const transactions = db.collection('transactions')
  const redemptions = db.collection('redemptions')

  const match: any = { merchantId }
  if (days > 0) {
    match.createdDate = {
      $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000),
    }
  }

  const txCount = await transactions.countDocuments(match)
  const redCount = await redemptions.countDocuments(match)

  const stats: MerchantStatistics = {
    merchantId: merchantId as any,
    transactionsCount: txCount,
    redemptionsCount: redCount,
  } as any

  return stats
}

export async function getMerchantCustomer(
  merchantId: string,
  customerId: number,
) {
  const db = await getDb()
  const customers: any = db.collection('customers')
  const cust = await customers.findOne({
    merchantId,
    _id: typeof customerId === 'string' ? new ObjectId(customerId) : customerId,
  })
  return cust as CustomerReward
}

export async function getSearchedCustomer(q: string = '') {
  if (q.length < 3) return
  const db = await getDb()
  const users = db.collection('users')
  const regex = new RegExp(q, 'i')
  const docs: any = await users
    .find({ $or: [{ email: regex }, { name: regex }, { phone: regex }] })
    .limit(50)
    .toArray()
  return { items: docs } as UsersList
}

export async function getAllMerchantCustomers(merchantId: string) {
  const db = await getDb()
  const customers = db.collection('customers')
  // const docs:any = await customers.find({ signupMerchant: merchantId }).limit(1000).toArray()
  const docs: any = await customers.find().limit(1000).toArray()
  return { items: docs } as CustomerRewardsList
}

export async function getMerchant(merchantId: string) {
  const db = await getDb()
  const merchants: any = db.collection('merchants')
  const doc = await merchants.findOne({
    _id: typeof merchantId === 'string' ? new ObjectId(merchantId) : merchantId,
  })
  return doc as Merchant
}

export async function getOperators(merchantId: string) {
  const db = await getDb()
  const operators = db.collection('operators')
  const docs: any = await operators.find({ merchantId }).toArray()
  return { items: docs } as UsersList
}

/** Helpers for react-query compatibility (returns the data directly) */

export async function getStatistics(merchantId: string, days: number = 0) {
  const data = await getMerchantStatistics(merchantId, days)
  return data as MerchantStatistics
}

export async function getCustomer(merchantId: string, customerId: number) {
  const data = await getMerchantCustomer(merchantId, customerId)
  return data as CustomerReward
}
