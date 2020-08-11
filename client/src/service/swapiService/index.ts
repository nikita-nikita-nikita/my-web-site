import axios from "axios";

class SWApiService {
    _apiBase = "https://swapi.dev/api/";
    _imageBase = "https://starwars-visualguide.com/assets/img/";

    _validIds = {
        planets: [],
        starships: [],
        persons: [],
    }

    getResource = async (url:string) =>{
        const res = await axios.get(`${this._apiBase}${url}`);
        if (res.statusText!=="OK"&&res.statusText!=="") throw new Error(`Could not fetch status: ${res.status}`);
        return res.data;
    };

    getImagePerson = (person:any) => `${this._imageBase}characters/${this._extractId(person)}.jpg`;
    getImagePlanet = (planet:any) => `${this._imageBase}planets/${this._extractId(planet)}.jpg`;
    getImageStarship = (starship:any) => `${this._imageBase}starships/${this._extractId(starship)}.jpg`;

    getAllObjects =  async(template:string)=> {
        const response = await this.getResource(`${template}/`);
        return response.results.map(this._transformArrayResponse);
    };

    getPerson = async (id:number)=> {
        const response = await this.getResource(`people/${id}/`);
        return this._transformPeople(response);
    };

    getPlanet = async (id:number) => {
        const response = await this.getResource(`planets/${id}/`);
        return this._transformPlanet(response);
    };

    getStarship = async (id:number) =>{
        const response = await this.getResource(`starships/${id}/`);
        return this._transformStarship(response);
    };

    getRandomObjects = async () => {

    };

    _extractId = ({url}:any)=> {
        const idRegExp = /\/([0-9]*)\/$/;
        return url.match(idRegExp)[1]
    };

    _transformPlanet = (planet:any) => {
        return {
            id: this._extractId(planet),
            img: this.getImagePlanet(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformPeople = (person:any) => {
        return {
            id: this._extractId(person),
            img: this.getImagePerson(person),
            name: person.name,
            gender: person.gender,
            height: person.height,
            eyeColor: person.eye_color
        }
    };

    _transformStarship = (starship:any) => {
        return{
            id: this._extractId(starship),
            img: this.getImageStarship(starship),
            name:starship.name,
            model:starship.model,
            costInCredits:starship.cost_in_credits,
            starshipClass:starship.starship_class
        }
    };

    _transformArrayResponse = (elem:any) => ({
        id:this._extractId(elem),
        name:elem.name
    });
}

export default new SWApiService();
