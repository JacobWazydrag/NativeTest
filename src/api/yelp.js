import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', 
    headers: {
        Authorization: 'Bearer pXXGjcVjB--vHb79fqbcQZMHAfHLUuCHEovLTIX9SaAukCmxyCRLdW7G0u3Y-StJf5rdHDZxTvKfKXe2cloROP4XrgGtV7gmV8SqJ0UL405yKSy_7WJtiIPA3qyVX3Yx'
    }
})

