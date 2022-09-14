# Class 18 - API Gateway & Dynamo DB

## Warm Up

Traverse a Binary Tree,  reading all values in-order.

```txt
    [to]
    |   |
 [dogs] [heaven]
 |    |
[all] [go]


output -> all , dogs, go , to, heaven
```

Zayah: Thinking of the traversal as looking at node through a magnifying glass.

* Recursive solution: inOrder: root => root ? [...this.inOrder(root.left), root.value, ..thins.inOrder(root.right)] : [];
* Iterative solution:

## Review

What went well?  What do you need to know?

Jim: 1 s3 bucket or multiple buckets?

* It is possible to have 1 bucket. Jacob recommends maybe 2 buckets for production.

Diagramming the s3 and Lamdba lab App.

Jim: uploaded the image.json file, removes the images array.

* converting manifest file data from an encoded buffer to a JS array.

## API Gateway

Web Service for taking the same express RESTful API verbage and mapping them to `resources` and `methods` using an AWS GUI.

## Dynamo DB

Document based persistent storage.  Refers to data as tables,  acts more like a Mongo DB instance.

* Uses a third party API layer (Dynamoose) to perform CRUD (Create / Read / Update / Delete).

## DEMO: RESTful API using API Gateway/ Lambda / Dynamo DB

* Read

```javascript
let friendData = await friendModel.scan().exec();

return {
  statusCode: 200,
  body: JSON.stringify(friendData);
}
```

* Create

```javascript

let data = JSON.parse(event.body);

const Friend = new FriendModel(data);
const friendData = await Friend.save();


return {
  statusCode: 200,
  body: JSON.stringify(friendData);
}
```
