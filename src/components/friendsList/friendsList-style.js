import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 30%;
  margin: 0 auto 40px;
  list-style: none;
`;

export const FriendItem = styled.li`
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`;

export const FriendStatus = styled.span`
  margin: 0 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #d42929;
  ${props =>
    props.online &&
    `
      background-color: #008000;
    `}
`;

export const FriendImg = styled.img`
  width: 100px;
  border-radius: 15px;
  margin: 10px 15px 10px 0;
`;

export const FriendName = styled.p`
  font-weight: 700;
  font-size: 35px;
`;
