import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  background-color: ${props => (props.isSelected ? '#17a2b8' : '#6c757d')};
  border-color: ${props => (props.isSelected ? '#17a2b8' : '#6c757d')};
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
