import React from 'react'

const filterYears = ({setYear,text,gener,setNumber}) => {
    const funYear = (e) => {
        const year = e.target.value
      setYear(gener === 0 ? year : 2023)
      setNumber(1)
    }
  return (
    <div className='yeares'>
          <select className='years'  onChange={funYear}>
                <option className='year' value={2023}>Choose a Year</option>
                <option className='year' value={2023}>2023</option>
                <option className='year' value={2022}>2022</option>
                <option className='year' value={2021}>2021</option>
                <option className='year' value={2020}>2020</option>
                <option className='year' value={2019}>2019</option>
                <option className='year' value={2018}>2018</option>
                <option className='year' value={2017}>2017</option>
                <option className='year' value={2016}>2016</option>
                <option className='year' value={2015}>2015</option>
                <option className='year' value={2014}>2014</option>
                <option className='year' value={2013}>2013</option>
                <option className='year' value={2012}>2012</option>
                <option className='year' value={2011}>2011</option>
                <option className='year' value={2010}>2010</option>
                <option className='year' value={2009}>2009</option>
                <option className='year' value={2008}>2008</option>
                <option className='year' value={2004}>2004</option>
                <option className='year' value={2003}>2003</option>
                <option className='year' value={2002}>2002</option>
                <option className='year' value={2001}>2001</option>
                <option className='year' value={2000}>2000</option>
      </select>
    </div>
  )
}

export default filterYears
