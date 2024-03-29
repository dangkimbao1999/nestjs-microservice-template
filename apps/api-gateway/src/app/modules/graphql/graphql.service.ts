import { Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

@Injectable()
export class GraphqlService {
  private readonly endpoint = process.env.SUBGRAPH_URL;
  private graphqlClient: GraphQLClient;

  constructor() {
    this.graphqlClient = new GraphQLClient(this.endpoint);
  }

  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }
}
