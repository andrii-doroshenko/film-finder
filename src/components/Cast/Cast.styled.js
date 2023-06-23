import styled from 'styled-components';

export const ListCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Card = styled.li`
  width: 100px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    text-align: center;
  }
`;
