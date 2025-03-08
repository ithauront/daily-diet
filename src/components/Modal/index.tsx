import React from 'react';
import { Modal as RNModal } from 'react-native';
import { Button } from "components/Button";
import { ButtonContainer, Container, ModalOverlay, Title } from "./styles";

type Props = {
    visible: boolean,
    onCancel: ()=>void,
    onConfirm: ()=>void
    isEdit?: boolean
}

export function CustomModal({ visible, onCancel, onConfirm, isEdit=false }: Props) {
    
  return (
    <RNModal 
      visible={visible} 
      transparent 
      animationType="fade" 
      onRequestClose={onCancel}
    >
        <ModalOverlay>
      <Container>
        <Title>{isEdit?'Deseja Editar a refeição para os novos valores fornacidos?':'Deseja realmente excluir o registro da refeição?'}</Title>
        <ButtonContainer>
          <Button type='SECONDARY' title="Cancelar" onPress={onCancel} />
          <Button title={isEdit?'Sim, editar':"Sim, excluir"} onPress={onConfirm} />
        </ButtonContainer>
      </Container>
      </ModalOverlay>
    </RNModal>
  );
}
