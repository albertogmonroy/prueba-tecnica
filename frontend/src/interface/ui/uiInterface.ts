/* Interfaz para las props de los componentes generales */
export interface PropsInterface {
  name: string;
  label: string;
  rules?: RulesProps;
  /* eslint-disable-next-line */
  [x: string]: any;
}
/* Interfaz para usar correctamente la librería de react-hook-form */
export interface RulesProps {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
}

/* Interfaz para reducer de ui */
export interface UiState {
  isOnline: boolean;
}