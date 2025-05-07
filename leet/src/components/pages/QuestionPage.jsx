import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionList from "../QuestionList";
import QuestionFilter from "../QuestionFilter";
// import QuestionBanner from '../components/QuestionBanner';
import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    difficulty: [],
    companies: [],
    topics: [],
    status: [],
  });

  // console.log("Applying filters:", filters);
  // console.log("Sample question:", questions[0]);
  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, questions]);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await axios.get("http://localhost:8000/api/questions/",
        { withCredentials: true });
      // console.log(response.data.questions)
      setQuestions(response.data.questions);
      setFilteredQuestions(response.data.questions);
      setError(null);
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError("Failed to load questions. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };


  // const fetchQuestions = async () => {
  //   setIsLoading(true);
  //   try {
  //     const [questionRes, solvedRes] = await Promise.all([
  //       axios.get("http://localhost:8000/api/questions/", { withCredentials: true }),
  //       axios.get("http://localhost:8000/api/questions/user/solved", { withCredentials: true })
  //     ]);
  
  //     const solvedSet = new Set(solvedRes.data.solvedQuestionIds);
  //     const allQuestions = questionRes.data.questions.map(q => ({
  //       ...q,
  //       solved: solvedSet.has(q._id)
  //     }));
  
  //     setQuestions(allQuestions);
  //     setFilteredQuestions(allQuestions);
  //     setError(null);
  //   } catch (err) {
  //     console.error("Error fetching questions or solved status:", err);
  //     setError("Failed to load questions. Please try again later.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  

  // useEffect(() => {
  //   fetchQuestions();
  //   fetchSolvedQuestions();
  // }, []);
  
  // const [solvedIds, setSolvedIds] = useState([]);
  
  // const fetchSolvedQuestions = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/questions/user/solved", {
  //       withCredentials: true
  //     });
  //     setSolvedIds(response.data.solvedQuestionIds); // assume it's an array of question _ids
  //   } catch (err) {
  //     console.error("Error fetching solved questions:", err);
  //   }
  // };
  




  const applyFilters = () => {
    let result = [...questions];

    // Apply difficulty filters
    if (filters.difficulty.length > 0) {
      result = result.filter((q) =>
        q.difficulty?.some((d) => filters.difficulty.includes(d.toLowerCase()))
      );
    }

    // Apply company filters
    if (filters.companies.length > 0) {
      result = result.filter((q) =>
        q.companies?.some((company) =>
          filters.companies.includes(company.toLowerCase())
        )
      );
    }

    // Apply topic filters
    if (filters.topics.length > 0) {
      result = result.filter((q) =>
        q.topics?.some((topic) => filters.topics.includes(topic.toLowerCase()))
      );
    }

    // Apply status filters
    if (filters.status.length > 0) {
      result = result.filter((q) =>
        filters.status.includes(q.solved ? "solved" : "unsolved")
      );
    }

    setFilteredQuestions(result);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="question-page">
      {/* <QuestionBanner /> */}
      <div className="question-content">
        <QuestionFilter filters={filters} onFilterChange={handleFilterChange} />
        <QuestionList questions={filteredQuestions} />
      </div>
    </div>
  );
};

export default QuestionPage;
