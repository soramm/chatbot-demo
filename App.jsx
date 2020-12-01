import {AnswersList, Chats ,About} from './components/index'
import React ,{useState,useEffect,useCallback}from 'react'
import './assets/style.css';
// import defaultDataset from './dataSet'
import {db} from './Firebase/index'




const App =()=>{
    const [answers,setAnswers] = useState([]);
    const [chats,setChats] = useState([]);
    const [currentId,setCurrentId] = useState('init');
    const [dataset,setDataset] = useState({});

      //  this.selectAnswer = this.selectAnswer.bind(this)
      //  this.displayNextQuestion = this.displayNextQuestion.bind(this)

 


const displayNextQuestion = (nextQuestionId,nextDataset )=> {
  addChats ({
      text:nextDataset.question,
      type: 'question'
  });

  setAnswers(nextDataset.answers)
      setCurrentId(nextQuestionId)
                               // 現在の質問ID
  
};



 const selectAnswer = useCallback((selectedAnswer,nextQuestionId) =>{
  switch (true) {
      // case(nextQuestionId === 'init'):
      //   setTimeout(()=>
      //     displayNextQuestion(nextQuestionId),1000)
      // break;

      default:
        addChats ({
            text: selectedAnswer,
            type: 'answer'
        });
        
        setTimeout(()=>
        displayNextQuestion(nextQuestionId,dataset[nextQuestionId]),1000)
        break;

        case /^https:*/.test(nextQuestionId):　　//httpsのリンクか判定
          const a = document.createElement('a');
          a.href = nextQuestionId; //nextQuestionIdのリンク
          a.target = '_blank'; 
          a.click();//別タブで開く
        break;

    }},[answers]);




const addChats = useCallback((chat)=>{
  setChats(prevChats =>{
    return [...prevChats,chat]
  })
},[setChats])


// initDataset =(dataset)=>{
//   this.setState ({
//     dataset:dataset
//   })
// }


useEffect(() => {
  (async() => {
      const initDataset = {};

      // Fetch questions dataset from Firestore
      await db.collection('questions').get().then(snapshots => {
          snapshots.forEach(doc => {
              initDataset[doc.id] = doc.data()
          })
      });

      // Firestoreから取得したデータセットを反映
      setDataset(initDataset);

      // 最初の質問を表示
      displayNextQuestion(currentId, initDataset[currentId])
  })();
}, []);

// 最新のチャットが見えるように、スクロール位置の頂点をスクロール領域の最下部に設定する
useEffect(() => {
  const scrollArea = document.getElementById('scroll-area');
  if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
  }
});


// componentDidMount(){  //データセットとかAPIはここに書くことが多い
//   (async()=>{
//     const dataset= this.state.dataset;
//     await db.collection('questions').get().then(snapshots => {
//       snapshots.forEach(doc => {
//           dataset[doc.id] = doc.data()
//           // dataset[id] = data
//       })
//   });
//     this.initDataset(dataset)
//     const initAnswer = "";
//     this.selectAnswer(initAnswer, this.state.currentId)

//   })()
  
  
// }

// componentDidUpdate(){
//   const scrollArea = document.getElementById('scroll-area')
//   if (scrollArea){
//     scrollArea.scrollTop = scrollArea.scrollHeight
//   }
// }


  return (
    <>

    <About />
     <section className='c-section'>
            <div className='c-box'>
            <Chats chats={chats} />
            <AnswersList answers= {answers}
                        select={selectAnswer}/>
    </div>
        </section>
    </>
  );

  }

export default App;

