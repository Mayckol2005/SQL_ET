// Importa la promesa de Supabase
import supabasePromise from './supabase.js';

// Espera a que Supabase esté listo
supabasePromise.then(async (supabase) => {
  if (!supabase) return;

  // Elementos del DOM
  const sectionTitle = document.getElementById('sectionTitle');
  const dynamicContent = document.getElementById('dynamicContent');

  // Resto del código del dashboard...
  async function loadDashboardData() {
    try {
      const { data: stats } = await supabase.rpc('get_dashboard_stats');
      
      document.getElementById('totalUsers').textContent = stats.total_users;
      document.getElementById('totalGames').textContent = stats.total_games;
      document.getElementById('monthlySales').textContent = stats.monthly_sales;
      document.getElementById('totalRevenue').textContent = `$${stats.total_revenue.toLocaleString()}`;

      const { data: salesData } = await supabase.rpc('get_monthly_sales');
      renderSalesChart(salesData);

      const { data: topGames } = await supabase.rpc('get_top_games');
      renderTopGames(topGames);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al cargar datos');
    }
  }

  // Resto de tus funciones...

  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('dashboard.html')) {
      loadDashboardData();
      setupNavigation();
    }
  });
});