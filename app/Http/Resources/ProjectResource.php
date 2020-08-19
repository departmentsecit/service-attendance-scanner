<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Building;
use App\Country;
use App\City;
use App\Lift;

class ProjectResource extends JsonResource
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
            'id'                => $this->id,
            'country'           => Country::find($this->country_id),
            'city'              => City::find($this->city_id),
            'name'              => $this->name,
            'address'           => $this->address,
            'contact_person'    => $this->contact_person,
            'contact_number'    => $this->contact_number,
            'description'       => $this->description,
            'status'            => $this->status,
            'supervisor'        => $this->supervisor,
            "created_at"        => $this->created_at,
            'updated_at'        => $this->created_at,
            'buildings'         => Building::where('project_id',$this->id)->get(),
            'lifts'             => Lift::where('project_id',$this->id)->get()
        ];
    }
}
