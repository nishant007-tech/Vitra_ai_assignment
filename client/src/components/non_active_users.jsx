import React, { useEffect, useState } from 'react'
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function Non_active_users(props) {

    const [apiData, setapiData] = useState([]);
    useEffect(() => {
        let newData = props.userData.filter((item) => {
            let newbalance = item.balance.replace(",", "")
            newbalance = newbalance.replace("$", "");
            return newbalance < 2000 && item.isActive == false
        })
        setapiData(newData);

    }, [])
    return (
        <div className="Wrapper nonActiveContainer">
            <Link to="/">
                <Button style={{ margin: "10px", backgroundColor: "#394975" }} className="navLinks" variant="contained" startIcon={<HomeIcon />}>
                    Home
                </Button>
            </Link>
            <div className="containerCard">
                {apiData.length > 0 &&
                    apiData.map(item => (
                        <div key={item._id} className="card">
                            <AccountBoxTwoToneIcon fontSize="large" className="Icons" />
                            <p className="Count">{item.balance}</p>
                            <p>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Non_active_users
