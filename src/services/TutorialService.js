import axios from 'axios';


const TUTORIAL_API_BASE_URL = "http://localhost:8080/api/v1/tutorials";
class TutorialService {
    getTutorials() {
        return axios.get(TUTORIAL_API_BASE_URL);
    }
}

export default new TutorialService();