import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';


const ReviewGame = () => {
    const { rating } = useSelector(state => state.rating);
    const [value, setValue] = React.useState(0);
    const sum = [];

    const funcSum = () => {
        rating.forEach(element => {
            sum.push(element.rating)
        });
    }

    const funcSumAllItems = () => {
        funcSum();
        return sum.reduce((sum1, elem) => (
            sum1 + elem
        ), 0);

    }

    const result = funcSumAllItems();
    const middleMean = result / sum.length

    useEffect(() => {
        setValue(middleMean)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating])

    return (
        <Rating
            value={value}
            name="simple-controlled"
        />
    )
}

export default ReviewGame;