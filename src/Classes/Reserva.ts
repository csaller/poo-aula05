import { Quadra } from "./Quadra";

let reservaId = 1;

export class Reserva {
    id: number;
    nomeCliente: String;
    horarioReserva: String;
    idQuadra: number;


    constructor(idQuadra: number, horarioReserva: string, nomeCliente: string) {
        this.idQuadra = idQuadra;
        this.nomeCliente = nomeCliente;
        this.horarioReserva = horarioReserva;
        this.id = reservaId;
        reservaId ++;
    }
}
