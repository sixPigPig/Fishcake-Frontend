import React, { FC } from 'react';

interface Props {
    data:any
}
const Chart:FC<Props> = ({ data }) => {
  const total_value = data.reduce((a:any, b:any) => a + b.value, 0);
  const convertToPercent = (num: number) => Math.round((num / total_value) * 100);
  const convertToDegrees = (num: number) => Math.round((num / 100) * 360);

  const css_string = data
    .reduce((items:any, item:any, index:any, array:any) => {
      items.push(item);

      item.count = item.count || 0;
      item.color = item.color;
      item.count += array[index - 1]?.count || item.count;
      item.start_value = array[index - 1]?.count ? array[index - 1].count : 0;
      item.end_value = item.count += item.value;
      item.start_percent = convertToPercent(item.start_value);
      item.end_percent = convertToPercent(item.end_value);
      item.start_degrees = convertToDegrees(item.start_percent);
      item.end_degrees = convertToDegrees(item.end_percent);

      return items;
    }, [])
    .map((chart:any) => {
      const { start_degrees, end_degrees,color } = chart;
      return ` ${color} ${start_degrees}deg ${end_degrees}deg`;
    })
    .join();
  return (
    <div>
      <svg viewBox="0 0 800 800" xmlns='http://www.w3.org/2000/svg' className='w-full h-full rounded-full'>
        <foreignObject x='0' y='0' width='800' height='800'>
          <div
            //   xmlns='http://www.w3.org/1999/xhtml'
            className='w-full h-full'
            style={{
                background: `conic-gradient(${css_string})`,
              }}
            />
        </foreignObject>
      </svg>
    </div>
  );
};

export default Chart;
