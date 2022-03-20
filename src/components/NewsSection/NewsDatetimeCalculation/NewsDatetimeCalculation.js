import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';
const NewsDatetimeCalculation = (props) => {
    const time = props.time; 
    const english = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '10', '11', '12', '13', '14', '15', '16', '17', '18','19','20', '21', '22', '23','24','25','26', '27', '28', '29', '30', '31', 'a', 'second', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years', 'ago'];
    const bangla = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০', '১০', '১১', '১২', '১৩', '১৪','১৫', '১৬', '১৭', '১৮', '১৯', '২০', '২১', '২২', '২৩', '২৪','২৫', '২৬', '২৭', '২৮', '২৯', '৩০', '৩১', '১', 'সেকেন্ড', 'সেকেন্ড', 'মিনিট', 'মিনিট', 'ঘণ্টা ', 'ঘণ্টা ', 'দিন', 'দিন', 'সপ্তাহ', 'সপ্তাহ', 'মাস', 'মাস', 'বছর', 'বছর', 'আগে'];
    
    const datetimeDigit = moment(time).fromNow(); 
    const datetimeSpilt = (datetimeDigit.split(" ")).filter(x => english.includes(x));
  
    const datetimeSpiltIndex = (datetimeSpilt.map(x => english.indexOf(x )));
    console.log(datetimeSpiltIndex);
    const bn = datetimeSpiltIndex.map(y=> y = bangla[y] );
    const datetimeBn = (bn.toString()).split(",").join(" ");  
  
  return (
    <>
        {datetimeBn}
    </>
  )
}

export default NewsDatetimeCalculation
