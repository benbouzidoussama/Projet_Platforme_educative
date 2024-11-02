<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;


class TeamController extends Controller
{
    public function TeamView(){
        $resule=Team::all();
        return $resule;
    }
}
