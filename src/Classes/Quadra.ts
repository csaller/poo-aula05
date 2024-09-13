const horariosIniciais = [{
  horario: '10:00',
  disponivel: true
}, {
  horario: '11:00',
  disponivel: true
}, {
  horario: '12:00',
  disponivel: true
}, {
  horario: '13:00',
  disponivel: true
}, {
  horario: '14:00',
  disponivel: true
}, {
  horario: '15:00',
  disponivel: true
}, {
  horario: '16:00',
  disponivel: true
}, {
  horario: '17:00',
  disponivel: true
}, {
  horario: '18:00',
  disponivel: true
}]

let idQuadra = 1

export class Quadra {
  id: number
  nome: string
  esporte: string
  horarios: {
    horario: string,
    disponivel: Boolean
  }[]

  constructor(nome: string, esporte: string) {
    this.id = idQuadra
    this.nome = nome
    this.esporte = esporte
    this.horarios = structuredClone(horariosIniciais)
    idQuadra++
  }

  reservaHorario(horario: string): void {
    const horarioReservado = this.horarios.find((h) => h.horario === horario)
    if (horarioReservado) {
      horarioReservado.disponivel = false
    }
  }

  listarHorariosDisponiveis(): Array<string> {
    const horariosDisponiveis = this.horarios.filter((h) => h.disponivel).map((h) => h.horario)
    return horariosDisponiveis
  }

  verificaHorario(horario: string): boolean {
    const horarioEncontrado = this.horarios.find(h => h.horario === horario)
    if (horarioEncontrado?.disponivel === true) {
      return true
    } else {
      return false
    }
  }
}
