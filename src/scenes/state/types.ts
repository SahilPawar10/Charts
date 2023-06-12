export interface expensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperratinalExpenses: number;
  operratinalExpenses: number;
}

export interface Date {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: expensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Date>;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
