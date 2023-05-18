<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductsFactory extends Factory
{

    public function definition()
    {
        return [
            'product_description' => $this->faker->sentence,
            'product_amount' => $this->faker->numberBetween(1, 500),
            'product_value' => $this->faker->randomFloat(2, 10, 100),
            'product_status' => $this->faker->randomElement(['activo', 'inactivo', 'pendiente']),
        ];
    }
}
