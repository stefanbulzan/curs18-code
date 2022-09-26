export interface Invoice {
  description: string,
  amount: number,
  sender?: string,
  receiver?: string,
  payed?: boolean
}
