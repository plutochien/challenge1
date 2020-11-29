import styled from 'styled-components';

export const Input = styled.input`
  border: 0;
  height: ${props => (props.type === 'radio' ? '30px' : '40px')};
  border-radius: 5px;
  text-indent: 10px;
  outline: none;
  font-size:20px;
  width: ${props => (props.type === 'radio' ? '40px' : '55%')};
}
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 8px 20px 8px 20px;
  margin: 0 20px 0 20px;
  background: #007bff;
  color: #fff;
  border-radius: 3px;
  border: 2px solid #007bff;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`;

export const RaidoGroup = styled.div`
  margin-left: 10px;
`;

export const Label = styled.label`
  vertical-align: Super;
  font-size: 18px;
  color: #0c5460;
    ${props =>
      props.priority === '0' &&
      `
           color: #B10DC9;
    `}
    ${props =>
      props.priority === '2' &&
      `
           color: #888888;
    `};
`;
