import React, { FormEvent, useState } from 'react'
import { TableEstilo, Formulario, ListadeConvidado } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/reducers/store'
import { BotaoPrimary, Interface } from '../../styles/styles'
import { motion } from 'framer-motion'

type Pessoas = {
  id: number
  nome: string
  email: string
  telefone: string
}

const Table = () => {
  const [Nome, setNome] = useState('')
  const [Email, setEmail] = useState('')
  const [Telefone, setTelefone] = useState('')

  const [convidados, setConvidados] = useState<Pessoas[]>([
    {
      id: 1,
      nome: 'João da Silva',
      email: 'joao@example.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      email: 'maria@example.com',
      telefone: '(21) 91234-5678'
    },
    {
      id: 3,
      nome: 'Carlos Souza',
      email: 'carlos@example.com',
      telefone: '(31) 99876-5432'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      email: 'ana@example.com',
      telefone: '(41) 93456-7890'
    }
  ])

  function adicionar(e: FormEvent) {
    e.preventDefault()

    console.log('ddd')

    const newConvidado = {
      id: convidados.length,
      nome: Nome,
      email: Email,
      telefone: Telefone
    }

    setConvidados([...convidados, newConvidado])
  }

  return (
    <ListadeConvidado id="formulario">
      <Interface>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Formulario onSubmit={(e) => adicionar(e)} action="">
            <label htmlFor="Name">Name:</label>
            <input
              value={Nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              id="Name"
            />

            <label htmlFor="Email">Email:</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="Email"
            />

            <label htmlFor="telefone">Telefone:</label>
            <input
              value={Telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="text"
              id="telefone"
            />

            <div className="btn">
              <BotaoPrimary>Quero confirmar Presença</BotaoPrimary>
            </div>
          </Formulario>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TableEstilo className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
              </tr>
            </thead>
            <tbody>
              {convidados.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.telefone}</td>
                </tr>
              ))}
            </tbody>
          </TableEstilo>
        </motion.div>
      </Interface>
    </ListadeConvidado>
  )
}

export default Table
