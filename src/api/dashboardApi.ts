export const fetchDashboardStats = async () => {

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