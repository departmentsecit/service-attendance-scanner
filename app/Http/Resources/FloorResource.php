<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\FloorName;

class FloorResource extends JsonResource
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
            "id"            => $this->id,
            "lift_id"       => $this->lift_id,
            "order"         => $this->order,
            "floor_name"    => FloorName::find($this->floor_name_id)
        ];
    }
}
