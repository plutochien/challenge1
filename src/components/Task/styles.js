import styled from 'styled-components';

export const Row = styled.li`
  display: flex;
  width: auto;
  height: 50px;
  align-items: center;
  list-style: none;
  margin: 10px;
  border-bottom: 1px solid #e1e1e1;
  background: white;
  border-radius: 5px;
  padding: 0 0 0 20px;
  font-size: 20px;
`;

export const Text = styled.span`
  flex: 1 1;
  color: #0c5460;
  text-align: justify;
  word-break: break-all;
  text-decoration: ${props =>
    props.isComplete ? 'line-through #cd5c5c' : 'none'};
`;

export const Order = styled.span`
  background: #007bff;
  border-radius: 15px;
  color: #ffffff;
  display: inline-block;
  font-weight: bold;
  line-height: 30px;
  margin-right: 15px;
  text-align: center;
  width: 30px;
  font-weight:200px;
`;

export const Button = styled.button`
  color: white;
  background-color: ${props => (props.isComplete ? '#FFC106' : '#28a745')};
  border-color: ${props => (props.isComplete ? '#FFC106' : '#28a745')};
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  color: white;
  background-color: #DC354A;
  border-color: #DC354A;
  text-align: center;
  vertical-align: middle;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;

export const Badge = styled.span`
  color: #0c5460 ;
  background-color: #ffc107;
  border-color: #ffc107;
  display: inline-block;
  padding: 4px 6px;
  font-size: 75%;
  font-weight: 200;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 4px;
  margin-left: 10px;
`;
