<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link text-center">
    {{-- <img src="/assets/images/icons/app-logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
        style="opacity: .8"> --}}
    <span class="brand-text font-weight-light">SAS v1</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">

            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/scans" class="nav-link">
                        <i class="nav-icon fas fa-qrcode"></i>
                        <p>Scans</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/project-site" class="nav-link">
                        <i class="nav-icon fas fa-building"></i>
                        <p>Project Sites</p>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users" class="nav-link">
                        <i class="nav-icon fas fa-users"></i>
                        <p>Users</p>
                    </router-link>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>