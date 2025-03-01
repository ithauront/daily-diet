import React from 'react';
import { Modal as RNModal } from 'react-native';
import { Button } from "components/Button";
import { ButtonContainer, Container, ModalOverlay, Title } from "./styles";

type Props = {
    visible: boolean,
    onCancel: ()=>void,
    onConfirm: ()=>void
}

export function CustomModal({ visible, onCancel, onConfirm }: Props) {
    
  return (
    <RNModal 
      visible={visible} 
      transparent 
      animationType="fade" 
      onRequestClose={onCancel}
    >
        <ModalOverlay>
      <Container>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <ButtonContainer>
          <Button type='SECONDARY' title="Cancelar" onPress={onCancel} />
          <Button title="Sim, excluir" onPress={onConfirm} />
        </ButtonContainer>
      </Container>
      </ModalOverlay>
    </RNModal>
  );
}
