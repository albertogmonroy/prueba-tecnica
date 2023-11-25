<?php
namespace App\Http\Requests\Entradas;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreEntradasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'titulo'                => ['required', 'string'],
            'autor'                 => ['required', 'string'],
            'contenido'             => ['required', 'string'],
            'fechaPublicacion'      => ['required' , 'date_format:d/m/Y H:i:s'],
        ];
    }


    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Error de Validacion',
            'data'      => $validator->errors()
        ]));

    }

    public function messages()
    {
        return [
            'titulo.required'               => 'El titulo es requerido',
            'titulo.string'                 => 'El titulo debe ser una cadena de texto',
            'autor.required'                => 'El autor es requerido',
            'autor.string'                  => 'El autor debe ser una cadena de texto',
            'contenido.required'            => 'El contenido es requerido',
            'contenido.string'              => 'El contenido debe ser una cadena de texto',
            'fechaPublicacion.required'     => 'La fecha de publicación es requerido',
            'fechaPublicacion.date'         => 'La fecha de publicación debe ser una fecha con formato dd/mm/aaaa hh:mm:ss',
        ];
    }

}
