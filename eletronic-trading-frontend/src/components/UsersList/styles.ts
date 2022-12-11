import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    width: 500px;
    height: 500px;
    border: 1px solid ${colors.primary};
    overflow-y: scroll;
`;

export const TableBody = styled.tbody`
`;

export const TableHeader = styled.th`
    width: 30%;
    color: ${colors.primary};
    font-size: 20px;
    font-weight: 700;
    text-align: justify;
`;

export const TableRow = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 36px);
    height: 30px;
    padding: 0 16px;
    border-bottom: 1px solid ${colors.primary};
`;

export const TableData = styled.td`
    width: 30%;
    color: ${colors.primary};
    text-align: justify;
    font-size: 15px;
`;
