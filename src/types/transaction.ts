export interface Transaction {
  id: string;
  date: string;
  candidate: string;
  plan: string;
  price: string;
  status: "Successful" | "Failed";
}
