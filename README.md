### Pas encore fonctionnel
    Après mise en place de l'invalidation du cache Redis, le cache est bien supprimé mais il faut actualiser la page pour accèder aux autres publications
# archiNTier-Indivi
    FrontEnd en ReactJS
    Gateway
    Service Publication & Service User
    Redis Cache

## serviceUser
    PORT 8080

## servicePublication
    PORT 8081
## gateway
    PORT 3001
# Endpoints publications

    GET /api/publications
    POST /api/publications
    GET /api/publications/:id
    PUT /api/publications/:id
    DELETE /api/publications/:id

    Exemple DEL : http://localhost:3001/api/publications/6788d6c1955e63bfb266c071
# Endpoints users

    login GET api/users/login
    POST api/users

    Exemple Login : http://localhost:8080/api/users/login
