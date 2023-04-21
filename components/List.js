import { Card } from "@mui/material"

export default function Lista({lista}) {
    return (
        <Card sx={{ paddingRight: "20px", textAlign: 'left', }} >
            <ul>
                {lista.map((item) =>
                    <li sx={{ color: 'black',}}>{item.elemento}</li>
                )}
            </ul>
        </Card>
    )
}