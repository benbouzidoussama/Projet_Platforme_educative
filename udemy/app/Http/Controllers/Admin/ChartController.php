<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Chart;
use Illuminate\Http\Request;

class ChartController extends Controller
{
    public function ChartView(){
        $resule=Chart::all();
        return($resule);
    }
}
