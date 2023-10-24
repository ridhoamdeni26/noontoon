<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $movieFeature = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();

        return Inertia::render('User/Dashboard/Index', [
            'movieFeature' => $movieFeature,
            'movies' => $movies
        ]);
    }
}
