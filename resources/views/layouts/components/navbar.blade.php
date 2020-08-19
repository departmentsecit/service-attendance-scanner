 <!-- Navbar -->
 <nav class="main-header navbar navbar-expand navbar-white navbar-light">

    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <a href="#" class="nav-link">
          Welocome {{ Auth::user()->first_name }}!
        </a>
      </li>

      <li class="nav-item">

        <a class="nav-link" role="button" href="{{ route('logout') }}"
              onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">
          Logout <i class="fas fa-sign-out-alt"></i>
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
            @csrf
        </form>

      </li>

    </ul>
  </nav>
  <!-- /.navbar -->