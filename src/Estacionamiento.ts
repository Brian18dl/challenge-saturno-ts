import { IEstacionamiento, ILectorDeTarjeta } from "./interfaces";

class Estacionamiento extends IEstacionamiento {
    verificarCodigoTarjeta(codigoTarjeta: string, lectorConTarjeta: ILectorDeTarjeta): void {
       
    }
}

export default Estacionamiento;


