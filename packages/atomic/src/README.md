# LocalizeButton

## Anatomy

<div style='display: flex;'>
  <img 
    src='./docs/resources/something.anatomy.png'
    alt='something.options.size.png'
    width='100%'
  />
</div>

## Specs

<div style='display: flex;'>
  <img 
    src='./docs/resources/something.specs.png'
    alt='something.options.size.png'
    width='100%'
  />
</div>

## Options

### Size

<div style='display: flex;'>
  <div style='display: inline-flex; flex: 1;'>
    <img 
      src='./docs/resources/something.options.size.png'
      alt='something.options.size.png'
      width='100%'
    />
  </div>
  <div style='display: inline-flex; flex: 1;'>
    Buttons come in four different sizes: 'xs' | 'sm' | 'md' | 'lg' | 'xl'.
    The md size is the default and most frequent option.
    Use the other sizes sparingly; they should be used to create a hierarchy of importance within the page.
  </div>
</div>

## Props

```tsx
  /**
   * Set this to change size
   * @default md
   */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';

  /**
   * Set this to change variant
   * @default solid
   */
  variant?: 'solid' | 'outline' | 'bordered';
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

- [Spectrum.adobe](https://spectrum.adobe.com/page/something)
- [Material](https://material.io/components/somethings)
- [Blueprintjs](https://blueprintjs.com/docs/#core/components/something)
