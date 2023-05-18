<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    public function definition()
    {
        return [
            'customer_id' => function () {
                return Customer::factory()->create()->id;
            },
            'order_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'order_total' => $this->faker->randomFloat(2, 0, 1000),
            'order_date_delivery' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'order_status' => $this->faker->randomElement(['pending', 'completed', 'cancelled'])
        ];
    }
}
