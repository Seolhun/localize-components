# LocalizeButton

## 1. Anatomy

분해 설명

---

## 2. Specs

스펙 설명

---

## 3. Options

### Size

- 버튼 사이즈는 'xs' | 'sm' | 'md' | 'lg' | 'xl' 존재합니다.
- 자주 사용되는 size는 md이며, 이를 기본 값으로 사용합니다.
- 버튼 간의 다른 크기는 조금만 사용하세요. 페이지 내에서 중요한 계층을 만드는 데 사용해야합니다.

### Variant

- 버튼 intent는 'solid' | 'outline' 존재합니다.
- 자주 사용되는 variant는 solid이며, 이를 기본 값으로 사용합니다.
- solid와 outline은 서로 상반된 스타일을 가지고 있어, 강조할 때는 주로 solid를 사용합니다.

### Intent

- 버튼 intent는 `default` | `primary` | `secondary` | `success` | `info` | `warning` | `error` 존재합니다.
- 자주 사용되는 intent는 primary이며, 이를 기본 값으로 사용합니다.
- intent는 주로 계층과 상태를 나타내며, 강조할 떄는 primary를 사용합니다.

### Disabled

- 비활성화 된 상태의 버튼은 작업이 존재하지만 해당 상황에서 사용할 수 없음을 나타냅니다.
- 이 상태는 레이아웃 연속성을 유지하고 나중에 작업을 사용할 수 있음을 알리는 데 사용할 수 있습니다.

---

## 4. Props

```tsx
  /**
   * Set this to change size
   * @default md
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Set this to change variant
   * @default solid
   */
  variant?: 'solid' | 'outline';

  /**
   * Set this to change intent
   * @default default
   */
  intent?: 'localize' | 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';

  /**
   * Set this to change variant
   */
  disabled?: boolean;
```

---

## 5. Behaviors

- All interactive states
  - Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).

---

## 6. Accessibility

접근성

---

## 7. Design checklist

- [ ] All color themes
  - Works properly across all four color themes (light, dark).
- [ ] All platform scales
  - Includes a desktop scale (UWP, macOS, web desktop) and a mobile scale (iOS, Android, web mobile).
- [ ] All interactive states
  - Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).
- [ ] Defined behaviors
  - Includes guidelines for layout (wrapping, truncation, overflow), animation, interactions, etc.
- [ ] Keyboard interactions
  - Follows WCAG 2.0 standards for keyboard accessibility guidelines and includes a description of the keyboard interactions.

---

## 8. Internationalization

국제화

---

## 9. Use cases

유즈 케이스

---

## References

- [https://spectrum.adobe.com/page/button/](https://spectrum.adobe.com/page/button/)
- [https://chakra-ui.com/docs/form/button](https://chakra-ui.com/docs/form/button)
- [https://blueprintjs.com/docs/#core/components/button](https://blueprintjs.com/docs/#core/components/button)
- [https://material.io/components/buttons](https://material.io/components/buttons)
- [https://evergreen.segment.com/components/button](https://evergreen.segment.com/components/button)
- [https://ant.design/components/button/](https://ant.design/components/button/)
