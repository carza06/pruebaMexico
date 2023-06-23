<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
Use App\Models\Users;

use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function login(Request $request){
        $user = Users::where('email', $request->email)->first();
        if(isset($user)){
            if(!Hash::check($request->password, $user->password)) {
                return response()->json(['status'=>3, 'message'=>'contraseña invalida'], 400);
            }
            return response()->json(['status'=>2, 'message'=>'logeado con exito'], 200);
        }else{
            return response()->json(['status'=>1, 'message'=>'Email invalido'], 400);
        }
    }
}
