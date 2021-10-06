import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';

function Home(props) {
    const [apiData, setapiData] = useState(props.userData);
    const [value, setValue] = useState([1000, 4000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function valuetext(data) {
        return `$${data}`;
    }

    const handleFilterData = () => {
        let newData = props.userData.filter((item) => {
            let newbalance = item.balance.replace(",", "")
            newbalance = newbalance.replace("$", "");
            return newbalance >= value[0] && newbalance <= value[1]
        })
        setapiData(newData);
    }

    return (
        <div className="homeContainer">
            <div style={{ width: "100%" }}>
                <Link to="/non_active_users">
                    <Button style={{ margin: "10px", backgroundColor: "#394975" }} className="navLinks" variant="contained" startIcon={<AppBlockingIcon />}>
                        Non-Active Users
                    </Button>
                </Link>
                <div className="sliderContainer">
                    <span className="values">
                        <strong>${value[0]} - ${value[1]}</strong>
                    </span>
                    <Box sx={{ width: 300 }}>
                        <Typography id="input-slider" gutterBottom>
                            <b>Select price range</b>
                        </Typography>
                        <Slider
                            getAriaLabel={() => 'Price range'}
                            value={value}
                            min={1000}
                            max={4000}
                            onChange={handleChange}
                            disableSwap
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            style={{ color: "#394975" }}
                            valueLabelFormat={valuetext}
                        />
                        <Button onClick={handleFilterData} variant="outlined"
                            style={{ backgroundColor: "#394975", color: "white" }}>
                            Apply
                        </Button>
                    </Box>
                </div>
            </div>
            <div className="Wrapper">
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

        </div>
    )
}

export default Home
