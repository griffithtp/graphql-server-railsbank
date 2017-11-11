const axios = require('axios');
const { api_url, api_key } = require('config.json')('./apikey-demo.json');
const fetch = require('node-fetch');

const axios_headers = {
  headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `API-Key ${api_key}`}
};


const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList
} = graphql;
const PartnerType = require('./partner_type');


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    partners: {
      type: new GraphQLList(PartnerType),
      resolve() {
        return axios.get(api_url + `v1/customer/partners`, axios_headers)
          .then( (res) => {
            console.log(res);
            return res.data ;
          });
      }
    }
  })
})
module.exports = RootQuery;
