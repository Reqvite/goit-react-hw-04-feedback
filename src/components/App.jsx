import { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';


import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleBtn = e => {
    const { name } = e.target;
    this.setState(pS => ({
      [name]: pS[name] + 1 
    }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad
    return total;
  }

  countPositiveFeedbackPercentage = (total) => {
    return Math.round((this.state.good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePersantage = this.countPositiveFeedbackPercentage(total);
    return <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
        <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleBtn} />
        </Section>
        <Section title='Statistic'>
          {total > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePersantage={positivePersantage} />
          : <Notification message="There is no feedback"></Notification>
          }
          </Section>
       </Container>
      </ThemeProvider>
  }
  
};
