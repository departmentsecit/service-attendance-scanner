<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lift extends Model
{
    protected $fillable = ['project_id','building_id','lift_num','description','floor_count','status'];
}
