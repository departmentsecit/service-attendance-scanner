<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scan extends Model
{
    protected $fillable = [
        'user_id',
        'country_id',
        'city_id',
        'project_id',
        'building_id',
        'lift_id',
        'floor_id',
        'check_type',
        'date_time_log'
    ];
}
