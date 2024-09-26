import { Quadra, quadras } from './Quadra'

let reservaId = 1

export const reservas: Reserva[] = []

export class Reserva {
    id: number
    nomeCliente: String
    horarioReserva: String
    idQuadra: number

    constructor(idQuadra: number, horarioReserva: string, nomeCliente: string) {
        const quadra = quadras.find(quadra => quadra.id === idQuadra)
        if (!quadra) {
            throw new Error('Quadra não encontrada')
        }

        const reservaConfirmada: boolean = quadra.reservaHorario(horarioReserva)
        if (!reservaConfirmada) {
            throw new Error('Horário indisponível!')
        }
        
        this.idQuadra = idQuadra
        this.nomeCliente = nomeCliente
        this.horarioReserva = horarioReserva
        this.id = reservaId
        reservaId++
    }

    
}
