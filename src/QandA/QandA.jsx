import React from "react";
import axios from "axios";
import Search from './components/Search.jsx';
import QuestionList from './components/QuestionList.jsx';
import MoreQuestions from './components/MoreQuestions.jsx';
import AddQuestion from './components/AddQuestion.jsx';

import sampleData from '../../SampleData.js';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      product_id: ''
    }
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.postQuestion = this.postQuestion.bind(this);
  }


  fetchQuestions() {
    axios.get('qa/questions/?product_id=19089&page=1&count=30')
    .then((data) => {
      this.setState({
        questions: data.data.results
      });
    })
    .catch((err) => {
      console.log('QA ERROR: ', err);
    });
  }

  postQuestion() {
    axios.post('/qa/questions', {
      name: "JUM",
      email: "JUM@CARROT.BIZ",
      body: "YES YES AND MORE YES",
      product_id: 19089
    })
    .then((response) => {
      console.log('Body movin and groovin ');
    })
    .catch((response) => {
      console.log('Not so moovin, ', error);
    });
  }

  componentDidMount() {
    this.fetchQuestions();
    //this.postQuestion();
  }
  render() {
    return (
      <div className="q-and-a-widget">
        <div>
          <Search />
        </div>
        <div className="questions-and-answers">
          <QuestionList questions={this.state.questions} />
        </div>
        <div className="more-questions">
          <MoreQuestions />
        </div>
        <div className="add-question">
          <AddQuestion />
        </div>
      </div>
    )
  }
}
export default QandA;