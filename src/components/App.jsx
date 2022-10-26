import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme';


import { Container } from './Container/Container';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });
  
 const handleBtn = e => {
    const { name} = e.target;
    switch (name) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;  
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
        return
    }
  }

const total = good + neutral + bad
const positivePersantage = Math.round((good * 100) / total);
  
  return (  <ThemeProvider theme={theme}>
      <Container display="flex" flexDirection="column" alignItems="center" padding="3">
      <Section  title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={handleBtn} />
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
      ) 
 }  
