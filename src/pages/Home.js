import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/slices.js/movieSlice';
import { Box } from '@mui/material';
import Media from '../components/Media';

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movieData);

    console.log(movies, 'movies')

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            <h2>
                Taste Fusion
            </h2>
            <p>
                The ultimate destination for culinary enthusiasts. <br /><strong>Taste Fusion</strong> is the result of our passion for food and our commitment to providing you with an exceptional dining experience.
            </p>
            <h1 >Discover our menu</h1>
            <Box sx={{ overflow: 'hidden' }}>
                {/* <Media loading /> */}
                <Media />
            </Box>
        </div>
    )
}

export default Home