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
5. [ ] Adding Authorization Header
6. [ ] Identifying the user with `ME` Query
7. [ ] Refetching `ALL_USERS_QUERY`
8. [ ] Handling Logging Out

### d. Incorporating Subscriptions

1. [ ] Adding a WebSocket Link
2. [ ] Persisting Data
3. [ ] Subscribing to new users
4. [ ] Updating the local cache

### e. Incorporating the UI

1. [ ] Incorporating the Main User Interface
2. [ ] Incorporating the UserList UI Component
3. [ ] Adding Fake User Authorization
4. [ ] Incorporating the Auth UI Component

### f. Posting Photos

1. [ ] Modify the `httpLink` for uploads
2. [ ] Adding `ALL_PHOTOS` Query
3. [ ] Routing to the Post Photo Form
4. [ ] Incorporating the Post Photo Form
5. [ ] Adding the `POST_PHOTO_MUTATION`
6. [ ] Incorporating the PhotoList UI Component
7. [ ] Updating the Local Cache
9. [ ] Adding Photo Subscriptions

### g. Searching, Paging, and Filtering

1. [ ] Filtering all Photos
2. [ ] Searching for Photos
3. [ ] Adding Data Paging