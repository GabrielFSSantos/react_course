import React from 'react'
import Filho from './Filho'
import {childrenWithProps} from './utils/childrenWilthProps'

export default props => 
  <div>
    <h1>{props.name} {props.surname}</h1>
    <h2>Filhos</h2>
    <ul>
      <Filho name="Gabriel" surname={props.surname}/>
      <Filho {...props} />
      <Filho {...props} name="Vivian" />

      {/* Por Parametro */}
      {/* {props.children} */}
      {childrenWithProps(props)}
    </ul>
  </div>