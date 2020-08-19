@extends('layouts.print')

@section('content')

    <div class="content">

        @foreach ($datas as $data)

            <div class="row">
                <div class="col-6">
                    <div class="float-left" >
                        {!! QrCode::size(300)->generate($data['in']); !!}
                    </div>
                    <div class="float-left mt-5">
                        <h4 class="text-success mb-2">CHECK IN</h4>
                        {{-- {{ $data['in'] }} --}}
                        <p style="max-width: 250px;">
                            Tanzania Revenue Agency Dodoma Branch Number Twenty-Two <br/>
                            <hr>
                            Building # 1<br/>
                            Lift # 2<br/>
                            Floor # G<br/>
                        </p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="float-left">
                        {!! QrCode::size(300)->generate($data['out']); !!}
                    </div>
                    <div class="float-left mt-5">
                        <h4 class="text-danger mb-2">CHECK OUT</h4>
                        {{-- {{ $data['out'] }} --}}
                        <p style="max-width: 250px;">
                            NMB Head Quarter<br/>
                            <hr>
                            Building # 1<br/>
                            Lift # 2<br/>
                            Floor # G<br/>
                        </p>
                    </div>
                </div>
            </div>
        @endforeach

        
    </div>

@endsection