import styled from 'styled-components';

export const FeedbackButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  min-width: 100px;
  min-height: 50px;
  border-radius: 10px;
  background-color: #dddddd;
  font-size: 20px;

  :first-child {
    background-color: #72e772;
  }

  :last-child {
    background-color: #ff7974;
  }

  :not(:last-child) {
    margin-right: 20px;
  }

  :hover,
  :focus {
    :first-child {
      background-color: #46cf46;
    }
    :nth-child(2) {
      background-color: #c0c0c0;
    }
    :last-child {
      background-color: #eb5550;
    }
  }
`;
