import prompt from 'prompt-sync'
import { Quadra } from './Classes/Quadra'
import { Reserva } from './Classes/Reserva'

const teclado = prompt()

const quadras: Quadra[] = []
const reservas: Reserva[] = []

function criaQuadra(nome: string, esporte: string) {
  quadras.push(new Quadra(nome, esporte))
}
criaQuadra('Palneta Bola', 'futebol')
criaQuadra('Bola na Rede', 'futsal')

function reservaQuadra() {
  const nomeCliente = teclado("Digite o nome do Cliente:")
  const idQuadraSelecionada = +teclado("Qual quadra você deseja reservar: ")
  const horaDesejada = teclado("Qual horario você deseja reservar: ")

  const quadra = quadras.find(quadra => quadra.id === idQuadraSelecionada)

  if (quadra) {
    quadra.reservaHorario(horaDesejada)
    const reserva = new Reserva(idQuadraSelecionada, horaDesejada, nomeCliente)
    reservas.push(reserva)
  } else {
    console.log('Quadra não encontrada')
  }
}

function listaQuadrasDisponiveis(horario: string) {
  const quadrasDisp = quadras.filter(quadra => quadra.verificaHorario(horario))
  console.table(quadrasDisp.map(quadra => ({ id: quadra.id, nome: quadra.nome, esporte: quadra.esporte })))
}

function listaReservas() {
  if (reservas.length === 0) {
    console.log('Não há reservas cadastradas')
    return
  }
  console.table(reservas.map(reserva => ({ id: reserva.id, nome: reserva.nomeCliente, horario: reserva.horarioReserva, quadra: quadras.find(quadra => quadra.id === reserva.idQuadra)?.nome })))
}

while (true) {
  console.log('====Quadras Esportivas====')
  console.log('1 - Cadastrar Quadra')
  console.log('2 - Reservar Quadra')
  console.log('3 - Listar Quadras Disponíveis')
  console.log('4 - Listar Reservas')
  console.log('5 - Listar Quadras')
  console.log('0 - Sair')

  const opcao: number = +teclado('Escolha uma opção: ')
  if (opcao === 0) {
    break
  }

  switch (opcao) {
    case 1:
      const nome = teclado('Digite o nome da Quadra: ')
      const esporte = teclado('Digite o esporte da Quadra: ')
      criaQuadra(nome, esporte)
      break
    case 2:
      reservaQuadra()
      break
    case 3:
      const horario = teclado('Digite o horario: ')
      listaQuadrasDisponiveis(horario)
      break
    case 4:
      listaReservas()
      break
    case 5:
      console.table(quadras.map(quadra => ({ id: quadra.id, nome: quadra.nome, esporte: quadra.esporte })))
      break
    default:
      break
  }
}
