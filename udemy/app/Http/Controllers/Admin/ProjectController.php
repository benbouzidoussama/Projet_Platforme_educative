<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function projecteView() {
        $resule=Projects::all();
            return $resule;
    }
    public function LastThreeProject() {
        $resule=Projects::limit(3)->get();
            return $resule;
    }
    public function ProjectDetails($id) {
        $resule=Projects::where('id',$id)->get();
            return $resule;
    }



    
}
