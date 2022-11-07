import React, { useState } from 'react';
import styled from 'styled-components';
import DashboardLoading from '../DashboardLoading';
import { BsFillCheckCircleFill as CheckIcon } from 'react-icons/bs';
import { GrDocumentPdf as PdfIcon } from 'react-icons/gr';
import { AiFillCloseCircle as CloseIcon } from 'react-icons/ai';

import logo from '../../assets/images/drivent.png';

import { useEventInfo } from '../../hooks/useContext';
import dayjs from 'dayjs';
import getUserOrderByEvent from '../../hooks/api/useUserOrder';
import { Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'colunm',
    backgroundColor: '#ffffff',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    orientation: 'landscape',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  text: {
    margin: 8,
    fontSize: 25,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 30,
    margin: 12,
    textAlign: 'center',
  },
});

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
      {now < endDate ? (
        <>
          <ConfirmedBox>
            <CheckIcon />
            <MainText>
              <h2>Seu certificado já está disponível!</h2>
              <h3>Baixe seu PDF</h3>
            </MainText>
            <PdfIcon cursor="pointer" />
          </ConfirmedBox>
          <PDF>
            <PDFViewer>
              <Document>
                <Page size="A4" style={styles.page} orientation="landscape">
                  <Text style={styles.title}>Certificado de participação</Text>
                  <Text style={styles.subtitle}>{eventInfos.title}</Text>
                  <View style={styles.section} wrap={true}>
                    <Text style={styles.text}>PARTICIPANTE: {userOrder.User.Enrollment.name}</Text>
                    <Text style={styles.text}>MODALIDADE: {userOrder.Ticket.type}</Text>
                    <Text style={styles.text}>CPF: {userOrder.User.Enrollment.cpf}</Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </PDF>
        </>
      ) : (
        <NotConfirmedBox>
          <CloseIcon onClick={() => setAvailabe(!available)} />
          <MainText>
            <h2>Seu certificado ainda não está disponível!</h2>
            <h3>Aguarde o evento terminar</h3>
          </MainText>
        </NotConfirmedBox>
      )}
    </Container>
  );
}

export default CertificateList;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 30px;
  box-sizing: border-box;

  iframe {
    width: 60%;
    height: 300px;
  }
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

const MainText = styled.div`
  width: 405px;
  font-size: 16px;
  line-height: 18.75px;
  color: #454545;

  h2 {
    font-weight: 700;
  }
`;

const PDF = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
