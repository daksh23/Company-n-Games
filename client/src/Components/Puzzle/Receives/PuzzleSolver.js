import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {submitPuzzle, getPuzzle} from "../../../Services/puzzleServices";
import {Button, Grid, Container} from "@mui/material";

function PuzzleSolver() {
    const {challengeId} = useParams();

    var timeFuncton = () => {};

    const [puzzle,
        setPuzzle] = useState([]);
    const [solution,
        setSolution] = useState([
        ...Array
            .from(Array(9))
            .map((_, index) => "")
    ]);

    const [time,
        setTime] = useState("");
    const [timeTaken,
        setTimeTaken] = useState(0);

    const onDragStart = (ev, from, from_id) => {
        ev
            .dataTransfer
            .setData("from", from);
        ev
            .dataTransfer
            .setData("from_id", + from_id);
    };

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    const onDrop = (ev, to, to_id) => {
        let from = ev
            .dataTransfer
            .getData("from");
        let from_id = ev
            .dataTransfer
            .getData("from_id");

        from_id = +from_id;

        if (from === "puzzle") {
            setPuzzle((prevPuzzle) => {
                return [...prevPuzzle].map((x, i) => (i === + from_id
                    ? ""
                    : x));
            });
            setSolution((prevSolution) => {
                return [...prevSolution].map((x, i) => i === + to_id
                    ? puzzle[from_id]
                    : x);
            });
        } else {
            setPuzzle((prevPuzzle) => {
                return [...prevPuzzle].map((x, i) => i === + to_id
                    ? solution[from_id]
                    : x);
            });
            setSolution((prevSolution) => {
                return [...prevSolution].map((x, i) => (i === + from_id
                    ? ""
                    : x));
            });
        }
    };

    const createTableCell = (table, i) => {
        return (
            <td
                id={`td_${i}`}
                style={{
                width: 200,
                background: "white",
                padding: "5px",
                height: "150px",
                border: '1px solid black'
            }}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => {
                onDrop(e, "solution", i);
            }}>
                {solution[i]
                    ? (<CardMedia
                        component="img"
                        sx={{
                        width: 200,
                        height: 150
                    }}
                        image={solution[i]}
                        alt="Used"
                        draggable
                        onDragStart={(e) => onDragStart(e, "solution", i)}/>)
                    : ("")}
            </td>
        );
    };

    const handleSubmit = (e) => {
        const data = {
            _id: challengeId,
            timeTaken,
            puzzleImages: solution.map((x) => (x === ""
                ? x
                : x.split("puzzle/")[1]))
        };

        submitPuzzle(data).then((res) => {
            const {data} = res;
            toast(data.message);
            window.location = "/puzzle";
        });
    };

    const loadPuzzle = (id) => {
        getPuzzle(id).then((res) => {
            const {data} = res;
            setPuzzle(data.puzzle.puzzleImages);
            updateTimer(data.puzzle.allocatedTime * 60 * 1000);
            // updateTimer(30 * 1000);
        });
    };

    const updateTimer = (timeleft) => {
        timeFuncton = setInterval(() => {
            console.log(timeleft);
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            if (timeleft >= 1000) {
                setTime(`${minutes}:${seconds}`);
                setTimeTaken((preTime) => (preTime += 1000));
            } else {
                clearInterval(timeFuncton);
                setTime("TIMES UP!!");
                handleSubmit();
            }
            timeleft -= 1000;
        }, 1000);
    };

    useEffect(() => {
        loadPuzzle(challengeId);
        clearInterval(timeFuncton);
    }, []);

    return (
        <Container fixed style={{padding:20, marginTop:20}}>

            <div>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Grid container spacing={1}>
                        {puzzle && puzzle.map((x, i) => (
                            <Grid
                                item
                                onDragOver={(e) => onDragOver(e)}
                                onDrop={(e) => {
                                onDrop(e, "puzzle", i);
                            }}>
                                {x === ""
                                    ? (<CardMedia
                                        style={{
                                        background: "gray",
                                        borderWidth: "2px",
                                        borderColor: "cyan"
                                    }}
                                        component="div"
                                        sx={{
                                        width: 150,
                                        height:100
                                    }}/>)
                                    : (<CardMedia
                                        component="img"
                                        sx={{
                                        width: 150,
                                        height: 100
                                    }}
                                        image={x}
                                        alt="Used"
                                        onDragStart={(e) => onDragStart(e, "puzzle", i)}
                                        draggable/>)}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <table>
                        <tbody>
                            <tr>
                                {createTableCell("solution", 0)}
                                {createTableCell("solution", 1)}
                                {createTableCell("solution", 2)}
                            </tr>

                            <tr>
                                {createTableCell("solution", 3)}
                                {createTableCell("solution", 4)}
                                {createTableCell("solution", 5)}
                            </tr>

                            <tr>
                                {createTableCell("solution", 6)}
                                {createTableCell("solution", 7)}
                                {createTableCell("solution", 8)}
                            </tr>
                        </tbody>
                    </table>
                </Grid>
            </Grid>

            </div>
            <div>
                <Grid
                    container
                    spacing={1}
                    style={{
                    marginTop: '10px'
                }}>
                    <Grid item xs={10}>
                        <h2 className="timeText">Time: {time}</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            size="large"
                            style={{
                            color: 'white'
                        }}
                            onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
           
            <ToastContainer/>
        </Container>
    );
}

export default PuzzleSolver;
