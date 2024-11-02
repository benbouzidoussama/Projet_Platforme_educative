<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function HomeView() {
        $resule=Home::all();
        return $resule;
    }
}
