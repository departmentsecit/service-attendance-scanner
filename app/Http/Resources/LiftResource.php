<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Building;

class LiftResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id'            => $this->id,
            'building'   => Building::find($this->building_id),
            'lift_num'      => $this->lift_num,
            'description'   => $this->description,
            'floor_count'   => $this->floor_count,
            'status'        => $this->status
        ];
    }
}
