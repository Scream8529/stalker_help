import { FormEvent, useState } from 'react'
import { questionsConst } from '../../constants/questions';
import { IQuest } from '../../models/quest';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import QuestResults from '../../components/quest_results';
import { Box, Container } from '@mui/material';

const switchContsnts = [
    {
        value: 'search',
        name: 'Поиск',
    },
    {
        value: 'questions',
        name: 'Все вопросы',
    },
]

export default function QuestionsContainer() {
    const [state, setState] = useState(switchContsnts[0].value)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState<IQuest[]>([])

    function onChangeSearchInput(e: any) { setSearch(e.target.value) }

    function toggleChangeSelect(e: any) {
        setState(e.target.value)
    }

    function searchSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let result: IQuest[] = [];
        questionsConst.forEach(item => {
            if (item.quest.includes(search)) {
                result.push(item)
            }
        })
        setSearchResult(result)
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{ p: 2, bgcolor: 'main' }} >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Показывать:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state}
                        label="Показывать:"
                        onChange={toggleChangeSelect}
                    >
                        {switchContsnts.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            {state === 'search' &&
                <>
                    <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                        <form onSubmit={searchSubmit}>
                            <FormControl fullWidth>
                                <TextField id="outlined-basic"
                                    label="Поиск" variant="outlined"
                                    value={search} onChange={onChangeSearchInput}
                                />
                                <Button sx={{ marginTop: '5px' }} type='submit' variant="contained">Поиск</Button>
                            </FormControl>

                        </form>
                    </Box>
                    <QuestResults items={searchResult} />
                </>
            }
            {state === 'questions' && <QuestResults items={questionsConst} />}
        </Container >
    )
}
