import React from 'react'
import GreatGreatGrandChild from './GreatGreatGrandChild';

export default function GreatGrandChild() {
  return (
    <div>
      GreatGrandChild
      <GreatGreatGrandChild />
    </div>
  )
}
