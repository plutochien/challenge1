import styled from 'styled-components';

export const UserContainer = styled.div`
  a {
    display: flex;
    text-decoration: none;
    width: auto;

    padding: 10px 15px;
    min-width: 570px;

    &:hover {
      background: rgb(245, 248, 250);
      -webkit-transition: background-color 1s;
      transition: background-color 1s;
    }
  }
`;

export const Img = styled.img`
  width: 50px;
  height: auto;
  border-radius: 25px;
`;

export const UserInfoContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  color: ${props => (props.isUserName ? 'rgb(101, 119, 134)' : 'black')};
  font-weight: bold;
`;
