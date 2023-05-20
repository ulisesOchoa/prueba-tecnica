<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'order_date',
        'order_total',
        'order_date_delivery',
        'order_status'
    ];

    public function orderDate(): Attribute
    {
        return new Attribute(
            get: fn ($order_date, $attributes) => date('Y-m-d', strtotime($order_date)),
            set: fn ($order_date, $attributes) => date('Y-m-d', strtotime($order_date))
        );
    }

    public function orderDateDelivery(): Attribute
    {
        return new Attribute(
            get: fn ($order_date_delivery, $attributes) => date('Y-m-d', strtotime($order_date_delivery)),
            set: fn ($order_date_delivery, $attributes) => date('Y-m-d', strtotime($order_date_delivery))
        );
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class, 'id');
    }
}
