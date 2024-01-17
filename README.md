Learn how to fetch using Axios

the purpose of this website is to learn how to fetch data from public API, I'm using data from https://dummyjson.com/docs/products/. What i have learnt from this project is,

1. fetch data
2. useState()
3. useEffect()
4. filter data (search & checkbox )

fetch data there are two ways, 1 is using .then another method is async/await.
![learning axios](https://github.com/Hafizshkr/LearningAxios/assets/103745630/14687284-f745-4ced-833e-ae40b78bc193)

![axios](https://github.com/Hafizshkr/LearningAxios/assets/103745630/990b40bd-ae0b-46fd-90fa-c7d193d5338c)

## API Reference

#### Get all items

```http
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `string` | https://dummyjson.com/products |

## Demo

https://learningaxios.vercel.app/
