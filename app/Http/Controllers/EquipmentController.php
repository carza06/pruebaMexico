<?php

namespace App\Http\Controllers;
Use App\Models\Equipment;
Use App\Models\Response;
use Illuminate\Http\Request;
use Acamposm\Ping\Ping;
use Acamposm\Ping\PingCommandBuilder;

class EquipmentController extends Controller
{
    public function getAll(){
        $data = Equipment::all();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $equipment = new Equipment();
        $equipment->name = $request->name;
        $equipment->ip = $request->ip;
        $equipment->status = $request->status;
        $equipment->save();
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
      
      public function delete($id){
        $res = Equipment::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function getip(){
        
        $data = Equipment::all();
        foreach($data as $aux){
            $command = (new PingCommandBuilder($aux->ip))->count(3)->packetSize(200)->ttl(128);
            $ping = (new Ping($command))->run();

            $response = new Response();
            $response->equipment_id = $aux->id;
            $response->ip = $aux->ip;
            $response->description = $ping->raw[2];
            $response->status = $ping->host_status;
            $response->save();
        }

      }

      public function getPrueba(){
        $data = Response::all();
        return response()->json($data, 200);
    }
}
