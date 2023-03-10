import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography, Stack } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const SelectModal = ({ name, data, placeholder, cValue, handleEvent, isValidate, message }) => {

    const handleChange = (event: SelectChangeEvent) => {
        handleEvent(name, event.target.value);
    };

    return (
        <>
            <Stack sx={{width:"100%"}}>
                <FormControl fullWidth>
                    <Select
                        value={cValue}
                        onChange={handleChange}
                        displayEmpty
                        sx={{ backgroundColor: "#f8f6f7" }}
                    >
                        <MenuItem value="" disabled>
                            <p>{placeholder}</p>
                        </MenuItem>
                        {data !== null && data.map(item => {
                            if(name === "MAIN_REASON_CD"){
                                return (
                                    <MenuItem key={item.MAIN_REASON_CD} value={item.MAIN_REASON_CD}>{item.MAIN_REASON_NM}</MenuItem>
                                );
                            }
                            else if(name === "SUB_REASON_CD"){
                                return (
                                    <MenuItem key={item.SUB_REASON_CD} value={item.SUB_REASON_CD}>{item.SUB_REASON_NM}</MenuItem>
                                );
                            }
                            else if(name === "DEPART_CD"){
                                return (
                                    <MenuItem key={item.DEPART_CD} value={item.DEPART_CD}>{item.DEPART_NM}</MenuItem>
                                );
                            }
                            else if(name.indexOf("DROP_OFF_CD") > -1){
                                return (
                                    <MenuItem key={item.DROP_OFF_CD} value={item.DROP_OFF_CD}>{item.DROP_OFF_NM}</MenuItem>
                                );
                            }
                            else{
                                return (
                                    <MenuItem key={item.ID} value={item.VALUE}>{item.VALUE}</MenuItem>
                                );
                            }
                        })}
                    </Select>
                </FormControl>
                {!isValidate && <Typography className='b-validate'><HighlightOffIcon sx={{width: '17px', height: '17px'}} />{message}</Typography> }
            </Stack>
        </>
    );
}

export default SelectModal;