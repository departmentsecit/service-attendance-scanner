@extends('layouts.print')

@section('content')

    <div class="content">

        @foreach ($datas as $data)

            <div class="row mb-5">
                <div class="col-6">
                    <div class="float-left" >
                        {!! QrCode::size(300)->generate($data['in']); !!}
                    </div>
                    <div class="float-left mt-5">
                        <h4 class="text-success mb-2">CHECK IN</h4>
                        <p style="max-width: 250px;">
                            {{ $data['info']->project_name }} <br/>
                            <hr>
                            Building # {{ $data['info']->building_num }}<br/>
                            Lift # {{ $data['info']->lift_num }}<br/>
                            Floor # {{ $data['info']->floor_letter }}<br/>
                        </p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="float-left">
                        {!! QrCode::size(300)->generate($data['out']); !!}
                    </div>
                    <div class="float-left mt-5">
                        <h4 class="text-danger mb-2">CHECK OUT</h4>
                        <p style="max-width: 250px;">
                            {{ $data['info']->project_name }} <br/>
                            <hr>
                            Building # {{ $data['info']->building_num }}<br/>
                            Lift # {{ $data['info']->lift_num }}<br/>
                            Floor # {{ $data['info']->floor_letter }}<br/>
                        </p>
                    </div>
                </div>
            </div>
        @endforeach

        
    </div>

@endsection