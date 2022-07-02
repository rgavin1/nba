import React from 'react'
import axios from 'axios'
import { Grid, Container, Stack, Divider, List, ListItem, ListItemText } from '@mui/material';

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

const Player: React.FC = () => {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [playerData, setPlayerData] = React.useState();

    React.useEffect(() => {
        (async () => {
            setError(false);
            setLoading(true);
            try {
                // const response = await axios.get("http://localhost:8000/players/id/3343");
                const response = mockPlayerRawResponse;
                console.log('response', response)
            } catch (e) {
                console.log(e);
                setError(true);
            }
            setLoading(false);
        })()
    }, [])


    return (
        <div>
            {!loading && !error ? <Container>
                <Grid container flexDirection="row">
                    <Grid item xs={12} md={3} id="playerName">
                        <h4>First Name</h4>
                        <h1>Last Name</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={12} md={9} id="playerdata">
                        <Stack flex={1} direction="row" spacing={2}>
                            <p>Team Logo</p>
                            <Stack spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />}>
                                <p>Player's Jersey #</p>
                                <p>Position</p>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} md={3} item id="playersBodyComposition">
                        <Stack flex={1} direction="row" justifyContent="space-between">
                            <Stack id="playerHeight">
                                <h3>Height</h3>
                                <Stack id="playerMetrics" direction="row" justifyContent="space-between">
                                    <div id="playerHeightFeet"># ft</div>
                                    <div id="playerHeightInches"># in</div>
                                </Stack>
                            </Stack>
                            <Stack id="playerWeight">
                                <h3>Weight</h3>
                                <div id="playerWeight"># lbs</div>
                            </Stack>
                        </Stack>
                        <hr />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <List dense>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>Born:</ListItemText>
                                    <ListItemText>MM/DD/YYYY</ListItemText>
                                </Stack>
                            </ListItem>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>City:</ListItemText>
                                    <ListItemText>#########</ListItemText>
                                </Stack>
                            </ListItem>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>State:</ListItemText>
                                    <ListItemText>#########</ListItemText>
                                </Stack>
                            </ListItem>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>College:</ListItemText>
                                    <ListItemText>#########</ListItemText>
                                </Stack>
                            </ListItem>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>NBA Debut:</ListItemText>
                                    <ListItemText>YYYY</ListItemText>
                                </Stack>
                            </ListItem>
                            <ListItem style={{ paddingLeft: "0", paddingRight: "0" }}>
                                <Stack flex={1} direction="row" justifyContent="space-between">
                                    <ListItemText>Previouly:</ListItemText>
                                    <ListItemText>TEAM ABBRE. YYYY-YYYY</ListItemText>
                                </Stack>
                            </ListItem>
                        </List>
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