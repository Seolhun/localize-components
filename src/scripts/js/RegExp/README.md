# JavaScript RegExp DeepDive - 1
- Author : [SeolHun](https://github.com/Seolhun/)

## 정규표현식에서 의미를 갖는 문자들 
- Character Classes
- Character Sets
- Boundaries
- Grouping and back references
- Quantifiers

---
#### 1. Character Classes
- \d
	- Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_].

For example, /\w/ matches "a" in "apple", "5" in "$5.28", and "3" in "3D".

#### 2. Character Sets

#### 3. Boundaries
- ^
	- Matches beginning of input. 
- $
	- Matches end of input. 
- \b
	- 문자와 공백 사이에서, 공백이 없는 조건에서의 해당 단어가 포함된 경계를 찾습니다.
		- [\b]와 혼동해서는 안 됨
	- 예를 들어 
		- `/\bno/`는 `at noon`의 `no`와 일치합니다. 
		- `/ly\b/`는 `possibly yesterday`의 `ly`와 일치합니다.
- \w
	- `_`을 포함한 `기본 라틴 알파벳의 영숫자`와 일치합니다. [A-Za-z0-9_]와 동일합니다.
- \W
	- 기본 `라틴 알파벳에서 단어 문자가 아닌 문자`를 찾습니다. [^A-Za-z0-9_]와 동일합니다.
		- 기본적으로 `특수문자`를 가져온다 생각하는 것이 편합니다.
	- 예를 들어, 
		- `/\W/` 또는 `/[^A-Za-z0-9_]/`는 "50%"에서 "%"와 일치합니다.


#### 4. Grouping and back references
- x?
	- Matches the preceding item x 0 or 1 time. For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle."

#### 5. Quantifiers


## Reference
	- [Mozilla - RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)