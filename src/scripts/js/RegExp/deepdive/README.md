# JavaScript RegExp Example DeepDive - 1
- Author : [SeolHun](https://github.com/Seolhun/)

## Reference
- [Mozilla RegEXP](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## Process
- `{패턴에 속할 문장}` 나머지 문장.
- Answer
	- RegEXP를 사용하여 해당 정규식을 표현합니다.

## DeepDive Examples
1. `*11월 최다주문상품*` Sunday Morning Ring ::: RF033
- Answer
	- /^\*[\가-힣\W\w]+\*/g
	
2. `*Daily Item*` 물결반지 :: RU034 (2 color) *8차입고*
- Answer
	- /^\*[\가-힣]+\*/g
