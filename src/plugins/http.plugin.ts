import axios from 'axios';


interface PokeData { 
    count: number,
    next: string,
    previous: null,
    results: Results[]  
}

interface Results {
    name: string, url: string
}

export const httpClient = async (): Promise<PokeData> => {
    
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0');
      
    return resp.data
}


