# LocalizeTheme

## Specs

![./resources/anatomy/theme.anatomy.png](./resources/anatomy/theme.anatomy.png)

intent는 `localize` | `default` | `primary` | `secondary` | `success` | `info` | `warning` | `error` 총 7가지 입니다.
그 외 component를 구성하기 위한 중립적인 컬러 `neutral`과 테마 간의 전환이 필요한 `inversed` 2개를 추가하여 사용합니다.
Element의 `readonly`, `disabled`의 비사용 상태를 표현하기 위해 추가하여 사용합니다.

일반적인 Component의 색상은 intent를 기준으로 Hierarych를 표현/강조하는데 사용됩니다.
그 외 기본적인 색상은 neutral로 나타내며, 테마 간의 전환이 필요한 경우에는 inversed으로 표현합니다.

색상의 variant는 1~10까지 사용합니다. intent의 main은 일반적으로 variant6번 색을 사용합니다.(default, readonly, disabled 제외)

---

## Options

### Intent

![./resources/options/theme.options.intent.png](./resources/options/theme.options.intent.png)

- 버튼 intent는 `localize` | `default` | `primary` | `secondary` | `success` | `info` | `warning` | `error` 존재합니다.
- 자주 사용되는 intent는 primary이며, 이를 기본 값으로 사용합니다.
- intent는 주로 계층과 상태를 나타내며, 강조할 떄는 primary를 사용합니다.
- localize는 component의 규칙에 따른 background, border, font의 3가지 색을 조합하여 custom 하기 위한 intent 값 입니다.

### Readonly & Disabled

![./resources/options/theme.options.disabled.png](./resources/options/theme.options.disabled.png)

- 비활성화 된 상태의 버튼은 작업이 존재하지만 해당 상황에서 사용할 수 없음을 나타냅니다.
- 이 상태는 레이아웃 연속성을 유지하고 나중에 작업을 사용할 수 있음을 알리는 데 사용할 수 있습니다.
- `disabled`, `readonly`가 여기에 포함되며 사용 할 수 없는 상태를 표현하기 위해 사용합니다.

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
   * @default inversed1
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
- [https://blueprintjs.com/docs/#core/colors](https://blueprintjs.com/docs/#core/colors)
- [https://material.io/design/color/the-color-system.html#color-usage-and-palettes](https://material.io/design/color/the-color-system.html#color-usage-and-palettes)
- [https://ant.design/docs/spec/colors/](https://ant.design/docs/spec/colors/)
