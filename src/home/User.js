import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {API_URL} from '../utilities'
import MyCard from '../components/Card';
import Loader from '../components/Loader';
import Error from '../components/Error';

function User() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        try {
            setLoading(true)
            axios
            .get(`${API_URL}api/users`)
            .then(function (response) {
              setUsers(response?.data)
            })
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    },[])

    const renderCards = users.map((user, index) => (
        <MyCard key={index} data={user} type={'users'}/>
    ))

    if (error) return <Error />
    if (loading) return <Loader />

    return (
        <div className='userlist'>
            <h1 className='mb-5 mt-5'>Customers List</h1>
            <div className='mb-5 userdetails'>
            {renderCards}
            </div>
        </div>
    );
}

export default User;