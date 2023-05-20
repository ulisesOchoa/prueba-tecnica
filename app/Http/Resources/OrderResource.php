<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => (string)$this->id,
            'attributes' => [
                'customer_id' => $this->customer_id,
                'order_date' => $this->order_date,
                'order_total' => $this->order_total,
                'order_date_delivery' => $this->order_date_delivery,
                'order_status' => $this->order_status,
                'order_details_count' => $this->order_details_count,
            ],
            'relationships' => [
                'id' => (string)$this->customer->id,
                'user_name' => $this->customer_name->name,
            ],
        ];
    }
}
