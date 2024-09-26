import { Quadra, quadras } from '../src/Classes/Quadra'
import { Reserva, reservas } from '../src/Classes/Reserva'

describe('Quadra', () => {
  const quadra = new Quadra('Planeta Bola', 'futebol')

  it('Deve criar uma quadra com id, nome e esporte', () => {
    expect(quadra).toBeDefined()
    expect(quadra.nome).toBe('Planeta Bola')
    expect(quadra.esporte).toBe('futebol')
    expect(quadra.id).toBeGreaterThan(0)
  })

  it('Deve retornar uma mensagem de horário indisponível ao tentar fazer uma reserva de um horário que já está reservado', () => {
    const reserva1 = quadra.reservaHorario('10:00')
    const reserva2 = quadra.reservaHorario('10:00')
    expect(reserva2).toBe(false)
  })

  it('Verificar se a quadra foi inserida a lista', () => {
    let quadras: Quadra[]
    quadras = []
    const nomeQuadra = 'Planeta Bola'
    const esporteQuadra = 'Futebol'
    const novaQuadra = new Quadra(nomeQuadra, esporteQuadra)
    quadras.push(novaQuadra)
    const listaQuadrasDisponiveis = () => {
      return quadras
    }

    const quadrasDisp = listaQuadrasDisponiveis()
    expect(quadrasDisp).toContain(novaQuadra)
    expect(quadrasDisp).toHaveLength(1)
  })
})

describe('Reserva', () => {
  const quadra = new Quadra('Planeta Bola', 'futebol')
  quadras

  it('Criar uma reserva', () => {
    const nomeCliente = 'Cliente 1'
    const horaReserva = '10:00'

    const reserva = new Reserva(quadra.id, horaReserva, nomeCliente)

    expect(reserva).toBeDefined()
    expect(reserva.idQuadra).toBe(quadra.id)
    expect(reserva.horarioReserva).toBe(horaReserva)
    expect(reserva.nomeCliente).toBe(nomeCliente)
  })
})
