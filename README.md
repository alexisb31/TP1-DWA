# esgi2-TP1
## API REST
*(Aussi appelé RESTful API)*

REpresentational State Transfer

REST est un type d'architecture pour API.

---
## Impose des contraintes

- Architecture client-serveur avec des requêtes HTTP
- Les requêtes sont indépendante les unes des autres
- Mise en cache des ressources
- Interface uniforme
- Architecture en couches, chaque couche responsable d'une tâche et invisible au client

---
## Avantages

- Flexible et évolutif
- Multiple format de donné (JSON, XML, HTML, Text...)
- Indépendant de la plateforme et du langage du client
- Peut envoyer du code exécutable au client

--- 
## Nommage des Routes

- f Ne pas utiliser de verbes, les méthodes HTTP le font pour nous
- f Ne pas utiliser de majuscules
- f Ne pas finir les routes par un '/'
- d Utiliser le pluriel pour les ressources
- d Utiliser '-' au lieu d'espaces ou de '\_'
- d Mettre la version de l'API => /v1/persons/:id

---
## Sources

- [Article de RedHat](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [Wikipedia](https://en.wikipedia.org/wiki/REST)
- [StackOverflow](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)