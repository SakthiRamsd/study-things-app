import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import {firebase} from '../../config'

export default function PlayGround({route}) {

  const [question, setQuestion] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const {category}= route.params

  useEffect(()=>{
      getQuestion()
  }, [])

  const getQuestion = async () => {
    setSelectedOption({});
    setShowResult(false);
    const db = firebase.firestore();
    const questionRef = db.collection('questions');
    const snapshot = await questionRef.where('category', '==', category).get();
    if (snapshot.empty) {
      console.log('No Matching Documents!');
      return;
    }
    const allQuestions = snapshot.docs.map(doc => doc.data());
    console.log('Fetched questions:', allQuestions); // Add this line to debug
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    console.log('Shuffled questions:', shuffledQuestions); // Add this line to debug
    setQuestion(shuffledQuestions.slice(0, 10));
  };
  

  const handleOptionSelect = (questionIndex, option) =>{
    setSelectedOption({
      ...selectedOption,
      [questionIndex] : option,
    });
  }

  const handleSubmit = () =>{
    let correctAnswer = 0;
    question.forEach((questions, index) =>{
        if( selectedOption[index]===questions.correctOption){
            correctAnswer++;
        }
    });
    setScore(correctAnswer);
    setShowResult(true)
  }


  return (
    <View style={styles.container}>
        <FlatList
            data={question}
            keyExtractor={(item, index)=> index.toString()}
            renderItem={({item,index})=>(
              <View style={styles.questionContainer}>
                    <Text style={styles.questions}>
                      {item.question}
                    </Text>
                      <TouchableOpacity style={[
                        styles.option,
                        selectedOption[index] ==1 && styles.selectedOption,
                        showResult&&item.correctOption === 1 && styles.correctOption,
                        showResult&&selectedOption[index]==1 && selectedOption
    ]}
        onPress={()=> handleOptionSelect(index,1)}
        disabled={showResult}
    >
        <Text>{item.option1}</Text>
                      </TouchableOpacity>

              <TouchableOpacity style={[
                        styles.option,
                        selectedOption[index] ==2 && styles.selectedOption,
                        showResult&&item.correctOption === 2 && styles.correctOption,
                        showResult&&selectedOption[index]==2 && selectedOption
    ]}
        onPress={()=> handleOptionSelect(index,2)}
        disabled={showResult}
    >
        <Text>{item.option2}</Text>
                      </TouchableOpacity>

                 <TouchableOpacity style={[
                        styles.option,
                        selectedOption[index] ==3 && styles.selectedOption,
                        showResult&&item.correctOption === 3 && styles.correctOption,
                        showResult&&selectedOption[index]==3 && selectedOption
    ]}
        onPress={()=> handleOptionSelect(index,3)}
        disabled={showResult}
    >
        <Text>{item.option3}</Text>
                      </TouchableOpacity>

               <TouchableOpacity style={[
                        styles.option,
                        selectedOption[index] ==4 && styles.selectedOption,
                        showResult&&item.correctOption === 4 && styles.correctOption,
                        showResult&&selectedOption[index]==4 && selectedOption
    ]}
        onPress={()=> handleOptionSelect(index,4)}
        disabled={showResult}
    >
        <Text>{item.option4}</Text>
     </TouchableOpacity>
                
                </View>
            )}
        />
     <TouchableOpacity
     style={styles.submitButton}
     onPress={handleSubmit}
     disabled={showResult}
     >
        <Text style={styles.submitButtonText}>Submit</Text>
     </TouchableOpacity>

     {showResult && (
            <View style={styles.result}>
               <Text style={styles.resultText}>Your Scored {score} out of {question.length}</Text>

               <TouchableOpacity style={styles.tryAgain} onPress={getQuestion}>
                  <Text style={styles.tryAgainText}>Try Again</Text>
               </TouchableOpacity>
            </View>
          )}

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'lightgray',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40
  },
  questionContainer:{
    backgroundColor:'whitesmoke',
    borderRadius:25,
    margin:3,
    marginTop:10,
    padding:20,
    elevation:5
  },
  questions:{
    fontWeight:'bold',
    fontSize:16,
    marginVertical:10
  },
  option:{
    backgroundColor:'white',
    padding:10,
    marginVertical:7,
    borderRadius:5
  },
  selectedOption:{
    backgroundColor:'skyblue'
  },
  correctOption:{
    backgroundColor:'lightgreen'
  },
  submitButton:{
    backgroundColor:'blue',
    padding:10,
    marginVertical:10,
    borderRadius:5
  },
  submitButtonText:{
    fontWeight:'bold',
    fontSize:15,
    color:'white'
  },
  result:{
    alignItems:'center',
    justifyContent:'center'
  },
  resultText:{
    fontSize:15,
    fontWeight:'bold',
    marginVertical:10
  },
  tryAgain:{
    backgroundColor:'blue',
    padding:10,
    marginVertical:10,
    borderRadius:5
  },
  tryAgainText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  } 
})