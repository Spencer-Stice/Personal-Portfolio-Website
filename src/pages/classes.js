import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Helmet} from 'react-helmet';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/classes.css';
import { DonutLarge } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 30,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const theme = createTheme({
    palette: {
      primary: {
        main: "#f56702",
      },
    },
  });

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  cs: string,
  math: string,
  ee: string,
  physics: string,
  misc: string,
) {
  return { cs, math, ee, physics, misc };
}

const rows = [
  createData('Machine Learning', 'Linear Algebra', 'Transistor Circuits', 'Circuits and Electromagnetism Lab', 'Astrobiology'),
  createData('Algorithms', 'Differential Equations', 'Systems and Signals', 'Electromagnetism and Relativity', 'History of Rock and Roll'),
  createData('Operating Systems', 'Multivariable Calculus', 'Logic Design of Digital Systems', 'Fluids and EM', 'History of Africa'),
  createData('Software Construction Lab', '', 'Intro to Electrical Engineering', 'Mechanics', ''),
  createData('Computer Organization', '', 'Engineering Design: Internet of Things', '', ''),
  createData('Intro to Computer Science', '', '', '', ''),
];

export default function Classes() {
  return (
    <div class="classes-div">
        <ThemeProvider theme={theme}>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Computer Science</StyledTableCell>
            <StyledTableCell >Math</StyledTableCell>
            <StyledTableCell >Electrical Engineering</StyledTableCell>
            <StyledTableCell >Physics</StyledTableCell>
            <StyledTableCell >Misc</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.cs}>
              <StyledTableCell component="th" scope="row">
                {row.cs}
              </StyledTableCell>
              <StyledTableCell >{row.math}</StyledTableCell>
              <StyledTableCell >{row.ee}</StyledTableCell>
              <StyledTableCell >{row.physics}</StyledTableCell>
              <StyledTableCell >{row.misc}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
    </div>
  );
}