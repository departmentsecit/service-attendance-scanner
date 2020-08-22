<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\User;

class ScanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
   
        return [
            'id' => $this->id,
            'user'          =>  [
                                    'id' => $this->user_id,
                                    'first_name' => $this->first_name,
                                    'last_name' => $this->last_name
                                ],
            'country'       =>  [
                                    'id' => $this->country_id,
                                    'name' => $this->country_name
                                ],
            'city'          =>  [   
                                    'id' => $this->city_id,
                                    'name' => $this->city_name
                                ],
            'project'       =>  [
                                    'id' => $this->project_id,
                                    'name' => $this->project_name
                                ],
            'building'      =>  [
                                    'id' => $this->building_id,
                                    'number' => $this->building_number,
                                    'name' => $this->building_name
                                ],
            'lift'          =>  [
                                    'id' => $this->lift_id,
                                    'number' => $this->lift_number,
                                    'description' => $this->description
                                ],
            'floor'         =>  [
                                    'id' => $this->floor_id,
                                    'name' => $this->floor_name
                                ],
            'check_type'    => $this->check_type,
            'date_time_log' => $this->date_time_log,
            'created_at'    => $this->created_at
        ];
    }

}
