import { useState } from 'react';
import { Button } from '../../ui/button'
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router';
const allQuestions = [
  {
    id: 1,
    Question: "Which is an example of a vector DBMS?",
    option: ["Postgres", "MySQL", "Pinecone", "MongoDB"],
    answer: "Pinecone"
  },
  {
    id: 2,
    Question: "Which is an example of a vector database?",
    option: ["ChromaDB", "Redis", "SQLite", "Oracle"],
    answer: "ChromaDB"
  },
  {
    id: 3,
    Question: "Which search engine supports vector similarity search?",
    option: ["Elasticsearch", "Bing", "Google", "Yahoo"],
    answer: "Elasticsearch"
  },
  {
    id: 4,
    Question: "Which library is used for vector embedding generation?",
    option: ["NumPy", "OpenAI Embeddings", "Express", "Flask"],
    answer: "OpenAI Embeddings"
  },
  {
    id: 5,
    Question: "Which one is not a vector database?",
    option: ["Weaviate", "Qdrant", "MySQL", "Milvus"],
    answer: "MySQL"
  },
  {
    id: 6,
    Question: "Which database is optimized for storing vectors?",
    option: ["Milvus", "MongoDB", "SQLite", "DynamoDB"],
    answer: "Milvus"
  },
  {
    id: 7,
    Question: "Which open-source vector search engine is built in Rust?",
    option: ["Qdrant", "Weaviate", "Pinecone", "MySQL"],
    answer: "Qdrant"
  },
  {
    id: 8,
    Question: "What is a primary use case of vector databases?",
    option: ["Vector arithmetic", "Image similarity search", "File storage", "Data compression"],
    answer: "Image similarity search"
  },
  {
    id: 9,
    Question: "Which deep learning model is commonly used for embedding?",
    option: ["ResNet", "GPT-4", "Word2Vec", "DALL·E"],
    answer: "Word2Vec"
  },
  {
    id: 10,
    Question: "Which company developed Pinecone?",
    option: ["OpenAI", "Google", "Pinecone Systems", "Facebook"],
    answer: "Pinecone Systems"
  },
  {
    id: 11,
    Question: "Which vector DB supports hybrid search (vector + keyword)?",
    option: ["Weaviate", "SQLite", "MongoDB", "PostgreSQL"],
    answer: "Weaviate"
  },
  {
    id: 12,
    Question: "Which one is a cloud-native vector database?",
    option: ["Pinecone", "Redis", "Elasticsearch", "InfluxDB"],
    answer: "Pinecone"
  },
  {
    id: 13,
    Question: "Which of these is a Python library for vector similarity search?",
    option: ["Faiss", "TensorFlow", "Keras", "Pandas"],
    answer: "Faiss"
  },
  {
    id: 14,
    Question: "Which company maintains Weaviate?",
    option: ["SeMI Technologies", "Google", "Amazon", "Microsoft"],
    answer: "SeMI Technologies"
  },
  {
    id: 15,
    Question: "Which of these supports approximate nearest neighbor (ANN) search?",
    option: ["Faiss", "SQLite", "MySQL", "Oracle"],
    answer: "Faiss"
  },
  {
    id: 16,
    Question: "Which is NOT a use case for vector databases?",
    option: ["Recommendation systems", "Full-text search", "Semantic search", "Relational joins"],
    answer: "Relational joins"
  },
  {
    id: 17,
    Question: "What does 'embedding' mean in machine learning?",
    option: ["Encoding data into vector space", "Compressing files", "Sorting data", "Hashing passwords"],
    answer: "Encoding data into vector space"
  },
  {
    id: 18,
    Question: "Which vector DBMS uses GraphQL for queries?",
    option: ["Weaviate", "Milvus", "Redis", "MongoDB"],
    answer: "Weaviate"
  },
  {
    id: 19,
    Question: "Which database uses HNSW for vector search?",
    option: ["Qdrant", "Oracle", "PostgreSQL", "MariaDB"],
    answer: "Qdrant"
  },
  {
    id: 20,
    Question: "Which technology is often used with vector DBs to build semantic search?",
    option: ["Transformers", "CSS", "SQL", "jQuery"],
    answer: "Transformers"
  }
];



const QuizQuestionList = () => {
    const [currentQuestion,setCurrentQuestion]=useState(1);
    const navigate=useNavigate();
    const totalQuestions=allQuestions.length;
    const [AnsData,setAnsData]=useState({})


    const NextQuestionHandle=()=>{
        if(currentQuestion<=totalQuestions){
            setCurrentQuestion(currentQuestion+1);
        }
    }

    const PreviousQuestionHandle=()=>{
        setCurrentQuestion(currentQuestion-1);
    }
    


    const StatusProgress=currentQuestion/totalQuestions*100;

    const filterData=allQuestions.find((val,index)=>currentQuestion==val.id);
    console.log(filterData);


    const OnSelectAns=(e,Question)=>{
      const {value,name}=e.target;
      try{
        setAnsData({...AnsData,[Question]:value})
      }catch(e){
        console.log(e);
      }
    }


    console.log(AnsData);
    return (

        <div className="bg-background flex justify-center">
            <div className="w-[85%] text-center py-13">
                <h1 className="text-4xl font-bold underline pb-5">Quiz Section</h1>

                <div className="bg-white pb-5 rounded-2xl my-5">

                    <div className="bg-black rounded-tl-2xl rounded-tr-2xl ">
                        <h2 className="text-white font-bold text-2xl py-4">Quiz -1 </h2>
                    </div>


                    <div className="py-10  w-[75%] mx-auto">
                        <div className="py-8">
                            <div className="flex justify-between">
                                <p className="font-medium text-[18px]">Quiz Progress</p>
                                <p className="font-medium text-[18px]">question {currentQuestion} of {totalQuestions} </p>
                            </div>
                            <div className="pt-3">
                                <LinearProgress variant="determinate" color="primary" value={StatusProgress} sx={{ height: 10, borderRadius: 5 }} />
                            </div>
                        </div>

                        <div className="bg-secondary border-2 border-black rounded-2xl my-5 py-5 px-8">
                            <h1 className="text-start font-medium text-2xl">Question {filterData.id}</h1>
                            <div className="text-start py-8 border-b border-black">
                                <p className="font-medium text-[18px]">{filterData.id}. {filterData.Question}</p>
                                <div className="space-y-5 pt-5">
                                    {filterData.option.map((option,index)=>(
                                        <div className="items-center bg-white w-[80%] rounded-[5px] py-2 flex align-middle px-5" key={index}>

                                        <input type="radio" name="ans" value={option} checked={AnsData[filterData.Question]===option} className='cursor-pointer' onChange={(e)=>OnSelectAns(e,filterData.Question)} />

                                        <label className="pl-2 font-medium text-[17px]" htmlFor="">{option}</label>
                                    </div>
                                    ))}
                                </div>

                            </div>
                            <div className="flex justify-between py-5">
                                <Button className="text-[17px] py-5 px-8 cursor-pointer" disabled={currentQuestion==1} onClick={PreviousQuestionHandle}>previous</Button>
                                
                                {currentQuestion==totalQuestions?<Button onClick={()=>navigate('/quiz-answer')} className="text-[17px] py-5 px-8 cursor-pointer">Submit</Button>:<Button className="text-[17px] py-5 px-8 cursor-pointer" disabled={currentQuestion==totalQuestions} onClick={NextQuestionHandle}>Next</Button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizQuestionList