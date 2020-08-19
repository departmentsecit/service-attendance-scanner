<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('country_id');
            $table->integer('city_id');
            $table->string('name');
            $table->string('address')->nullable($value = true);
            $table->string('contact_person')->nullable($value = true);
            $table->string('contact_number')->nullable($value = true);
            $table->string('description')->nullable($value = true);
            $table->string('status');
            $table->string('supervisor')->nullable($value = true);
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
        Schema::dropIfExists('projects');
    }
}
