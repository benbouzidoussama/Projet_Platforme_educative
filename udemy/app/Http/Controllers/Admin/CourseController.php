<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Courses;
use Illuminate\Http\Request;
class CourseController extends Controller
{
    public function CourseView(){
        $resule=Courses::all();
            return $resule;
    }
    public function LastFourCourse() {
        $resule=Courses::limit(4)->get();
            return $resule;
    }
    public function CourseDetails($id) {
        $resule=Courses::where('id',$id)->get();
            return $resule;
    }
}
