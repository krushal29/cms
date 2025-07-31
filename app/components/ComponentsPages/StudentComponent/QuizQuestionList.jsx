import { useEffect, useState } from 'react';
import { Button } from '../../ui/button'
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router';
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group"
import { Label } from '../../ui/label';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const allQuestions = [
  {
    id: 1,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 2,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 3,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 4,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 5,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 6,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 7,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 8,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 9,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 10,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 11,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 12,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 13,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 14,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 15,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 16,
    Question: "Which is an example of a vector database?",
    option: ['ChromaDB', 'Redis', 'SQLite', 'Oracle'],
    answer: "ChromaDB"
  },
  {
    id: 17,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 18,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 19,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 20,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 21,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 22,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 23,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 24,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 25,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 26,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 27,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 28,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 29,
    Question: "Which is an example of a vector database?",
    option: ['ChromaDB', 'Redis', 'SQLite', 'Oracle'],
    answer: "ChromaDB"
  },
  {
    id: 30,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 31,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 32,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 33,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 34,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 35,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 36,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 37,
    Question: "Which is an example of a vector database?",
    option: ['ChromaDB', 'Redis', 'SQLite', 'Oracle'],
    answer: "ChromaDB"
  },
  {
    id: 38,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 39,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 40,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 41,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 42,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 43,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 44,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 45,
    Question: "What does 'embedding' mean in machine learning?",
    option: ['Encoding data into vector space', 'Compressing files', 'Sorting data', 'Hashing passwords'],
    answer: "Encoding data into vector space"
  },
  {
    id: 46,
    Question: "Which is an example of a vector DBMS?",
    option: ['Postgres', 'MySQL', 'Pinecone', 'MongoDB'],
    answer: "Pinecone"
  },
  {
    id: 47,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 48,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
  {
    id: 49,
    Question: "Which library is used for vector embedding generation?",
    option: ['NumPy', 'OpenAI Embeddings', 'Express', 'Flask'],
    answer: "OpenAI Embeddings"
  },
  {
    id: 50,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ['Faiss', 'TensorFlow', 'Keras', 'Pandas'],
    answer: "Faiss"
  },
];



const QuizQuestionList = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = allQuestions.length;
  const [AnsData, setAnsData] = useState({})
  const [pageStart, setPageStart] = useState(0);
  const questionsPerPage = 20;
  // const [activeQuestion, setActiveQuestion] = useState(allQuestions.map((val) => 'f'));
  const [QuizData, setQuizData] = useState(null)


  useEffect(() => {
    const filterData = allQuestions.find((val, index) => currentQuestion == val.id);
    // console.log("filterData" + filterData);
    setQuizData(filterData);
  }, [currentQuestion])

  const onActiveQuestion = (index) => {
    const Quizfilter = allQuestions.find((val) => val.id === index);
    setQuizData(Quizfilter)
    setCurrentQuestion(index);
  }

  // console.log("current Question " + currentQuestion);

  const NextQuestionHandle = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      if (currentQuestion > pageStart + questionsPerPage - 1) {
        setPageStart(pageStart + questionsPerPage)
      }
    }
  }

  const PreviousQuestionHandle = () => {
    const prevQuestion = currentQuestion - 2;
    setCurrentQuestion(currentQuestion - 1);
    if (prevQuestion < pageStart) {
      setPageStart(Math.max(0, pageStart - questionsPerPage));
    }
  }

  const onNextPage = () => {
    if (pageStart + questionsPerPage < allQuestions.length) {
      setPageStart(pageStart + questionsPerPage)
      setCurrentQuestion(pageStart + questionsPerPage + 1)
    }
  }

  const onPrevPage = () => {
    console.log("click");
    if (pageStart - questionsPerPage >= 0) {
      setPageStart(pageStart - questionsPerPage);
      setCurrentQuestion(pageStart - questionsPerPage + 1)
    }
  }


  const OnSelectAns = (e, Question) => {
    const { value, name } = e.target;
    try {
      setAnsData({ ...AnsData, [Question]: value })
    } catch (e) {
      console.log(e);
    }
  }
  console.log(AnsData);


  const filterData = allQuestions.find((val, index) => currentQuestion == val.id);

  const paginatedQuestions = allQuestions.slice(pageStart, questionsPerPage + pageStart)

  return (

    <div className="bg-background flex justify-center">
      <div className="w-[85%] text-center py-13">
        <h1 className="text-4xl font-bold underline pb-5">Quiz Section</h1>

        <div className="bg-white pb-5 rounded-2xl my-5">

          <div className="bg-black rounded-tl-2xl rounded-tr-2xl ">
            <h2 className="text-white font-bold text-2xl py-4">Quiz -1 </h2>
          </div>


          <div className="py-10  w-[75%] mx-auto">

            {/* filter By Question Number */}
            <div className='py-5 flex  items-center'>
              <div>
                <FaChevronLeft className='text-xl cursor-pointer' onClick={onPrevPage} />
              </div>
              <div className='grid grid-cols-10 w-full gap-5 px-5'>
                {paginatedQuestions.map((val, index) => {
                  const isAnswered = AnsData[val.id] !== undefined;
                  console.log(isAnswered)
                  return (
                    <Button key={index} className={`${isAnswered ? 'bg-green-200' : 'bg-red-200'} text-black hover:bg-red-200 cursor-pointer border border-black`} onClick={() => onActiveQuestion(val.id)}>{val.id}</Button>
                  )

                })}
              </div>
              <div>
                <FaChevronRight className='text-xl cursor-pointer' onClick={onNextPage} />
              </div>
            </div>

            <div className="bg-secondary border-2 border-black rounded-2xl my-5 py-5 px-8">
              <h1 className="text-start font-medium text-2xl">Question {QuizData?.id}</h1>
              <div className="text-start py-8 border-b border-black">
                <p className="font-medium text-[18px]">{QuizData?.id}. {QuizData?.Question}</p>
                <div className="space-y-5 pt-5">
                  <RadioGroup
                    name="ans"
                    value={AnsData[filterData.id] || ''}
                    onValueChange={(val) => OnSelectAns({ target: { value: val } }, filterData.id)}
                  >
                    {QuizData?.option?.map((option, index) => (
                      <div className="items-center bg-white w-[80%] rounded-[5px] py-2 flex align-middle px-5" key={index}>

                        {/* <input type="radio" name="ans" value={option} checked={AnsData[filterData.id] === option} className='cursor-pointer' onChange={(e) => OnSelectAns(e, filterData.id)} /> */}

                        <RadioGroupItem value={option} checked={AnsData[filterData.id] === option} className="border-black bg-background cursor-pointer" />

                        <Label className="pl-2 font-medium text-[17px]" htmlFor="">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

              </div>
              <div className="flex justify-between py-5">
                <Button className="text-[17px] py-5 px-8 cursor-pointer" disabled={currentQuestion == 1} onClick={PreviousQuestionHandle}>previous</Button>

                {currentQuestion == totalQuestions ? <Button onClick={() => navigate('/QuizResult')} className="text-[17px] py-5 px-8 cursor-pointer">Submit</Button> : <Button className="text-[17px] py-5 px-8 cursor-pointer" disabled={currentQuestion == totalQuestions} onClick={NextQuestionHandle}>Next</Button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizQuestionList