import PropTypes from 'prop-types';

import {
 StatisticList,
    StatisticListItem, StatisticValue
} from "./Statistics.style";

export const Statistics = ({ good, neutral, bad, total, positivePersantage }) => {
    return(
     <StatisticList>
          <StatisticListItem>Good:<StatisticValue>{good}</StatisticValue></StatisticListItem>
               <StatisticListItem>Neutral:<StatisticValue>{neutral}</StatisticValue></StatisticListItem>
                <StatisticListItem>Bad:<StatisticValue>{bad}</StatisticValue></StatisticListItem>
          <StatisticListItem>Total:<StatisticValue>{total}</StatisticValue></StatisticListItem>
                <StatisticListItem>Positive feedback:<StatisticValue>{positivePersantage}%</StatisticValue></StatisticListItem>
        </StatisticList> 
        )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePersantage: PropTypes.number,
}