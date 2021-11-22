import React from 'react'
import { Grid } from '@material-ui/core';
import {useSelector} from 'react-redux';

import SavedCardItem from './SavedCardItem/SavedCardItem'
import NoItemsSaved from './NoItemsSaved';

const SavedCardGrid = () => {

    const cards = useSelector((state)=> state.cards)

    return (
        !cards.length ? <NoItemsSaved /> : (
            <Grid  container alignItems="stretch" spacing={3}>
                {
                    cards.map((item) => (
                        <Grid item key={item.char_id}    >
                            <SavedCardItem item={item} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default SavedCardGrid
