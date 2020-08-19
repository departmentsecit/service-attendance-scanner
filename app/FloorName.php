<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FloorName extends Model
{
    protected $fillable = ['letter', 'name', 'description','position'];
}
