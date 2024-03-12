import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tooltip } from '@mui/material';
import PageIllustration from './page-illustration';


function createData(
  questions: string,
  value1: string,
  etf: string,
  sgb: string,
  ppm: string,
  // data: string
) {
  return { questions, value1, etf, sgb, ppm };
}

const rows = [
  createData('Ownership of hard asset?', 'Yes', 'No', 'No', 'Yes'),
  createData('Low entry cost?', 'Yes', 'No', 'No', 'No'),
  createData('Is it secure?', 'Yes', 'Yes', 'Yes', 'No'),
  createData('Is quality guaranteed?', 'Yes', 'Yes', 'Yes', 'No'),
  createData('Lock-in period?', 'No', 'No', 'Yes', 'No'),
  createData('Instant liquidity?', 'Yes', 'Yes', 'No', 'No')
];

export default function Advantage() {
  return (
    <section>
      <div className="max-w-8xl px-4 sm:px-6">
        <div className="py-12 md:py-20 h-5/6 flex flex-col items-center justify-center">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-20" data-aos='fade-in' data-aos-delay='300'>
            <h2 className="mb-4 font-bold text-7xl ">The <span className="text-gold-500">Value1</span> Advantage</h2>
          </div>

          {/* Items */}
          <div className="flex flex-col items-center justify-around max-w-4xl" data-aos='fade-in' data-aos-delay='400'>
          <PageIllustration />
            <TableContainer component={Paper} className='rounded-xl overflow-hidden'>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead>
                  <TableRow className='bg-gold-800'>
                    <TableCell className='w-80'>{}</TableCell>
                    <TableCell align="center" className='w-32 text-white font-bold text-md shadow-2xl bg-gold-500'>Value1</TableCell>
                    <TableCell align="center" className='w-32 text-white font-semibold text-md'>ETF</TableCell>
                    <TableCell align="center" className='w-32 text-white font-semibold text-md'>Sovereign Gold bonds</TableCell>
                    <TableCell align="center" className='w-32 text-white font-semibold text-md'>Physical precious metals</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.questions}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align='center' className='font-semibold'>
                        {row.questions}
                      </TableCell>
                      {/* <Tooltip title={row.data} placement='right'> */}
                        <TableCell align="center" className='text-white font-bold bg-gold-500 hover:bg-black-600 active:bg-black-500 tb-hover'>{row.value1}</TableCell>
                      {/* </Tooltip> */}
                      <TableCell align="center">{row.etf}</TableCell>
                      <TableCell align="center">{row.sgb}</TableCell>
                      <TableCell align="center">{row.ppm}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

        pP</div>
      </div>
    </section>
  )
}
