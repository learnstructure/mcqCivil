import Mcq from './Mcq';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import '../App.css';
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import { createContext } from 'react';
export const McqContext = createContext()
export default function McqAll() {
    const { data, descrip } = useOutletContext()

    const mcqElements = data.map((mcq) => {

        return (
            <McqContext.Provider value={{ mcq }} key={mcq.id}>
                <Mcq />
            </McqContext.Provider>)
    })

    return (
        <div className="App">
            <Helmet>
                <title>{descrip}</title>
                <meta name="description" content={"Practise civil engineering " + descrip + " multiple choice questions (mcq) loksewa, NEC license preparation"} />
            </Helmet>
            <div >
                {mcqElements}
            </div>
            <div className='arrows'>
                <div onClick={() => window.scrollBy({ top: -6 * window.innerHeight, left: 0, behavior: 'smooth' })}><BsFillArrowLeftSquareFill size={"2rem"} title="About 20 questions backward" /></div>
                <div onClick={() => window.scrollBy({ top: 6 * window.innerHeight, left: 0, behavior: 'smooth' })}><BsFillArrowRightSquareFill size={"2rem"} title="About 20 questions forward" /></div>
            </div>

        </div>
    )
}