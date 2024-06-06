import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import moment from 'moment';
import { useParams, useNavigate } from 'react-router-dom';
import MyCard from '../components/Card'
import {API_URL} from '../utilities'
import Loader from '../components/Loader';
import Error from '../components/Error';
function Home() {

   const [data, setData] = useState([])
   const [rewards, setRewards] = useState([])
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   const [sort, setSort] = useState("All")
   const { id } = useParams();
   const navigate = useNavigate();

    useEffect(() => {
        try {
            setLoading(true)
            axios
            .get(`${API_URL}api/getDetails/${id}`,  { params: { sort } })
            .then(function (response) {
              setData(response?.data?.transaction)
              setRewards(response?.data?.rewards)
            })
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    },[sort])

    const renderCards = data.map((transaction, index) => (
        <MyCard key={index} data={transaction} type={'details'}/>
    ))

    const handleSelect = (key) => {
        setSort(key)
    }

    const RenderSortButton = () => {
    if(rewards.length === 0) return
       const keys = Object.keys(rewards.monthlyRewards)  
       return(
        <>
        <DropdownButton onSelect={handleSelect} id="dropdown-basic-button" title={sort === 'All' ? "3 Months" : moment(sort).format("MMMM") } className='sort' variant='secondary'>
        <Dropdown.Item key="All" eventKey="All">3 Months</Dropdown.Item>
        {keys.map((key) => {
        return(
            <Dropdown.Item key={moment(key).format("MMMM")} eventKey={key}>{moment(key).format("MMMM")}</Dropdown.Item>
        )})}
      </DropdownButton>
      </>
       )
    }
    if (error) return <Error />
    if (loading) return <Loader />
    return (
        <div className='Home'>
          <div className='goBack'><span onClick={() => navigate(-1)} className='backbutton'> ← Go Back</span></div>
            <div className='Main'>
                <div className='TotalRewards commoncard'>
                     <h4>Total Rewards</h4>
                     <h4>{rewards?.totalRewards}</h4>
                </div>
                <div className='ThisMonth commoncard'> 
                    <h4 className='textcenter'>{`${sort === 'All' ? 'This' : moment(sort).format("MMMM")} Month Rewards`}</h4>
                    <h4>{rewards?.currentMonthRewards}</h4>
                </div>
            </div>
            <div className='history'>
           <h3>Transaction History</h3> 
            <RenderSortButton />
           </div>
            {renderCards}
        </div>
    );
}

export default Home;