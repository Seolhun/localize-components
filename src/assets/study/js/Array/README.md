# Javascript에서 사용하면 좋은 Array Method
- 배열 메소드들 중에 평소에 잘 사용하지 않지만, 사용하면 생산성이 많이 올라가는 메소드 들이다. 리스트는 특히 알고리즘 풀기에 좋고, 자주 사용됨으로써 꼭 숙지하여 생산성과 가독성을 높이도록 하자. 간단히 테스트하면서 정리해보자.

## 내용
#### 1. 배열에서 특정값이 있는지 확인할 때, indexOf를 사용해라 
대부분의 배열에서 indexOf 를 사용 하지 않으면, for loop 를 돌려서 찾을수 밖에 없다. 즉 아래와 같은 코드를 사용 하게 되는데.

```javascript
let isExist =false;
for(let i = 0; max = array.length; i += 1 ) {
  if(array[i] === "특정값"){
    isExist = true;
  }
}
```

위와 같은 코드는 아래와 같이 간단하게 사용할 수 있다. 개인적으로 Python과 상당히 비슷한 느낌을 받았다. Script는 
Script인 듯 싶다.
```javascript
let isExist = (array.indexOf(“특정값”) !== -1 )
```
즉  간단하게 위의 for loop 를 한줄로 표현할 수 있으며, 이부분이 생산성이나, 코드 가독성에 도 옳은 영향을 끼친다.

---
#### 2. filter(function(){})를 사용하자.
Array에서 값을 필터 할때 좋으며, 특히, 이미 존재한 데이터에서 해당 값만 필터할 때 가장 많이 사용된다.

```javascript
let arr = [    
  {"name":"apple", "count": 2},    
  {"name":"orange", "count": 5},    
  {"name":"pear", "count": 3},    
  {"name":"orange", "count": 16}
];    
let newArr = arr.filter(function(item){    
  return item.name === "orange";
});  
console.log("Filter results:",newArr);
```
위 값의 newArr 은 name이 orange 인 놈만 필터 되서 나온다.

---
#### 3. forEach(function(){})를 사용하자.
자바스크립트 책에서 for 루프가 더 성능 향상에 좋다고 하지만, 아주 미세한 차이박에 나지 않으니 더 유용한 forEach쓰는 것이 낫다.

```javascript
let array = [1,2,3,4,5];
array.forEach( function(value, index){
  if( v === 3 ){
    console.log(value + ":" + index); 
    // 3:2 가 나온다.
  }
});
```

---
#### 4. map(function(){})을 잘 활용하자. 
map은 forEach와 비슷해보이지만 차이가 있다. 특히, 중요한 것은 map은 return 값을 갖는다는 것이다. forEach는 연산자로서 해당 array를 처리하지는 기능만하고 return을 시키지 못한다.

예를들어 …
```javascript
let a = [1, 2, 3, 4, 5];
let b = a.forEach(function(v, i) { 
  console.log(v); 
  return v+1;
});
let c = a.map(function(v, i) { 
  console.log(v); 
  return v+1;
});
```
return 값이 없으므로 b는 undefined이 나오며, c 는 [2, 3, 4, 5, 6] 이라는 배열이 나온다.
즉 배열을 가지고, 연산을 하고 길이가 같은 배열로 결과를 리턴받고 싶을때는 map을 쓰는것이 훨씬 유리하다.

---
#### 5.reduce(function(){}, n) 를 사용하자 

이놈은.. 인자를 어떻게 주냐에 따라 용도가 달라진다.

```javascript
array.reduce(f,n)
let a = [1,2,3,4,5] 
//f는 함수 n은 두번째 인자 라고 가정
```
n이 없을경우 array.reduce(f);를 살펴 보자 

f의 
(0) iteration 
- 첫번째 인자 : 1
- 두번째 인자 : 2
(1) iteration
- 첫번째 인자 : 1,2
- 두번째 인자 : 3
(2) iteration
- 첫번째 인자 : 1,2,3
- 두번째 인자 : 4
(3) iteration
- 첫번째 인자 : 1,2,3,4
- 두번째 인자 : 5
로 나오게 된다.
즉 f 의 인자가 f( a,b,c,d) 라면
a=이전값
b= 현재값
c= 인덱스
d= 배열
로 생각하면 된다.

하지만 reduce 메소드를 불러올 때 n을 주게 되면, f의 첫번째 인자가 n이 되게 되는데, 즉 이전 초기값이 n으로 대체 된다.

```javascript
let a= ["a","b","c","d","e","a","b","a","c","c","c"];
let b = a.reduce(function(x,y){
  console.log("x:", x);
  console.log("y:", y);
  x[y] = ++x[y]|| 1;
  return x;
},{});
console.log(b);
```
위 예제를 돌려보면 B 는 최종적으로 Object {a: 3, b: 2, c: 4, d: 1, e: 1}로 리턴된다. 
설명한 5개의 메소드들은  사용하면 개발 생산성 및 가독성이 좋아질 것 같다.
---
## Reference
- 좋은 글들이지만, 잘못된 부분도 있어 수정하여 올렸습니다.
- [http://blog.kazikai.net/?p=16](http://blog.kazikai.net/?p=16)
- [http://colintoh.com/blog/5-array-methods-that-you-should-use-today?utm_source=javascriptweekly&utm_medium=email](http://colintoh.com/blog/5-array-methods-that-you-should-use-today?utm_source=javascriptweekly&utm_medium=email)