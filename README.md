## id
#### Function
```javascript
const id = id => document.getElementByID(id)
```
## HTML
#### Function
```javascript
const html = string => {
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    return wrap.firstElementChild
}
```
### pantry javascript Drivers example
```javascript
function bucket(bucketName){
    var PantryID = `ApIkEy`
    function config(method,data){
        var base = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        if(data)base.body = JSON.stringify(data)
        return base
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var url = `https://getpantry.cloud/apiv1/pantry/${PantryID}/basket/${bucketName}`
    return{
        create(data,callback){
            fetch(url, config('post',data)).then (res => res.json()).then(callback)
        },
        update(data,callback){
            fetch(url, config('put',data)).then (res => res.json()).then(callback)
        },
        get(callback){
            fetch(url,config('get')).then (res => res.json()).then(callback)
        },
        delete(callback){
            fetch(url,config('delete')).then (res => res.json()).then(callback)
        }
    }
}
```
## bind variables to elements (display.js)
```Javascript
function bindData(parent){
    parent.querySelectorAll('[var]').forEach(element => {
        var variable = element.getAttribute('var').split('.')
        var i = 0
        const loop = (hoist) =>{
            var newHoist = hoist[variable[i]]
            if(i<variable.length){
                i++; loop(newHoist)
            }else{
                element.innerText=hoist
            }
        }
        loop(window)
    });
}
```
#### example
```html
<body>
<script></script>
<p var="user.name"></p>

<script>
    var user = {}
    user.name = 'eddy'
bindData(document.body)
</script>
</body>
```
```
# firebase_9_SDK_global_namespace
[firebase_namespace.js](https://raw.githubusercontent.com/eddyralston/utility-javascript/main/firebase_9_SDK_global_namespace/build/firebase_namespace.j "")
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
```javascript
<!DOCTYPE html>
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
