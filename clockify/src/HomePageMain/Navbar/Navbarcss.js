import styled from "styled-components";


export const AppAlignment = styled.div`
  text-align: center;
`


export const Maindivline = styled.div`
  display: flex;
  margin-left: 5%;
`;

export const Signbutt = styled.button`
  height: 2%;
  width: 7%;
  margin-top: 30px;
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

export const Plinthird = styled.a`
  color: #white;
  &:hover {
    color: white;
  }
`;

export const Plinkone = styled.p`
  margin-top: 41px;
  color: #5a6b7b;
  font-size: 15.8px;
  &:hover {
    color: #03a9f4;
  }
`;

export const Plinksecond = styled.p`
  margin-top: 41px;
  color: #5a6b7b;
  font-size: 15.8px;
  &:hover {
    color: #03a9f4;
  }
`;
