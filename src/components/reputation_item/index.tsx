import { ReputationItemWithCount } from '../../models/reputation'
import { Box, Divider, Fab, FormControl, TextField } from '@mui/material';

export default function ReputationItem(props: { item: ReputationItemWithCount, toggleChangeCount: (id: number, value: number) => void }) {
    function onChange(e: any) {
        props.toggleChangeCount(props.item.id, e.target.value)
    }
    function buttonClick(e: number) {
        return () => {
            const newValue = props.item.count + e
            props.toggleChangeCount(props.item.id, props.item.count + newValue > 0 ? newValue : 0)
        }
    }

    return (
        <>
            <Box sx={{ p: 2 }}>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} m={2}>
                    <img width={45} height={45} src={props.item.img} />
                    <Box ml={2}>
                        <h4>{props.item.name}</h4>
                        <h5>Количество репы: {props.item.value}</h5>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(-1)}>-1</Fab>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(-5)}>-5</Fab>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(-10)}>-10</Fab>
                        </Box>
                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField itemType='number' type='number' value={props.item.count} onChange={onChange} />
                        </FormControl>

                        <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(+1)}>+1</Fab>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(+5)}>+5</Fab>
                            <Fab sx={{ marginX: 2 }} size='small' color="primary" onClick={buttonClick(+10)}>+10</Fab>
                        </Box>


                    </Box>
                </Box>
            </Box>
            <Divider />
        </>
    )
}
