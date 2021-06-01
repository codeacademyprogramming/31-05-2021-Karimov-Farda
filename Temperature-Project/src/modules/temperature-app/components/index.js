import * as React from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { ASYNC_STATUS } from '../../../redux/consts';
import {TemperatureList} from '../components/table'
export const MainPage = () => {
    const temperatureBranch = useSelector((state) => state.temperature);
    console.log(temperatureBranch)
    return (
        <div>
            <Box width="90%" margin="0 auto" paddingTop={3}>
               <TemperatureList></TemperatureList>
                

            </Box>        </div>
    );
}

