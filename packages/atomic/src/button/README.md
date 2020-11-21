# LocalizeButton

## Anatomy

<div style='display: flex;'>
  <img 
    src='./resources/button.anatomy.png'
    alt='button.options.size.png'
    width='100%'
  />
</div>

## Specs

<div style='display: flex;'>
  <img 
    src='./resources/button.specs.png'
    alt='button.options.size.png'
    width='100%'
  />
</div>

## Options

### Size

<div style='display: flex;'>
  <div style='display: inline-flex; flex: 1;'>
    <img 
      src='./resources/button.options.size.png'
      alt='button.options.size.png'
      width='100%'
    />
  </div>
  <div style='display: inline-flex; flex: 1;'>
    Buttons come in four different sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl'.
    The md size is the default and most frequent option.
    Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
  </div>
</div>

### Variant

<div style='display: flex;'>
  <div style='display: inline-flex; flex: 1;'>
    <img 
      src='./resources/button.options.size.png'
      alt='button.options.size.png'
      width='100%'
    />
  </div>
  <div style='display: inline-flex; flex: 1;'>
    클릭 유도 문안 버튼은 강력한 강조를 전달하며 경험에 필수적인 작업을 위해 예약되어 있습니다. 
    섹션 당 하나의 클릭 유도 문안 버튼 만 있어야합니다. 
    이 버튼은 의도적으로 눈에 띄기위한 것이므로 조용한 스타일이 없습니다.
  </div>
</div>

### Disabled

<div style='display: flex;'>
  <div style='display: inline-flex; flex: 1;'>
    <img 
      src='./resources/button.options.size.png'
      alt='button.options.size.png'
      width='100%'
    />
  </div>
  <div style='display: inline-flex; flex: 1;'>
    A button in a disabled state shows that an action exists, but is not available in that circumstance. 
    This state can be used to maintain layout continuity and to communicate that an action may become available later.
  </div>
</div>

## Props

```tsx
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
   * Set this to change size
   * @default md
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

## Behaviors

- All interactive states
  - Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).

## Accessibility

## Design checklist

- [ ] All color themes
  - Works properly across all four color themes (light, dark).
-  All platform scales
  - Includes a desktop scale (UWP, macOS, web desktop) and a mobile scale (iOS, Android, web mobile).
- [ ] All interactive states
  - Includes all interactive states that are applicable (hover, down, focus, keyboard focus, disabled).
- [ ] Defined behaviors
  - Includes guidelines for layout (wrapping, truncation, overflow), animation, interactions, etc.
- [ ] Keyboard interactions
  - Follows WCAG 2.0 standards for keyboard accessibility guidelines and includes a description of the keyboard interactions.

---

## Internationalization

## Use cases


---

## References

- [Spectrum.adobe](https://spectrum.adobe.com/page/button)
- [Material](https://material.io/components/buttons)
- [Blueprintjs](https://blueprintjs.com/docs/#core/components/button)
