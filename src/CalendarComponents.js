import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
`;

export const PagingButton = styled.button`
  display: inline-block;
  background-color: #3f51b5;
  color: #ffffff;
  font-size: 24px;
  border: none;
  border-radius: 4px;
  margin: 12px;
  cursor: pointer;
  &:hover {
    background-color: #334296;
  }
`;

export const Day = styled.div`
  box-sizing: border-box;
  font-size: 24px;
  width: ${ 100 / 7 }%;
  padding: 8px;
  background-color: ${props => props.today ? '#3f51b5' : '#f0f0f0'};
  color: ${props => props.today ? '#ffffff' : '#000000'};
  border: 2px solid #ffffff;
  height: 64px;
`;

export const DayHeader = styled(Day)`
  text-align: center;
  font-size: 16px;
  padding-top: 12px;
  height: 48px;
`;
