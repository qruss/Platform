import React, { useEffect, useState } from 'react';
import './styles.css';
import CheckboxProton from '../../common/CheckboxProton';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme,ThemeProvider, experimental_sx as sx} from '@mui/material/styles';


const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root:  sx({
          borderRadius: '25px',
          boxShadow: '0 1px 5px rgb(138, 137, 137)',
          borderRadius:'14px',
          fontFamily: `'Open Sans', sans-serif`,
       }),
        
    },
    
  },
    MuiAccordionSummary: {
      styleOverrides: {
        root:  sx({
          height: '2rem',
          borderRadius:'10px',
          textTransform: 'unset !important',
          padding: '1px 30px',
          fontFamily: `'Open Sans', sans-serif`,
          color: '#AB46D2',
          fontSize: '5',
          display: 'flex',
          alignItems: 'center',
          
          '&:hover': {
            color: "#FCF8E8",
              transition: 'color .2s',
              backgroundColor: '#CA82FF',
              transition: 'backgroundcolor .1s',
            transform: 'scale(1.04)',
       },
       
       }),
        
    },
    
  },
}});



const FilterPanel = (
    {skills,changeChecked1,languages,changeChecked2}
) =>{ 
  const [expanded, setExpanded] = useState(false);

const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <div>
    <p className='title'>FILTERS</p>
  <div className='FilterPanel'>
    
    <div className="Accordion">
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p className='label'>Skills</p>
        </AccordionSummary>
        <AccordionDetails>
        <div className='input-group'>
      
      {skills.map((option) => (
        <CheckboxProton
          key={option.id}
          option={option}
          changeChecked={changeChecked1}
        />
      ))}
    </div>
        </AccordionDetails>
      </Accordion>
      </div>

      <div className="Accordion">
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <p className='label'>Language</p>
        </AccordionSummary>
        <AccordionDetails>
        <div className='input-group'>
      
        {languages.map((option) => (
        <CheckboxProton
          key={option.id}
          option={option}
          changeChecked={changeChecked2}
        />
      ))}
    </div>
        </AccordionDetails>
      </Accordion>
      </div>  
    </div>
    </div>
    </ThemeProvider>
); }

export default FilterPanel;
