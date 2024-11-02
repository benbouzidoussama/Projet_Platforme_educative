<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('_client', function (Blueprint $table) {
            $table->renameColumn('Name', 'name');
            $table->renameColumn('Email', 'email');
            $table->renameColumn('Password', 'password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('_client', function (Blueprint $table) {
            //
        });
    }
};
