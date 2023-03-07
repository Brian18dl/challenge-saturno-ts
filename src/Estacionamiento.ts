import { IEstacionamiento, ILectorDeTarjeta } from "./interfaces";

class Estacionamiento extends IEstacionamiento {
    verificarCodigoTarjeta(codigoTarjeta: string, lectorConTarjeta: ILectorDeTarjeta): void {
       
       
        if (codigoTarjeta === "123") {
            this.acceso.grabarUltimoAcceso(codigoTarjeta)
        }
        if (codigoTarjeta ==="456")
        {
            this.acceso.grabarUltimoAcceso(codigoTarjeta)
        }
    }
}

export default Estacionamiento;


