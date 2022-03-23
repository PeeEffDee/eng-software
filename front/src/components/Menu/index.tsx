import React from 'react'

import { CalendarIcon, Container, MenuOption, NotesIcon, TasksIcon } from './styles'

export interface Props {
   isActive?: boolean;
}

const Menu: React.FC<Props> = ({
   isActive
}) => {
   return (
      <Container>
         <MenuOption href=""><NotesIcon isActive={true} /></MenuOption>
         <MenuOption href=""><CalendarIcon /></MenuOption>
         <MenuOption href=""><TasksIcon /></MenuOption>
      </Container>
   )
}

export default Menu