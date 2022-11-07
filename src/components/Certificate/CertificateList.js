import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardLoading from '../DashboardLoading';
import { BsFillCheckCircleFill as CheckIcon } from 'react-icons/bs';
import { GrDocumentPdf as PdfIcon } from 'react-icons/gr';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';
import { useEventInfo } from '../../hooks/useContext';
import dayjs from 'dayjs';
import getUserOrderByEvent from '../../hooks/api/useUserOrder';

function CertificateList() {
  const eventInfos = useEventInfo();
  const now = Date.now();
  const endDate = Date.parse(eventInfos.endsAt);
  const { userOrder, orderLoading, getUserOrder } = getUserOrderByEvent();
  if (orderLoading) return <DashboardLoading />;
  console.log({
    event: eventInfos.title,
    userName: userOrder.User.Enrollment.name,
    userCpf: userOrder.User.Enrollment.cpf,
    ticketType: userOrder.Ticket.type,
  });

  return (
    <Container>
      {now > endDate ? (
        <ConfirmedBox>
          <CheckIcon />
          <Text>
            <h2>Seu certificado já está disponível!</h2>
            <h3>Baixe seu PDF</h3>
          </Text>
          <PdfIcon cursor="pointer" />
        </ConfirmedBox>
      ) : (
        <NotConfirmedBox>
          <CloseIcon onClick={() => setAvailabe(!available)} />
          <Text>
            <h2>Seu certificado ainda não está disponível!</h2>
            <h3>Aguarde o evento terminar</h3>
          </Text>
        </NotConfirmedBox>
      )}
    </Container>
  );
}

export default CertificateList;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 30px;
  box-sizing: border-box;
`;

const ConfirmedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    color: #36b853;
    margin-right: 14px;
  }
`;

const NotConfirmedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    color: #ec1c1c;
    margin-right: 14px;
  }
`;

const Text = styled.div`
  width: 405px;
  font-size: 16px;
  line-height: 18.75px;
  color: #454545;

  h2 {
    font-weight: 700;
  }
`;
