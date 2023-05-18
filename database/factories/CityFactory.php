<?php

namespace Database\Factories;

use App\Models\City;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\City>
 */
class CityFactory extends Factory
{

    protected $model = City::class;

    public function definition()
    {
        return [
            'city_name' => $this->faker->city,
        ];
    }
}
