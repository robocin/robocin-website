import useTranslation from '@/hooks/useTranslation'

import { Footer } from '@/components'

import { PageWrap, ContentWrap } from '../../styles/pages.styles'

import * as S from './styles'
import Link from 'next/link'

const RecruitmentPage = () => {
  const t = useTranslation()

  return (
    <PageWrap>
      <ContentWrap>
        <S.Container>
          <h1 style={{ textAlign: 'center' }}>{t.recruitment_page.header}</h1>
          <S.ApplicationLink
            href="https://docs.google.com/forms/d/1BzwpruRIOyFXa9feMs6U_ph1tqfy08fZUa0LVh2ugqg/closedform"
            target="_blank"
          >
            {t.recruitment_page.cta}
          </S.ApplicationLink>
          <Link
            href="https://docs.google.com/document/d/115BpUTwgWnzGHVEu6PTAnJeanQ6NJ88kPDnwRgBbzD8/edit?usp=sharing"
            target="_blank"
            style={{ textDecoration: 'underline', fontSize: '16px' }}
          >
            Confira o edital
          </Link>
          <hr
            style={{
              margin: '40px 0',
              color: 'gray',
              width: '40%',
            }}
          />
          <h1>Perguntas Frequentes</h1>
          <S.FaqContainer>
            <div>
              <ul>
                <li>
                  <b>Pergunta:</b> Estou no começo do curso e não possuo
                  conhecimento na área, consigo participar?
                  <p>
                    <b>Resposta:</b> Sim!
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Estou no ensino superior mas não faço parte
                  da UFPE, posso me inscrever?
                  <p>
                    <b>Resposta:</b> Infelizmente não.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> O projeto envolve bolsa?
                  <p>
                    <b>Resposta:</b> O RobôCIn não oferece bolsa para membros da
                    equipe. Entretanto, é possível desenvolver projetos de
                    pesquisa e iniciação científica dentro da equipe com os
                    professores orientadores que podem concorrer a bolsas em
                    órgãos de incentivo.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Quantas vagas temos?
                  <p>
                    <b>Resposta:</b> Não temos um número fixo de vagas, vai
                    depender do desempenho das pessoas candidatas e da demanda
                    da equipe.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Quais são as áreas de atuação?
                  <p>
                    <b>Resposta:</b> Temos as áreas de Comunicação, Mecânica,
                    Eletrônica, Embarcados e Software.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Escolhi na inscrição que queria fazer parte
                  da área X, posso fazer um projeto da área Y?
                  <p>
                    <b>Resposta:</b> Não, escolhemos ter um projeto de cada área
                    com a finalidade de suprir as necessidades da equipe. A
                    robótica envolve diversos conhecimentos, levando cada membro
                    a trabalhar em diversas áreas com o tempo, mas temos a
                    expectativa de que, caso ingresse no RobôCIn, a pessoa
                    candidata inicialmente trabalhará na área escolhida.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> O projeto tem carga horária obrigatória?
                  <p>
                    <b>Resposta:</b> Somos bem flexíveis quanto ao horário, pois
                    existem semanas de provas e projetos, mas tentamos manter 2
                    turnos de dedicação por semana.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> A partir de qual período posso me inscrever?
                  <p>
                    <b>Resposta:</b> Aceitamos alunos de qualquer período, sendo
                    assim, não existe nenhuma restrição.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Como funciona o processo seletivo?
                  <p>
                    <b>Resposta:</b> O processo seletivo é dividido em 05 fases:
                    inscrição, semana de lançamento, projeto individual,
                    entrevista e trainee. Avaliamos a pessoa candidata a partir
                    das informações fornecidas na inscrição, da participação e
                    engajamento no desenvolvimento do projeto individual, pelo
                    alinhamento na entrevista e também pelo empenho no trainee.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Como faço para entrar no Discord da seletiva?
                  <p>
                    <b>Resposta:</b> Fique atento ao e-mail fornecido no
                    formulário de inscrição; enviaremos o convite por ele.
                  </p>
                </li>
                <li>
                  <b>Pergunta:</b> Como sei se fui aprovado(a) ou não?
                  <p>
                    <b>Resposta:</b> Fique atento ao e-mail fornecido no
                    formulário de inscrição; enviaremos o resultado por ele.
                  </p>
                </li>
              </ul>
              <p>
                Ficou com alguma dúvida que não foi respondida? Entre em contato
                com a gente!
              </p>
              <ul>
                <li>Instagram: @robocinufpe</li>
                <li>E-mail: robocin@cin.ufpe.br</li>
              </ul>
            </div>
          </S.FaqContainer>
        </S.Container>
      </ContentWrap>
      <Footer />
    </PageWrap>
  )
}

export default RecruitmentPage
