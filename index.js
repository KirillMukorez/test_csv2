import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const rows = content.trim().split('\r\n');
  const data = rows.map((row) => row.split(','))
  console.log (`amount: ${data.length - 1}`)
  // END
}