import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

function Users() {

    const MyPaginate = styled(ReactPaginate).attrs({
        // You can redefine classes here, if you want.
        activeClassName: 'active', // default to "selected"
    })`
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style-type: none;
        padding: 0 5rem;
      
        li a {
          border-radius: 7px;
          padding: 0.1rem 1rem;
          border: gray 1px solid;
          cursor: pointer;
        }
        li.previous a,
        li.next a,
        li.break a {
          border-color: transparent;
        }
        li.active a {
          background-color: #0366d6;
          border-color: transparent;
          color: white;
          min-width: 32px;
        }
        li.disabled a {
          color: grey;
        }
        li.disable,
        li.disabled a {
          cursor: default;
        }
      `;

    const [userList, setUserList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=' + pageNumber)
            .then(function (response) {
                console.log(response);
                setUserList(response.data.data)
                setPageCount(response.data.total_pages)



            })
            .catch(function (error) {
                console.log(error);
                toast.error("enter the users wromg")
            });

    }, [pageNumber])
    const handlePageClick = (event) => {
        console.log(event.selected)
        let page = event.selected + 1
        if (page <= pageCount) {
            setPageNumber(page)
        }


    }




    return (

        <div className='container'>
            <div className='col-4 offset-4'>
                <h1>Users</h1>
                <table className='table table-responsive table-bordered' >

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Avatar</th>
                            <th>Email</th>
                            <th>First_Name</th>
                            <th>Last_Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userList.length != 0 &&
                            userList.map((element) => {
                                return (
                                    <tr>
                                        <td>{element.id}</td>
                                        <td><img src={element.avatar} alt="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></td>
                                        <th>{element.email}</th>
                                        <th>{element.first_name}</th>
                                        <th>{element.last_name}</th>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <MyPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />

            </div>
        </div>


    )
}

export default Users