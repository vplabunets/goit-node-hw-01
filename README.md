## Node.js Homework #1

##### A tiny and fast contacts database management CLI

![npm](https://img.shields.io/npm/v/node?color=orange&label=node&logo=nanoid&logoColor=%20&style=plastic) ![npm](https://img.shields.io/npm/v/nanoid?color=orange&label=nanoid&logo=nanoid&logoColor=%20&style=plastic) ![npm](https://img.shields.io/npm/v/nodemon?color=orange&label=nodemon&logo=nanoid&logoColor=%20&style=plastic) ![npm](https://img.shields.io/npm/v/commander?color=orange&label=commander&logo=nanoid&logoColor=%20&style=plastic)

App is realising such methods:

1. [Listing contacts](https://monosnap.com/file/gtY6J015Tgba2IHtByzqxRurqInwsj)
2. [Getting contact by ID](https://monosnap.com/file/8xJCfpUWBF6fUoKsl2VFO6FUixqi69)
3. [Removing contact](https://monosnap.com/file/fjafq0AoG7Hs9fN2WfL67NjOs82O0i)
4. [Adding new contact](https://monosnap.com/file/tmuYAVGUfoEWCTaxUKp3QdadGn5GmQ)

#### Usage

Get and output contact list in table mode(console.table)

```javascript
node index.js --action="list"
```

Get contact by ID

```javascript
node index.js --action="get" --id=5
```

Add contact

```javascript
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
```

Remove contact

```javascript
node index.js --action="remove" --id=3
```
