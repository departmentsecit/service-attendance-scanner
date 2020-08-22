<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scans', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('country_id');
            $table->integer('city_id');
            $table->integer('project_id');
            $table->integer('building_id');
            $table->integer('lift_id');
            $table->integer('floor_id');
            $table->string('check_type',10);
            $table->dateTime('date_time_log');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('scans');
    }
}
