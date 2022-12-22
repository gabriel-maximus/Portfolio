import React from 'react'
import './styles.css'

export default function Button({Conteudo , Ref}) {
  return (
    <button>
        <a href={Ref} target={'blank'}>{Conteudo}</a>
    </button>
  )
}
