<?php

namespace App\Http\Controllers;

use App\Http\Requests\Entradas\StoreEntradasRequest;
use App\Models\Entradas;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Http\Request;

class EntradasController extends Controller
{
    /**
     * Api para mostrar las entradas
     * GET /api/entradas
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        $entradas = Entradas::get();
        throw_if($entradas->isEmpty(), new HttpException(404, 'No se encontro la entrada'));
        return $entradas;
    }

    /**
     *
     * Api para mostrar la entrada por un id
     * GET /api/entradas/{id}
     * @param  int $id
     *
     */
    public function show(int $id){
        $employee = Entradas::where('id', $id)->first();
        throw_if(!$employee, new HttpException(404, 'No se encontro la entrada'. $id));
        return $employee;
    }

    /**
     * Api para crear una entrada
     * POST /api/entradas
     *
     * @param  StoreEntradasRequest  $request
     *
     */
    public function store(StoreEntradasRequest $request)
    {
        $entrada = Entradas::create([
            'titulo'            => $request->get('titulo'),
            'autor'             => $request->get('autor'),
            'contenido'         => $request->get('contenido'),
            'fechaPublicacion'  => Carbon::createFromFormat('d/m/Y H:i:s', $request->get('fechaPublicacion'))
        ]);
        return response()->json($entrada, 201);
    }


}
