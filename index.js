const axios = require('axios')

// curl https://eth-mainnet.alchemyapi.io/v2/your-api-key \
// -X POST \
// -H "Content-Type: application/json" \
// -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":0}'
const data = {
  // g9cj8kxK10CC_g-HS1cmHFc9dJG1Btci
  "jsonrpc":"2.0",
  "method":"eth_blockNumber",
  "params":[],
  "id":0
}

const config = {
  method: 'POST',
  url: 'https://eth-mainnet.alchemyapi.io/v2/g9cj8kxK10CC_g-HS1cmHFc9dJG1Btci',
  Headers: {
    "Content-Type": "application/json"
  },
  data,
}

axios(config)
  .then(res=> console.log(res))
  .catch(err=>err.message)