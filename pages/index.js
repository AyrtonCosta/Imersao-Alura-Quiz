  
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackGround from '../src/components/QuizBackGround';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


 //const QuizBackGround = styled.div`
  //background-image: url(${db.bg});
 //  flex: 1;
 //  background-size: cover;
//  background-position: center;
 //`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home(){
  return(
    <QuizBackGround backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1>A Terra é Plana ?</h1>
            </Widget.Header>
          <Widget.Content>
        <p>Descreva sua teoria sobre o assunto.</p>
          </Widget.Content>
        </Widget>
       
       
        <Widget>
        <Widget.Content>
        <h1>Quizes das Galerras</h1>
        <p>Lorem</p>
        </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AyrtonCosta" />
    </QuizBackGround>
  );
 
}

