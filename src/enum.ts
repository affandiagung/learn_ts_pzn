export enum CustomerType {
    PLATINUM = "Platinum",
    REGULAR = "Regular",
    GOLD = "Gold"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}