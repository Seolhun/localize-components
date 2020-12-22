# LocalizeTheme

## Specs

![./resources/anatomy/theme.anatomy.png](./resources/anatomy/theme.anatomy.png)

현재 Theme의 intent는 `default` | `primary` | `secondary` | `success` | `info` | `warning` | `error` 총 7가지 입니다.

그 외 ui의 color를 보조할 수 있는 중립적인 `neutral`과 light/dark의 전환이 필요한 `conversion`을 추가하였습니다.

---

## Options

### Intent

![./resources/options/theme.options.intent.png](./resources/options/theme.options.intent.png)

- 버튼  존재합니다.
- 자주 사용되는 intent는 primary이며, 이를 기본 값으로 사용합니다.
- intent는 주로 계층과 상태를 나타내며, 강조할 떄는 primary를 사용합니다.

### Disabled

![./resources/options/theme.options.disabled.png](./resources/options/theme.options.disabled.png)

- 비활성화 된 상태의 버튼은 작업이 존재하지만 해당 상황에서 사용할 수 없음을 나타냅니다.
- 이 상태는 레이아웃 연속성을 유지하고 나중에 작업을 사용할 수 있음을 알리는 데 사용할 수 있습니다.

---

## Props

```tsx
  /**
   * Set this to change intent color
   * @default default
   */
  intent?: LocalizeIntentThemeType;

  /**
   * Set this to change font color
   * @default conversion1
   */
  fontColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change background color
   * @default primary
   */
  bgColor?: keyof LocalizeThemeProps['colors'];

  /**
   * Set this to change border color
   * @default transparent
   */
  bdColor?: keyof LocalizeThemeProps['colors'];
```

---

## Accessibility

접근성

---

## Design checklist

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

## References

- [https://spectrum.adobe.com/page/color/](https://spectrum.adobe.com/page/color/)
- [https://chakra-ui.com/docs/theming/theme](https://chakra-ui.com/docs/theming/theme)
- [https://blueprintjs.com/docs/#core/components/button](https://blueprintjs.com/docs/#core/components/button)
- [https://material.io/components/buttons](https://material.io/components/buttons)
- [https://evergreen.segment.com/components/button](https://evergreen.segment.com/components/button)
- [https://ant.design/components/button/](https://ant.design/components/button/)
- [http://styleguide.co.kr/content/component/component-core.php](http://styleguide.co.kr/content/component/component-core.php)
