import { IQuest } from '../../models/quest'
import { Divider, ListItem, ListItemText, Typography } from '@mui/material'

export default function QuestItem({ item }: { item: IQuest }) {
    return (
        <>
            <ListItem>
                <ListItemText>
                    <Typography>{item.quest}</Typography>
                    <Typography>Ответ: <b>{item.answer}</b></Typography>
                </ListItemText >
            </ListItem>
            <Divider variant="fullWidth" component="li" />
        </>
    )
}
