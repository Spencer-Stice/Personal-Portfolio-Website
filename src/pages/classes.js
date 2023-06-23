import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Helmet } from 'react-helmet';
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

const csClasses = [
  'Artificial Intelligence',
  'Machine Learning',
  'Algorithms and Complexity',
  'Operating Systems',
  'Computer Networking',
  'Software Construction (github, linux, etc)',
];

const mathClasses = [
  'Upper Division Linear Algebra',
  'Multivariable Calculus',
  'Lower Division Linear Algebra',
  'Differential Equations',
  'Theory of Interest (finance)',
];

const eeClasses = [
  'Transistor Circuits',
  'Computer Organization',
  'Systems and Signals (fourier)',
  'Logic Design',
  'Verilog FPGA Lab',
  'Engineering Design: Internet of Things',
];

const physicsClasses = [
  'Circuits and Electromagnetism Lab',
  'Electromagnetism and Relativity',
  'Fluids and EM',
  'Mechanics',
];

const miscClasses = [
  'Astrobiology',
  'History of Rock and Roll',
];

export default function Classes() {
  return (
    <div className="classes-div">
      <ThemeProvider theme={theme}>
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Computer Science</StyledTableCell>
                <StyledTableCell>Math</StyledTableCell>
                <StyledTableCell>Electrical Engineering</StyledTableCell>
                <StyledTableCell>Physics</StyledTableCell>
                <StyledTableCell>Misc</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: Math.max(csClasses.length, mathClasses.length, eeClasses.length, physicsClasses.length, miscClasses.length) }).map((_, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{csClasses[index]}</StyledTableCell>
                  <StyledTableCell>{mathClasses[index]}</StyledTableCell>
                  <StyledTableCell>{eeClasses[index]}</StyledTableCell>
                  <StyledTableCell>{physicsClasses[index]}</StyledTableCell>
                  <StyledTableCell>{miscClasses[index]}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </div>
  );
}
