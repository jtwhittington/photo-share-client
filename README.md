PhotoShare Client
===============
PhotoShare Client is the main front-end  exercise for [GraphQL Workshop](https://www.graphqlworkshop.com). In this exercise, students build a website using the Apollo Client with Apollo React.

Iterations
---------------

### Start

1. [x] Starting Point ([files](https://github.com/graphqlworkshop/photo-share-client/tree/start))

### a. Setting up Apollo Client

1. [x] Create the Apollo Client ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/start...step-a1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/start))
2. [x] Render ApolloProvider ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-a1...step-a2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-a2))

### b. Handling Users

1. [x] Add `ALL_USERS` Query ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-a2...step-b1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-b1))
2. [x] Display the User list ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-b1...step-b2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/b2))
3. [x] Add `ADD_FAKE_USERS` Mutation ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-b2...step-b3)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-b3))
4. [x] Update the local cache with new users ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-b3...step-b4)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-b4))
5. [x] Setting the fake user count ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-b4...step-b5)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-b5))

### c. Github Authorization

1. [x] Environment Variables ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-b5...step-c1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c1))
2. [x] Adding the React Router ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c1...step-c2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c2))
3. [x] Obtaining the Github Code ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c2...step-c3)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c3))
4. [x] Adding `GITHUB_AUTH_MUTATION` ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c3...step-c4)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c4))
5. [x] Adding Authorization Header ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c4...step-c5)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c5))
6. [x] Identifying the user with `ME` Query  ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c5...step-c6)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c6))
7. [x] Handling Logging Out ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c6...step-c7)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-c7))

### d. Incorporating Subscriptions

1. [x] Adding a WebSocket Link ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-c7...step-d1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/d1))
2. [x] Persisting Data ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-d1...step-d2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/d2))
3. [x] Subscribing to new users ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-d2...step-d3)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/d3))

### e. Incorporating the UI

1. [x] Incorporating the Main User Interface ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-d3...step-e1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-e1))
2. [x] Incorporating the UserList UI Component ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-e1...step-e2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-e2))
3. [x] Adding Fake User Authorization ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-e2...step-e3)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-e3))
4. [x] Incorporating the Auth UI Component ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-e3...step-e4)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-e4))

### f. Posting Photos

1. [x] Modify the `httpLink` for uploads ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-e4...step-f1)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f1))
2. [x] Routing to the Post Photo Form ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f1...step-f2)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f2))
3. [x] Incorporating the Post Photo Form ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f2...step-f3)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f3))
4. [x] Adding the `POST_PHOTO_MUTATION` ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f3...step-f4)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f4))
5. [x] Adding `ALL_PHOTOS` Query ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f4...step-f5)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f5))
6. [x] Adding Photo Subscriptions ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f5...step-f6)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f6))
7. [x] Incorporating the PhotoList UI Component ([diff](https://github.com/graphqlworkshop/photo-share-client/compare/step-f6...step-f7)) ([files](https://github.com/graphqlworkshop/photo-share-client/tree/step-f7))