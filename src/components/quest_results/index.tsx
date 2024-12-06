import { IQuest } from '../../models/quest'
import List from '@mui/material/List'
import QuestItem from '../quest_item'

export default function QuestResults(props: { items: IQuest[] }) {
    if (!props?.items?.length) {
        return null
    }
    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="li"
            aria-labelledby="nested-list-subheader"
        >
            {props.items.map(item => <QuestItem key={item.id} item={item} />)}
        </List>
    )
}
