// src/components/QuestionFilter.jsx
import React, { useState } from 'react';

const QuestionFilter = ({ filters, onFilterChange }) => {
  const [expanded, setExpanded] = useState({
    companies: false,
    topics: false,
    difficulty: false,
    status: false
  });

  // console.log("filters prop in Filter component:", filters);

  const companies = [
    { id: 'amazon', name: 'Amazon', count: 626 },
    { id: 'microsoft', name: 'Microsoft', count: 428 },
    { id: 'flipkart', name: 'Flipkart', count: 166 },
    { id: 'adobe', name: 'Adobe', count: 158 }
  ];

  const topics = [
    { id: 'conditional', name: 'Conditional', count: 761 },
    { id: 'math', name: 'Math', count: 429 }
  ];

  const difficulties = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' }
  ];

  const statuses = [
    { id: 'solved', name: 'Solved' },
    { id: 'unsolved', name: 'Unsolved' }
  ];

  const toggleSection = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  const handleFilterSelection = (category, id) => {
    const updatedFilters = { ...filters, [category]: filters[category] || [], };
    // console.log(updatedFilters)
    // console.log(category)
    // console.log(id)
    
    if (updatedFilters[category].includes(id)) {
      // Remove the filter if already selected
      updatedFilters[category] = updatedFilters[category].filter(item => item !== id);
    } else {
      // Add the filter
      updatedFilters[category] = [...updatedFilters[category], id];
    }
    
    onFilterChange(updatedFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({
      difficulty: [],
      companies: [],
      topics: [],
      status: []
    });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button 
          className="clear-filters-btn" 
          onClick={clearAllFilters}
          disabled={!Object.values(filters).some(arr => arr.length > 0)}
        >
          CLEAR ALL
        </button>
      </div>
      
      {/* Companies filter section */}
      <div className="filter-section">
        <div 
          className="section-headers" 
          onClick={() => toggleSection('companies')}
        >
          <h4>COMPANIES</h4>
          <span className={`arrow ${expanded.companies ? 'up' : 'down'}`}></span>
        </div>
        
        {expanded.companies && (
          <div className="filter-options">
            <div className="view-all">View All</div>
            {companies.map(company => (
              <div key={company.id} className="filter-option">
                <input
                  type="checkbox"
                  id={`company-${company.id}`}
                  checked={filters.companies.includes(company.id)}
                  onChange={() => handleFilterSelection('companies', company.id)}
                />
                <label htmlFor={`company-${company.id}`}>
                  {company.name} <span className="count">({company.count})</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Topics filter section */}
      <div className="filter-section">
        <div 
          className="section-headers" 
          onClick={() => toggleSection('topics')}
        >
          <h4>TOPICS</h4>
          <span className={`arrow ${expanded.topics ? 'up' : 'down'}`}></span>
        </div>
        
        {expanded.topics && (
          <div className="filter-options">
            <div className="view-all">View All</div>
            <div className="show-topic-tags">
              <input type="checkbox" id="show-topic-tags" />
              <label htmlFor="show-topic-tags">Show topic tag</label>
            </div>
            {topics.map(topic => (
              <div key={topic.id} className="filter-option">
                <input
                  type="checkbox"
                  id={`topic-${topic.id}`}
                  checked={filters.topics.includes(topic.id)}
                  onChange={() => handleFilterSelection('topics', topic.id)}
                />
                <label htmlFor={`topic-${topic.id}`}>
                  {topic.name} 
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Difficulty filter section */}
      <div className="filter-section">
        <div 
          className="section-headers" 
          onClick={() => toggleSection('difficulty')}
        >
          <h4>DIFFICULTY</h4>
          <span className={`arrow ${expanded.difficulty ? 'up' : 'down'}`}></span>
        </div>
        
        {expanded.difficulty && (
          <div className="filter-options">
            {difficulties.map(difficulty => (
              <div key={difficulty.id} className="filter-option">
                <input
                  type="checkbox"
                  id={`difficulty-${difficulty.id}`}
                  checked={filters.difficulty.includes(difficulty.id)}
                  onChange={() => handleFilterSelection('difficulty', difficulty.id)}
                />
                <label htmlFor={`difficulty-${difficulty.id}`} className={`difficulty-${difficulty.id}`}>
                  {difficulty.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Status filter section */}
      <div className="filter-section">
        <div 
          className="section-headers" 
          onClick={() => toggleSection('status')}
        >
          <h4>STATUS</h4>
          <span className={`arrow ${expanded.status ? 'up' : 'down'}`}></span>
        </div>
        
        {expanded.status && (
          <div className="filter-options">
            {statuses.map(status => (
              <div key={status.id} className="filter-option">
                <input
                  type="checkbox"
                  id={`status-${status.id}`}
                  checked={filters.status.includes(status.id)}
                  onChange={() => handleFilterSelection('status', status.id)}
                />
                <label htmlFor={`status-${status.id}`}>
                  {status.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionFilter;