### Table of contents

- Anatomy
- Options
- Behaviors
- Accessibility
- Theme
- Design checklist

### Options

- Internationalization
- Use cases

---

- Bar
- Fill
- Tracker
- Handler
- Label

## 1. Anatomy & Specs

- Bar와 Label margin은 1rem
- Bar의 높이는 0.5rem
- Handler 넓이/높이 1.2rem
- Bar와 Handler의 border-radius는 4px

## 2. Options

### Intent

- 자주 사용되는 intent는 primary이며, 이를 기본 값으로 사용합니다.
- intent는 주로 계층과 상태를 나타내며, 강조할 때는 primary를 사용합니다.
- Intent는 Bar의 Fill 영역과 Tracker의 영역을 채워줍니다.

### **Label**

- Label은 Range의 Bar, Handler 모든 텍스트를 나타내는 요소를 지칭합니다.
- Handler의 Label은 강조가 됩니다.

### StepSize

- StepSize는 분기를 나타내기 위한 단위/값 입니다. min과 max사이의 분기를 표기 위한 값을 의미합니다.
- e.g) 0 ~ 100 일때, 10을 표현하면, 10 Step마다 Label이 추가되어 표시됩니다.

### Vertical

- 기본은 수평/수직을 표현하기 위한 값을 의미합니다. 기본 값은 수평입니다.

### Handler

- Handler 안의 이모티콘이나 그 외 다른 요소를 변경할 수 있게 만들기 위한 값 입니다.

### Disabled

- 비활성화 된 상태의 버튼은 작업이 존재하지만 해당 상황에서 사용할 수 없음을 나타냅니다.
- 이 상태는 레이아웃 연속성을 유지하고 나중에 작업을 사용할 수 있음을 알리는 데 사용할 수 있습니다.

## 3. Props

value	      값                                                     number	  0        No
scale       크기 조절                                               Enum     md        No
intent	    Handler가 지난 bar의 색을 변경하기 위한 Theme intent 키 값    Enum	   primary  No
rounded     Handler borderRadius                                  boolean           No 
min         최소 값                                                 number	 0	      No
max	        최대 값	                                                number	 100      No
step	      증가 값 단위	                                           number	           No
renderLabel	value, min, max 값의 label을 보여주기 위함                  Function         No
handler	    handler의 컨텐츠 영역	                                    Element		       No
vertical	  수평/수직 여부	                                          boolean		       No

## 4. Behaviors

1. **Interactive states**
    - Range와 사용자의 상호작용 상태를 구분할 때 사용합니다.
    - [Hover / Active / Keyboard Down / Keyboard Focus]

    - Antd 처럼 회색이 은은하게 퍼져나가는 디자인 모습이 있음

## 5. Accesibility

- 미작성

## 6. Design Check List

- [ ]  모든 색상 테마
    - 네 가지 색상 테마 (밝음, 어두움) 모두에서 제대로 작동합니다.
- [ ]  모든 플랫폼
    - 데스크톱 규모 (UWP, macOS, 웹 데스크톱) 및 모바일 규모 (iOS, Android, 웹 모바일)가 포함됩니다.
- [ ]  모든 대화 형 상태
    - 적용 가능한 모든 대화 형 상태를 포함합니다 (호버, 아래로, 포커스, 키보드 포커스, 비활성화 됨).
- [ ]  정의 된 행동
    - 레이아웃 (래핑, 자르기, 오버플로), 애니메이션, 상호 작용 등에 대한 지침을 포함합니다.
- [ ]  키보드 상호 작용
    - 키보드 접근성 지침에 대한 WCAG 2.0 표준을 따르고 키보드 상호 작용에 대한 설명을 포함합니다.

---

## 7. Internationalization

- 미정/추후 예정

## 8. Use cases

- 미정/추후 예정

---

## 9. Q&A

- 사이즈는 전체적인 Form Component 사이즈 속성에 대한 정의가 필요

## 10. Reference

- [https://spectrum.adobe.com/page/slider/](https://spectrum.adobe.com/page/slider/)
- [https://chakra-ui.com/docs/form/slider](https://chakra-ui.com/docs/form/slider)
- [https://blueprintjs.com/docs/#core/components/sliders](https://blueprintjs.com/docs/#core/components/sliders)
- [https://material.io/components/sliders#usage](https://material.io/components/sliders#usage)
- [https://ant.design/components/slider/](https://ant.design/components/slider/)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
