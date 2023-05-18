<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderDetail>
 */
class OrderDetailFactory extends Factory
{
    public function definition()
    {
        return [
            'order_id' => function () {
                return Order::factory()->create()->id;
            },
            'product_id' => function () {
                return Products::factory()->create()->id;
            },
        ];
    }
}
