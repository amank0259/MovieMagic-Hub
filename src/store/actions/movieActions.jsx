import axios from '../../utils/axios';
import { loadmovie } from '../reducers/movieSlice';
export { removemovie } from '../reducers/movieSlice';

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalId = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
        let theUltimateDetails = {
            details: detail.data,
            externalId: externalId.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchProviders: watchProviders.data.results.IN,
        };
        dispatch(loadmovie(theUltimateDetails))
        console.log(theUltimateDetails);
    } catch (err) {
        console.log("Error: ", err);
    }
};