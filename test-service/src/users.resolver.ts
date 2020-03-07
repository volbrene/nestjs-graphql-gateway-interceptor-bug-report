import { Args, Query, Resolver, ResolveReference } from "@nestjs/graphql";

@Resolver("User")
export class UsersResolvers {
  @Query()
  getUser(@Args("id") id: string) {
    return {
      id,
      name: "Test User"
    };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return {
      id: reference.id,
      name: "Test User"
    };
  }
}
