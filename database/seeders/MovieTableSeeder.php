<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movie = [
            [
                'name' => 'The Name is number 1',
                'slug' => 'the-name-is-number-1',
                'category' => 'Drama',
                'video_url' => 'https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4',
                'thumbnail' => 'hhttps://cdn-cms.pgimgs.com/static/2020/10/Film-Drama-Romantis-6.png',
                'rating' => 9.3,
                'is_featured' => true
            ],
            [
                'name' => 'the goat',
                'slug' => 'the-goat',
                'category' => 'Action',
                'video_url' => 'https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4',
                'thumbnail' => 'https://akcdn.detik.net.id/community/media/visual/2016/02/26/5aaecf4c-ee37-41b0-bf6b-326648d3b07d_169.jpg?w=700&q=90',
                'rating' => 9.3,
                'is_featured' => false
            ]
        ];

        Movie::insert($movie);
    }
}
