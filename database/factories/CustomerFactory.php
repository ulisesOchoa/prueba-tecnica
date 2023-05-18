<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{

    protected $model = Customer::class;

    public function definition()
    {
        return [
            'city_id' => function () {
                return City::factory()->create()->id;
            },
            'customer_id_number' => $this->faker->unique()->randomNumber(6),
            'customer_name' => $this->faker->name,
            'customer_birth_date' => $this->faker->dateTimeBetween('-80 years', '-18 years')->format('Y-m-d'),
            'customer_address' => 'Cll #105 C # 49 B - 32',
            'customer_phone' => $this->faker->phoneNumber
        ];
    }
}
