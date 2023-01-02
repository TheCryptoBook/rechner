import styled from "styled-components"

//  APP
export const Body = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
    width: 100vw;
    padding: 15px;
`

//  Header
export const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

//  Main
export const BodyContainer = styled.div`
    min-height: calc(100vh - 105px);
`

export const InputZeile = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 10px);
  margin: 15px 5px 5px 5px;
`

export const Tr = styled.tr`
  
`

export const Th = styled.th`
  color: #7E7E7E;
  border-color: #E6E6E6;
  border-bottom-width: 2px;
  border-bottom-style: solid;
`

export const Td = styled.td`
  text-align: center;
  padding: 3px;
  font-size: 14px;
  color: #7E7E7E;
  border-color: #E6E6E6;
  border-top-width: 1px;
  border-top-style: solid;
`

export const Text = styled.p`
  font-weight: bold;
  color: #7e7e7e;
  text-align: center;
`

export const Span = styled.span`
  color: #E63F64
`