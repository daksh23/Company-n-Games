import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import { Button, Select,InputLabel, MenuItem, FormControl } from "@mui/material";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getUsers, sendChanllenge} from "../../../Services/puzzleServices";

const ImageThumb = ({image}) => {
    return (<img
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{
        height: "450px",
        width: "450px"
    }}/>);
};

function Send() {
    const [userOptions,
        setUserOptions] = useState([]);
    const [user,
        setUser] = useState("");

    const [file,
        setFile] = useState("");
    const [Uploaded,
        setUploaded] = useState(true);

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
        setUploaded(false);
        toast("File Uploaded");
    };

    const submitHandle = (e) => {
        e.preventDefault();

        var formData = new FormData();
        formData.append("to", user);
        formData.append("puzzleImage", file);
        formData.append("allocatedTime", 180000);

        sendChanllenge(formData).then((res) => {
            console.log(res.data);
            const {data} = res;
            toast(data.message);
            setUser("");
            setFile("");
        });
    };

    const loadUsers = () => {
        getUsers().then((res) => {
            console.log(res.data.users);
            setUserOptions(res.data.users);
        });
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div>
            <Box
                component="form"
                sx={{
                "& > :not(style)": {
                    m: 1,
                    width: "25ch"
                }
            }}
                noValidate
                autoComplete="off"
                className="SendBox">
                {/* <TextField
          id="standard-basic"
          label="Colleagues"
          variant="standard"
          style={{
            width: "50%",
          }}
        /> */}
                <FormControl fullWidth>
                   <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                        value={user}
                        onChange={(e) => {
                        setUser(e.target.value);
                    }}
                        label="Select Person">
                        {/* <MenuItem  value={""}>Select</MenuItem> */}
                        {userOptions.map((x, i) => (
                            <MenuItem value={x.UserID._id}>{`${x.UserID.firstName} ${x.UserID.lastName}`}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    component="label"
                    style={{
                    backgroundColor: "black",
                    color: "white"
                }}>
                    Upload image
                    <input type="file" name="file" onChange={changeHandler} hidden/>
                </Button>
                <Button
                    variant="contained"
                    component="label"
                    disabled={Uploaded}
                    onClick={submitHandle}>
                    send
                </Button>
            </Box>
            <Box className="SendBox" mt={2}>
                {file && <ImageThumb image={file}/>}
            </Box>
            <ToastContainer/>
        </div>
    );
}

export default Send;
