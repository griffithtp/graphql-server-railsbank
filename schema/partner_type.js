const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'CompanyType',
  fields: () => ({
    name: { type: GraphQLString },
    trading_name: { type: GraphQLString }
  })
});
const PartnerType = new GraphQLObjectType({
  name: 'PartnerType',
  fields: () => ({
    partner_id: { type: GraphQLString },
    company: {
      type: CompanyType
    },
    partner_products: { type: GraphQLString },
    partner_ref: { type: GraphQLString }
  })
});

module.exports = PartnerType;
