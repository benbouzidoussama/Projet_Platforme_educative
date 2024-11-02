<?php

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\ClientController;

use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TeamController;
use App\Models\Courses;
use App\Models\Footer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/services',[ServiceController::class,'ServiceView']);

//projects
Route::get('/AllProjects',[ProjectController::class,'ProjecteView']);
Route::get('/ThreeProjects',[ProjectController::class,'LastThreeProject']);
Route::get('/ProjectDetails/{id}', [ProjectController::class, 'ProjectDetails']);

//Courses
Route::get('/AllCourses',[CourseController::class,'CourseView']);
Route::get('/FourCourses',[CourseController::class,'LastFourCourse']);
Route::get('/CoursesDetails/{id}', [CourseController::class, 'CourseDetails']);

//Footer
Route::get('/Footer',[FooterController::class,'FooterView']);

//Chart
Route::get('/Chart',[ChartController::class,('ChartView')]);

//Team
Route::get('/Team',[TeamController::class,('TeamView')]);

//About
Route::get('/About',[AboutController::class,('AboutView')]);

//Home
Route::get('/Home',[HomeController::class,('HomeView')]);

//Contact
Route::post('/Contact',[ContactController::class,('Contact')]);

Route::post('/signup', [ClientController::class, ('signup')]);
Route::post('/signin', [ClientController::class, ('signin')]);

