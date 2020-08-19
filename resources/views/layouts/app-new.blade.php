<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'SASv1') }}</title>

    <link rel="icon" href="{{ URL::asset('/assets/images/icons/app-logo.png') }}" type="image/x-icon"/>
    
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
  
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body class="hold-transition sidebar-mini">

    <div class="wrapper" id="app">

        @include('layouts.components.navbar')
        @include('layouts.components.main-sidebar')

        <div class="content-wrapper">

            <router-view></router-view>
        </div>
            {{-- @yield('content') --}}
        

        @include('layouts.components.footer')

    </div>
    <!-- ./wrapper -->


<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>
