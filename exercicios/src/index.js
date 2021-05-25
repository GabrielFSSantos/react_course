import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import {BoaTarde, BoaNoite} from './components/Multiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render(
  <div>
    <Primeiro/>
    <BomDia name='Gabriel'/>
    <BoaTarde name='Felipe'/>
    <BoaNoite name='Souza'/>
    <Saudacao name='Santos' type='Bem Vindo'/>
    <Pai name='Felipe' surname='Souza'>
      <Filho name='Gabriel' surname='Souza'/>
      <Filho name='Felipe' surname='Souza' />
      <Filho name='Vivian' surname='Souza' />
    </Pai>
  </div>
, document.getElementById('root'))