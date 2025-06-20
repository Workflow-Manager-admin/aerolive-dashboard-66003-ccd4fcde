import './style.css'

// PUBLIC_INTERFACE
function renderDashboardLayout() {
  /**
   * Replaces the #app element's innerHTML with the AeroLive Dashboard layout.
   * Responsive, mobile-first, dark theme, no dynamic content.
   */
  document.querySelector('#app').innerHTML = `
    <div class="dashboard-root">
      <header class="dashboard-navbar">
        <div class="navbar-brand">AeroLive Dashboard</div>
        <nav class="navbar-links">
          <!-- Nav links placeholder -->
        </nav>
      </header>
      <div class="dashboard-content">
        <aside class="dashboard-sidebar">
          <ul class="sidebar-menu">
            <li>Home</li>
            <li>Flights</li>
            <li>Weather</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main class="dashboard-map-area">
          <div class="map-placeholder">
            Main Map Area
          </div>
        </main>
      </div>
      <footer class="dashboard-footer">
        &copy; ${new Date().getFullYear()} AeroLive
      </footer>
    </div>
  `;
}

renderDashboardLayout();
