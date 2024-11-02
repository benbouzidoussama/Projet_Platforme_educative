<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function Contact(Request $request) {
        // Ajouter la validation des champs
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',  // Validation de l'email
            'message' => 'required|string',
        ]);

        // Si la validation échoue
        if ($validator->fails()) {
            // Récupérer les erreurs de validation
            $errors = $validator->errors();
    
            // Créer un message d'erreur personnalisé
            $errorMessage = 'Validation échouée pour : ';
            if ($errors->has('name')) {
                $errorMessage .= 'name, ';
            }
            if ($errors->has('email')) {
                $errorMessage .= 'email, ';
            }
            if ($errors->has('message')) {
                $errorMessage .= 'message, ';
            }
    
            // Supprimer la dernière virgule et espace
            $errorMessage = rtrim($errorMessage, ', ');
    
            return response()->json([
                'message' => $errorMessage,
                'errors' => $errors
            ], 400);
        }
        

        try {
            // Insérer les données dans la base de données
            $result = Contact::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'message' => $request->input('message'),
            ]);

            // Vérifier si l'insertion a réussi
            if ($result) {
                // Récupérer les données insérées
                $insertedData = Contact::where('id', $result->id)->first();
                
                return response()->json([
                    'message' => 'Données insérées avec succès',
                    'data' => $insertedData
                ], 200);
            } else {
                return response()->json(['message' => 'Erreur lors de l\'insertion des données'], 500);
            }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erreur serveur',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
