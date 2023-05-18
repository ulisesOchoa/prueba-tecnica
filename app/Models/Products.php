<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_description',
        'product_amount',
        'product_value',
        'product_status',
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }
}
