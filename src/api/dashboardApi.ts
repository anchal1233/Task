type DashboardStats = {
  users: number;
  orders: number;
  revenue: string; // 👈 string kar diya (kyunki "$25k" hai)
};
export const fetchDashboardStats = async (): Promise<DashboardStats> => {

 return new Promise((resolve) => {

  setTimeout(() => {

   resolve({
    users: 1200,
    orders: 540,
    revenue: "$25k"
   });

  }, 800);

 });

};