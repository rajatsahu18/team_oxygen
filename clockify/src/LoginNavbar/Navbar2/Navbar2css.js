import styled from "styled-components";

export const Navbarlogin = styled.div`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  align-items: center;
  border: 0.1px solid whitesmoke;
`;

export const Plinksecond = styled.p`
  margin-top: 41px;
  color: #5a6b7b;
  font-size: 15.8px;
  &:hover {
    color: #03a9f4;
  }
`;

export const Signbutt = styled.button`
  height: 2%;
  width: 7%;
  
  padding: 8px;
  margin-left: 3%;
  border-color: #03a9f4;
  border: 1px solid #03a9f4;
  background-color: #f8fdff;
  color: #03a9f4;
  &:hover {
    background-color: #03a9f4;
    color: white;
    .Plinthird {
      color: white;
    }
  }
`;