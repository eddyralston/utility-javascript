# firebase_namespace
#### firestore(*CollectionPath*)

| Argument      | Notes |
| ----------- | ----------- |
| add({data})| add document to collection     |
| get()| get documents from collection        |

#### database(*RefPath*)

| Argument      | Notes |
| ----------- | ----------- |
| set({data})| add data to ref     |
| get()| get data from ref        |


## Example
must define a variable named firebaseConfig with your 
firebase config before including the `firebase_namespace.js` script
```<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<script>
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",		//
  databaseURL: "..." 	// firebaseConfig must be defined before
};						// loading the firebase_namespace script
</script>				//
    <script src="firebase_namespace.js"></script>
</head>
<body>
    <script>
        firebase.firestore('content').get().then(data=>{
            data.forEach((doc)=>{
                console.log(doc.data())
            })
        })
    </script>
</body>
</html>
