import { Card } from "@mui/material"

export default function Lista({lista}) {
    return (
        <Card sx={{ paddingRight: "20px", textAlign: 'left', }} xs={100}>
            <ul>
                {lista.map((item) =>
                    <li sx={{ color: 'black',}}>{item.elemento}</li>
                )}
            </ul>
        </Card>
    )
}