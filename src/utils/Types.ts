export type GAProps = {
    action: string | undefined;
    category: string | undefined;
    label: string | undefined;
    value: string | undefined;
}

export type MerchantsProps = {
    id: number;
    status: string;
    activeSubscription: string | null;
    activeRewards: number | null;
    numOfCustomers: number | null;
    logoUrl: string | null;
    name: string;
    email: string | null;
    mobile: string | null;
    phone: string | null;
    basePoint: number | null;
    currency: string | null;
    address: string | null;
    logo: string | null;    
}

export type RewardsProps = {
    id: number;
    status: string | null;
    merchantId: number;
    imageUrl: string | null;
    name: string;
    description: string | null;
    requiredPoints: number | null;
    cap: string | null;
    notes: string | null;
    startDate: Date | null;
    endDate: Date | null;
    image: string | null;  
}