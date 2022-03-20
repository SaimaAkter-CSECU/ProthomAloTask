import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';
const NewsDatetimeCalculation = (props) => {
    const time = props.time; 
    const english = ['a', 'second', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years', 'ago'];
    const bangla = ['১', 'সেকেন্ড', 'সেকেন্ড', 'মিনিট', 'মিনিট', 'ঘণ্টা ', 'ঘণ্টা ', 'দিন', 'দিন', 'সপ্তাহ', 'সপ্তাহ', 'মাস', 'মাস', 'বছর', 'বছর', 'আগে'];
    
    const datetimeDigit = moment(time).fromNow(); 
    const datetimeDigitBn = (x) => x.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]); 
  
    const datetimeSpilt = (datetimeDigitBn(datetimeDigit).split(" ")).filter(x => english.includes(x));
  
    const datetimeSpiltIndex = (datetimeSpilt.map(x => english.indexOf(x )));
    const bn = datetimeSpiltIndex.map(y=> y = bangla[y] );
    const datetimeBn = (bn.toString()).split(",").join(" "); 
  
  return (
    <>
        {datetimeBn}
    </>
  )
}

export default NewsDatetimeCalculation