<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class ClientController extends Controller
{
    public function signup(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:clients,email',
            'password' => 'required|string|min:8',
        ]);
    
        try {
            $newUser = Client::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
    
            return response()->json(['message' => 'Data inserted successfully', 'user' => $newUser], Response::HTTP_OK);
        } catch (\Exception $e) {
            \Log::error('Error inserting data: ' . $e->getMessage());
            return response()->json(['message' => 'Error inserting data'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    
/****----------------------------------------------------------------------------------------------- */
public function signin(Request $request) {
    // Validation des données
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|string|min:8'
    ]);

    // Récupération de l'email et du mot de passe depuis la requête
    $email = $request->input('email');
    $password = $request->input('password');

    // Recherche de l'utilisateur par son email
    $user = Client::where('email', $email)->first();

    // Vérification de l'utilisateur et du mot de passe
    if ($user && Hash::check($password, $user->password)) {
        return response()->json([
            'message' => 'User found',
            'user' => $user
        ], 200);
    } else {
        return response()->json(['message' => 'User not found or incorrect password'], 404);
    }
}

}
