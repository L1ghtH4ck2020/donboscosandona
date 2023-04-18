import { Card } from "@mui/material"

export default function Lista({lista}) {
    return (
        <Card>
            <ul>
                {lista.map((item) =>
                    <li sx={{ color: 'black',}}>{item.elemento}</li>
                )}
            </ul>
        </Card>
    )
}