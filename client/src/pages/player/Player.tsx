import React, { useState } from 'react'
import axios from 'axios'
import { Grid, Container, Stack, Divider, List, ListItem, ListItemText, Typography, Avatar, Paper } from '@mui/material';

export type TeamDataRawResponse = {
    id: number;
    logo_image: string;
    team: string;
    team_name: string;
}

export type PlayerDataRawResponse = {
    birth_date: string;
    college: string;
    height: string;
    id: number;
    name: string;
    position: string;
    weight: string;
    year_end: string;
    year_start: string;
}

export type PlayerRawResponse = {
    birth_city: string;
    birth_state: string;
    born: string;
    collage: string;
    height: string;
    id: number;
    player: string;
    weight: string;
}

const mockPlayerRawResponse = {
    birth_city: "Akron",
    birth_state: "Ohio",
    born: "1988",
    collage: "Davidson College",
    height: "190",
    id: 3343,
    player: "Stephen Curry",
    weight: "86"
}

const mockPlayerDataRawResponse = {
    birth_date: "March 14, 1988",
    college: "Davidson College",
    height: "6-3",
    id: 869,
    name: "Stephen Curry",
    position: "G",
    weight: "190",
    year_end: "2018",
    year_start: "2010"
}

const mockTeamDataRawResponse = {
    id: 9,
    logo_image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
    team: "GSW",
    team_name: "Golden State Warriors"
}

const Player: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [playerData, setPlayerData] = useState<PlayerRawResponse>(mockPlayerRawResponse);
    const [playerMetrics, setPlayerMetrics] = React.useState<PlayerDataRawResponse>(mockPlayerDataRawResponse);
    const [teamData, setTeamData] = React.useState<TeamDataRawResponse>(mockTeamDataRawResponse);
    const [playerSeasonData, setPlayerSeasonData] = React.useState();

    React.useEffect(() => {
        (async () => {
            setError(false);
            setLoading(true);
            try {
                // const response = await axios.get("http://localhost:8000/players/id/3343");
                const response = mockPlayerRawResponse;
                setPlayerData(response)
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setLoading(false);
        })()
    }, []);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/players/player/Stephen Curry")
                setPlayerMetrics(data)
            } catch (e) {
                console.log(!!e)
            }
        })()
    }, [])

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/teams/GSW")
                setTeamData(data as any)
            } catch (e) {
                console.log(!!e)
            }
        })()
    }, [])

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("http://localhost:8000/seasons/player/Stephen Curry")
                setPlayerSeasonData(data as any)
            } catch (e) {
                console.log(!!e)
            }
        })()
    }, [])

    const [firstName, lastName] = playerData?.player.split(" ");
    const calculateHeight = 190 / 30.48;
    const calculateWeight = 86 * 2.205;
    const [sizeInFeet, sizeInInches] = calculateHeight.toPrecision(2).toString().split(".")

    return (
        <div>
            {!loading && !error ? <Container>
                <Grid container flexDirection="row">
                    <Grid item xs={12} md={5} id="playerName">
                        <Typography variant="h4" component="h1" marginBottom={0}>{firstName}</Typography>
                        <Stack flex={1} direction="row" spacing={2} sx={{ alignItems: "center" }} divider={<Divider orientation="vertical" flexItem />} >
                            <Typography variant="h1" component="h2" style={{ textTransform: "uppercase", fontSize: "6em", margin: 0, }}>{lastName}</Typography>
                            <Avatar
                                alt={teamData.team}
                                src={teamData.logo_image}
                                sx={{ width: 50, height: 50 }}
                            />
                            <Typography variant="h3" component="h3" sx={{ display: "flex", alignItems: "center" }} >{playerMetrics.position}</Typography>
                        </Stack>
                        <hr />
                        <Stack flex={1} direction="row" justifyContent="space-between">
                            <Stack id="playerHeight" justifyContent="space-around">
                                <Typography variant='body1' component="p" pt={2} >Height</Typography>
                                <Stack id="playerMetrics" direction="row">
                                    <Typography id="playerHeightFeet" variant='h3' component="p">{sizeInFeet}<Typography variant='body1' component="span">ft</Typography></Typography>
                                    <Typography id="playerHeightInches" variant='h3' component="p" pl={1}>{sizeInInches}<Typography variant='body1' component="span">in</Typography></Typography>
                                </Stack>
                            </Stack>
                            <Stack id="playerWeightContainer">
                                <Typography variant='body1' component="p" pt={2}>Weight</Typography>
                                <Stack id="playerMetricWeight" direction="row">
                                    <Typography id="playerWeight" variant='h3' component="p">{Math.ceil(calculateWeight)}<Typography variant='body1' component="span">lbs</Typography></Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                        <hr />
                        <List dense>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>Born:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerMetrics.birth_date}</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>City:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerData?.birth_city}</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>State:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerData?.birth_state}</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>College:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerMetrics.college}</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>NBA Debut:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerMetrics.year_start}</ListItemText>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText sx={{ flexBasis: 0 }}>Previous Season:</ListItemText>
                                <ListItemText sx={{ flexBasis: 0 }}>{playerMetrics.year_end}</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={7} id="playerImage">
                        <div style={{ backgroundImage: "url(https://www.pngarts.com/files/5/Joel-Embiid-PNG-Image.png)", backgroundSize: "cover", paddingTop: "70%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                    </Grid> 
                </Grid>
                <div>
                    <h1>Component With Most Recent Stats</h1>
                    <div id="dataTable">
                        <table>
                            <tr>
                                <th>MPG</th>
                                <th>FG%</th>
                                <th>3P%</th>
                                <th>FT%</th>
                                <th>PPG</th>
                                <th>RPG</th>
                                <th>APG</th>
                                <th>BPG</th>
                            </tr>
                            <tr>
                                <td>Row1 Column1 Value</td>
                                <td>Row1 Column2 Value</td>
                                <td>Row1 Column3 Value</td>
                                <td>Row1 Column4 Value</td>
                                <td>Row1 Column5 Value</td>
                                <td>Row1 Column6 Value</td>
                                <td>Row1 Column7 Value</td>
                                <td>Row1 Column8 Value</td>
                            </tr>
                            <tr>
                                <td>Row2 Column1 Value</td>
                                <td>Row2 Column2 Value</td>
                                <td>Row2 Column3 Value</td>
                                <td>Row2 Column4 Value</td>
                                <td>Row2 Column5 Value</td>
                                <td>Row2 Column6 Value</td>
                                <td>Row2 Column7 Value</td>
                                <td>Row2 Column8 Value</td>
                            </tr>
                        </table>
                    </div>
                </div></Container> : <h1>Loading...</h1>}
        </div>
    )
}

export default Player