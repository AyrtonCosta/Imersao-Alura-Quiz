import React from 'react';
import { ThemeProvider } from 'styled-components';
import QUizScreen from '../../src/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    // eslint-disable-next-line react/prop-types
    <ThemeProvider theme={dbExterno.theme}>
      <QUizScreen
        // eslint-disable-next-line react/prop-types
        externalQuestions={dbExterno.questions}
        // eslint-disable-next-line react/prop-types
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
    // eslint-disable-next-line react/prop-types
  // {/* <pre style={{ color: 'black' }}>
  //     {JSON.stringify(dbExterno.questions, null, 4)}
  // </pre> */}

  );
}

export async function getServerSideProps(context) {
  const [projectName, gitHubuser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${gitHubuser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);
    // .catch((err) => {
    //   });
    // console.log('dbExterno', dbExterno);
    // console.log('infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
