import axios from "axios";

export class RestApi {
    static GetRequest = (getUrl) => {
        return axios
        .get(getUrl)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return "error";
        });
    };
    static PostRequest = (postUrl, postJson) => {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };
        return axios
            .post(postUrl, postJson, config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    // La requête a été faite et le serveur a répondu avec un code de statut hors de la plage 2xx
                    console.error('Erreur de réponse du serveur:', error.response.data);
                    return {
                        message: 'Erreur de réponse du serveur',
                        status: error.response.status,
                        data: error.response.data
                    };
                } else if (error.request) {
                    // La requête a été faite mais aucune réponse n'a été reçue
                    console.error('Erreur de requête:', error.request);
                    return {
                        message: 'Erreur de requête',
                        request: error.request
                    };
                } else {
                    // Une erreur est survenue lors de la configuration de la requête
                    console.error('Erreur:', error.message);
                    return {
                        message: 'Erreur',
                        error: error.message
                    };
                }
            });
    };
    
}

export default RestApi;
