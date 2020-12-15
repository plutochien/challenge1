import styled from 'styled-components';

export const PostContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid rgb(230, 236, 240);
`;

export const PostTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
export const PostBody = styled.div`
  font-size: 15px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-left: auto;
  margin-top: 5px;
  padding: 5px 5px 0 5px;
  border: none;
  background: none;
  outline: none;
  &:hover {
    background: rgb(224, 239, 250);
    border-radius: 25px;
    -webkit-transition: background-color 0s;
    transition: background-color 0s;
  }
`;
