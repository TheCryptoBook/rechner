import styled from "styled-components";

//  Main
export const BodyContainer = styled.div`
  min-height: calc(100vh - 105px);
`;

export const InputZeile = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 20px);
  margin: 15px 5px 5px 5px;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  color: #7e7e7e;
  border-color: #e6e6e6;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`;

export const Td = styled.td`
  text-align: center;
  padding: 3px;
  font-size: 14px;
  color: #7e7e7e;
  border-color: #e6e6e6;
  border-top-width: 1px;
  border-top-style: solid;
`;

export const Text = styled.p`
  font-weight: bold;
  color: #7e7e7e;
  text-align: center;
`;

export const Span = styled.span`
  color: #e63f64;
`;
