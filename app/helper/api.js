const axios = require('axios');

const api = async (url, method, params = null) => {
    if(method === "GET"){     
        try{
            const response = await axios.get(url);
            return response.data;
        }catch(err){
            return err;
        }

    }else{
       if(params === null){
            try{
                const response = await axios({method, url});
                return response.data;
            }catch(err){
                return err
            }
       }else{
            try{
                const response = await axios({method, url, data: params})
                return response.data;
            }catch(err){
                return err
            }
       }
    }
}

module.exports = api;