<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'country_id',
        'city_id',
        'name',
        'address',
        'contact_person',
        'contact_number',
        'description',
        'status',
        'supervisor'
    ];
}
