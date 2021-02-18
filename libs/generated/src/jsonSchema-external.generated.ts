import { JSONSchema7 } from 'json-schema'
import { DecoratorsMap } from '@codelab/tools/generators/json-schema'

export const VegaSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  properties: {
    alignmentBaseline: {
      type: 'string',
    },
    baselineShift: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'baseline',
        },
        {
          type: 'string',
          const: 'sub',
        },
        {
          type: 'string',
          const: 'super',
        },
      ],
    },
    clip: {
      type: 'string',
      description:
        'The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
    },
    clipPath: {
      type: 'string',
      description:
        'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **55**  | **3.5** |  **9.1**  | **12** | **10** | | 23 _-x-_ |         | 6.1 _-x-_ |        |        |',
    },
    clipRule: {
      type: 'string',
    },
    color: {
      type: 'string',
      description:
        "The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.\n\n**Syntax**: `<color>`\n\n**Initial value**: Varies from one browser to another\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
    },
    colorInterpolation: {
      type: 'string',
    },
    colorRendering: {
      type: 'string',
    },
    cursor: {
      type: 'string',
      description:
        'The **`cursor`** CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.\n\n**Syntax**: `[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |',
    },
    direction: {
      type: 'string',
      description:
        'The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).\n\n**Syntax**: `ltr | rtl`\n\n**Initial value**: `ltr`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **2**  |  **1**  | **1**  | **12** | **5.5** |',
    },
    display: {
      type: 'string',
      description:
        'The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.\n\n**Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`\n\n**Initial value**: `inline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    dominantBaseline: {
      type: 'string',
    },
    fill: {
      type: 'string',
    },
    fillOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
    },
    fillRule: {
      type: 'string',
    },
    filter: {
      type: 'string',
      description:
        'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  | | :------: | :-----: | :-----: | :----: | :-: | |  **53**  | **35**  | **9.1** | **12** | No  | | 18 _-x-_ |         | 6 _-x-_ |        |     |',
    },
    floodColor: {
      type: 'string',
    },
    floodOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
    },
    font: {
      type: 'string',
      description:
        "The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.\n\n**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
    },
    fontFamily: {
      type: 'string',
      description:
        'The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.\n\n**Syntax**: `[ <family-name> | <generic-family> ]#`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    fontSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'large',
            'medium',
            'small',
            'x-large',
            'x-small',
            'xx-large',
            'xx-small',
            'xxx-large',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'larger',
        },
        {
          type: 'string',
          const: 'smaller',
        },
      ],
      description:
        'The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth.\n\n**Syntax**: `<absolute-size> | <relative-size> | <length-percentage>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |',
    },
    fontSizeAdjust: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`font-size-adjust`** CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).\n\n**Syntax**: `none | <number>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |  **1**  |   No   | n/a  | No  |',
    },
    fontStretch: {
      type: 'string',
      description:
        'The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.\n\n**Syntax**: `<font-stretch-absolute>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **60** |  **9**  | **11** | **12** | **9** |',
    },
    fontStyle: {
      type: 'string',
      description:
        'The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.\n\n**Syntax**: `normal | italic | oblique <angle>?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    fontVariant: {
      type: 'string',
      description:
        'The **`font-variant`** CSS shorthand property allows you to set all the font variants for a font.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    fontWeight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'bold',
            },
            {
              type: 'string',
              const: 'normal',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
          const: 'bolder',
        },
        {
          type: 'string',
          const: 'lighter',
        },
      ],
      description:
        'The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set.\n\n**Syntax**: `<font-weight-absolute> | bolder | lighter`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **1**  | **12** | **3** |',
    },
    glyphOrientationVertical: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
    },
    imageRendering: {
      type: 'string',
      description:
        'The **`image-rendering`** CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.\n\n**Syntax**: `auto | crisp-edges | pixelated`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **13** | **3.6** | **6**  | **79** | No  |',
    },
    letterSpacing: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        'The **`letter-spacing`** CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of `letter-spacing` causes characters to spread farther apart, while negative values of `letter-spacing` bring characters closer together.\n\n**Syntax**: `normal | <length>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    lightingColor: {
      type: 'string',
    },
    lineHeight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.\n\n**Syntax**: `normal | <number> | <length> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    marker: {
      type: 'string',
    },
    markerEnd: {
      type: 'string',
    },
    markerMid: {
      type: 'string',
    },
    markerStart: {
      type: 'string',
    },
    mask: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'number',
                  const: 0,
                },
                {
                  type: 'string',
                  const: 'bottom',
                },
                {
                  type: 'string',
                  const: 'center',
                },
                {
                  type: 'string',
                  const: 'left',
                },
                {
                  type: 'string',
                  const: 'right',
                },
                {
                  type: 'string',
                  const: 'top',
                },
              ],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['add', 'exclude', 'intersect', 'subtract'],
            },
            {
              type: 'string',
              enum: ['alpha', 'luminance', 'match-source'],
            },
            {
              type: 'string',
              const: 'no-clip',
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `<mask-layer>#`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **1**  |  **2**  | **3.2** | **12** | No  |',
    },
    opacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **2**  | **12** | **9** |',
    },
    overflow: {
      type: 'string',
      description:
        "The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.\n\n**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    paintOrder: {
      type: 'string',
      description:
        'The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.\n\n**Syntax**: `normal | [ fill || stroke || markers ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **35** | **60**  | **8**  | **17** | No  |',
    },
    pointerEvents: {
      type: 'string',
      description:
        'The **`pointer-events`** CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.\n\n**Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **1**  | **1.5** | **4**  | **12** | **11** |',
    },
    shapeRendering: {
      type: 'string',
    },
    stopColor: {
      type: 'string',
    },
    stopOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
    },
    stroke: {
      type: 'string',
    },
    strokeDasharray: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
    },
    strokeDashoffset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
    },
    strokeLinecap: {
      type: 'string',
    },
    strokeLinejoin: {
      type: 'string',
    },
    strokeMiterlimit: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
    },
    strokeOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
    },
    strokeWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
    },
    textAnchor: {
      type: 'string',
    },
    textDecoration: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'blink',
        },
        {
          type: 'string',
          const: 'dashed',
        },
        {
          type: 'string',
          const: 'dotted',
        },
        {
          type: 'string',
          const: 'double',
        },
        {
          type: 'string',
          const: 'from-font',
        },
        {
          type: 'string',
          const: 'grammar-error',
        },
        {
          type: 'string',
          const: 'line-through',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'overline',
        },
        {
          type: 'string',
          const: 'solid',
        },
        {
          type: 'string',
          const: 'spelling-error',
        },
        {
          type: 'string',
          const: 'underline',
        },
        {
          type: 'string',
          const: 'wavy',
        },
      ],
      description:
        "The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.\n\n**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |",
    },
    textRendering: {
      type: 'string',
      description:
        'The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.\n\n**Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **4**  |  **1**  | **5**  | **79** | No  |',
    },
    unicodeBidi: {
      type: 'string',
      description:
        'The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.\n\n**Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    | | :----: | :-----: | :-----: | :----: | :-----: | | **2**  |  **1**  | **1.3** | **12** | **5.5** |',
    },
    vectorEffect: {
      type: 'string',
    },
    visibility: {
      type: 'string',
      description:
        'The **`visibility`** CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.\n\n**Syntax**: `visible | hidden | collapse`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    whiteSpace: {
      type: 'string',
      description:
        'The **`white-space`** CSS property sets how white space inside an element is handled.\n\n**Syntax**: `normal | pre | nowrap | pre-wrap | pre-line | break-spaces`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |',
    },
    wordSpacing: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        'The **`word-spacing`** CSS property sets the length of space between words and between tags.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **6** |',
    },
    writingMode: {
      type: 'string',
      description:
        'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`\n\n| Chrome  | Firefox |  Safari   |  Edge  |  IE   | | :-----: | :-----: | :-------: | :----: | :---: | | **48**  | **41**  | **10.1**  | **12** | **9** | | 8 _-x-_ |         | 5.1 _-x-_ |        |       |',
    },
    azimuth: {
      type: 'string',
      description:
        'In combination with `elevation`, the **`azimuth`** CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.\n\n**Syntax**: `<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards`\n\n**Initial value**: `center`',
    },
    boxAlign: {
      type: 'string',
      description:
        'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
    },
    boxDirection: {
      type: 'string',
      description:
        'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
    },
    boxFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
    },
    boxFlexGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    boxLines: {
      type: 'string',
      description:
        'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
    },
    boxOrdinalGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    boxOrient: {
      type: 'string',
      description:
        'This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
    },
    boxPack: {
      type: 'string',
      description:
        'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
    },
    fontVariantAlternates: {
      type: 'string',
      description:
        'The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.\n\n**Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`\n\n**Initial value**: `normal`',
    },
    gridColumnGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
    },
    gridGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`",
    },
    gridRowGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`",
    },
    imeMode: {
      type: 'string',
      description:
        'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
    },
    offsetBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
    },
    offsetBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
    },
    offsetBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
    },
    offsetInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`",
    },
    offsetInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
    },
    offsetInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`",
    },
    scrollSnapCoordinate: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`scroll-snap-coordinate`** CSS property defines the x and y coordinate positions within an element that will align with its nearest ancestor scroll container's `scroll-snap-destination` for each respective axis.\n\n**Syntax**: `none | <position>#`\n\n**Initial value**: `none`",
    },
    scrollSnapDestination: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        "The **`scroll-snap-destination`** CSS property defines the position in x and y coordinates within the scroll container's visual viewport which element snap points align with.\n\n**Syntax**: `<position>`\n\n**Initial value**: `0px 0px`",
    },
    scrollSnapPointsX: {
      type: 'string',
      description:
        'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
    },
    scrollSnapPointsY: {
      type: 'string',
      description:
        'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
    },
    scrollSnapTypeX: {
      type: 'string',
      description:
        'The **`scroll-snap-type-x`** CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
    },
    scrollSnapTypeY: {
      type: 'string',
      description:
        'The **`scroll-snap-type-y`** CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\n**Syntax**: `none | mandatory | proximity`\n\n**Initial value**: `none`',
    },
    scrollbarTrackColor: {
      type: 'string',
      description:
        'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
    },
    textCombineHorizontal: {
      type: 'string',
      description:
        'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
    },
    KhtmlBoxAlign: {
      type: 'string',
      description:
        'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
    },
    KhtmlBoxDirection: {
      type: 'string',
      description:
        'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
    },
    KhtmlBoxFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
    },
    KhtmlBoxFlexGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    KhtmlBoxLines: {
      type: 'string',
      description:
        'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
    },
    KhtmlBoxOrdinalGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    KhtmlBoxOrient: {
      type: 'string',
      description:
        'This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
    },
    KhtmlBoxPack: {
      type: 'string',
      description:
        'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
    },
    KhtmlLineBreak: {
      type: 'string',
      description:
        'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
    },
    KhtmlOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
    },
    KhtmlUserSelect: {
      type: 'string',
      description:
        "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
    },
    MozBackgroundClip: {
      type: 'string',
      description:
        "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
    },
    MozBackgroundInlinePolicy: {
      type: 'string',
      description:
        "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
    },
    MozBackgroundOrigin: {
      type: 'string',
      description:
        "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",
    },
    MozBackgroundSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
    },
    MozBinding: {
      type: 'string',
      description:
        'The **`-moz-binding`** CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`',
    },
    MozBorderRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
    },
    MozBorderRadiusBottomleft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    MozBorderRadiusBottomright: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    MozBorderRadiusTopleft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    MozBorderRadiusTopright: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    MozBoxAlign: {
      type: 'string',
      description:
        'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
    },
    MozBoxDirection: {
      type: 'string',
      description:
        'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
    },
    MozBoxFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
    },
    MozBoxOrdinalGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    MozBoxOrient: {
      type: 'string',
      description:
        'This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
    },
    MozBoxPack: {
      type: 'string',
      description:
        'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
    },
    MozBoxShadow: {
      type: 'string',
      description:
        "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
    },
    MozFloatEdge: {
      type: 'string',
      description:
        'The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.\n\n**Syntax**: `border-box | content-box | margin-box | padding-box`\n\n**Initial value**: `content-box`',
    },
    MozForceBrokenImageIcon: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.\n\n**Syntax**: `<integer [0,1]>`\n\n**Initial value**: `0`',
    },
    MozOpacity: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `1.0`',
    },
    MozOutline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'invert',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`outline`** CSS shorthand property set all the outline properties in a single declaration.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`",
    },
    MozOutlineColor: {
      type: 'string',
      description:
        "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other",
    },
    MozOutlineRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.\n\n**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`",
    },
    MozOutlineRadiusBottomleft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "In Mozilla applications, the **`-moz-outline-radius-bottomleft`** CSS property can be used to round the bottom-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
    },
    MozOutlineRadiusBottomright: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "In Mozilla applications, the **`-moz-outline-radius-bottomright`** CSS property can be used to round the bottom-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
    },
    MozOutlineRadiusTopleft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "In Mozilla applications, the **`-moz-outline-radius-topleft`** CSS property can be used to round the top-left corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
    },
    MozOutlineRadiusTopright: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "In Mozilla applications, the **`-moz-outline-radius-topright`** CSS property can be used to round the top-right corner of an element's `outline`.\n\n**Syntax**: `<outline-radius>`\n\n**Initial value**: `0`",
    },
    MozOutlineStyle: {
      type: 'string',
      description:
        "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`",
    },
    MozOutlineWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`",
    },
    MozTextAlignLast: {
      type: 'string',
      description:
        'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`',
    },
    MozTextDecorationColor: {
      type: 'string',
      description:
        'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    MozTextDecorationLine: {
      type: 'string',
      description:
        'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
    },
    MozTextDecorationStyle: {
      type: 'string',
      description:
        'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
    },
    MozUserInput: {
      type: 'string',
      description:
        'In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.\n\n**Syntax**: `auto | none | enabled | disabled`\n\n**Initial value**: `auto`',
    },
    msImeMode: {
      type: 'string',
      description:
        'The **`ime-mode`** CSS property controls the state of the input method editor (IME) for text fields. This property is obsolete.\n\n**Syntax**: `auto | normal | active | inactive | disabled`\n\n**Initial value**: `auto`',
    },
    msScrollbarTrackColor: {
      type: 'string',
      description:
        'The **`-ms-scrollbar-track-color`** CSS property is a Microsoft extension that specifies the color of the track element of a scrollbar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `Scrollbar`',
    },
    OAnimation: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['alternate', 'alternate-reverse', 'normal', 'reverse'],
            },
            {
              type: 'string',
              enum: ['backwards', 'both', 'forwards', 'none'],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              const: 'infinite',
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
              const: 'paused',
            },
            {
              type: 'string',
              const: 'running',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
    },
    OAnimationDelay: {
      type: 'string',
      description:
        'The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    OAnimationDirection: {
      type: 'string',
      description:
        'The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
    },
    OAnimationDuration: {
      type: 'string',
      description:
        'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    OAnimationFillMode: {
      type: 'string',
      description:
        'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
    },
    OAnimationIterationCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'infinite',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
    },
    OAnimationName: {
      type: 'string',
      description:
        'The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
    },
    OAnimationPlayState: {
      type: 'string',
      description:
        'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
    },
    OAnimationTimingFunction: {
      type: 'string',
      description:
        'The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    OBackgroundSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
    },
    OBorderImage: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'repeat',
        },
        {
          type: 'string',
          const: 'round',
        },
        {
          type: 'string',
          const: 'space',
        },
        {
          type: 'string',
          const: 'stretch',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
    },
    OTransform: {
      type: 'string',
      description:
        'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
    },
    OTransition: {
      type: 'string',
      description:
        'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
    },
    OTransitionDelay: {
      type: 'string',
      description:
        "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
    },
    OTransitionDuration: {
      type: 'string',
      description:
        'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    OTransitionProperty: {
      type: 'string',
      description:
        'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
    },
    OTransitionTimingFunction: {
      type: 'string',
      description:
        'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    WebkitBoxAlign: {
      type: 'string',
      description:
        'The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | baseline | stretch`\n\n**Initial value**: `stretch`',
    },
    WebkitBoxDirection: {
      type: 'string',
      description:
        'The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).\n\n**Syntax**: `normal | reverse | inherit`\n\n**Initial value**: `normal`',
    },
    WebkitBoxFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`",
    },
    WebkitBoxFlexGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    WebkitBoxLines: {
      type: 'string',
      description:
        'The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).\n\n**Syntax**: `single | multiple`\n\n**Initial value**: `single`',
    },
    WebkitBoxOrdinalGroup: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `1`",
    },
    WebkitBoxOrient: {
      type: 'string',
      description:
        'This is a property of the original CSS Flexible Box Layout Module draft, and has been replaced by a newer standard. See flexbox for information about the current standard.\n\n**Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`\n\n**Initial value**: `inline-axis` (`horizontal` in XUL)',
    },
    WebkitBoxPack: {
      type: 'string',
      description:
        'The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.\n\n**Syntax**: `start | center | end | justify`\n\n**Initial value**: `start`',
    },
    WebkitScrollSnapPointsX: {
      type: 'string',
      description:
        'The **`scroll-snap-points-x`** CSS property defines the horizontal positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
    },
    WebkitScrollSnapPointsY: {
      type: 'string',
      description:
        'The **`scroll-snap-points-y`** CSS property defines the vertical positioning of snap points within the content of the scroll container they are applied to.\n\n**Syntax**: `none | repeat( <length-percentage> )`\n\n**Initial value**: `none`',
    },
    MozAnimation: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['alternate', 'alternate-reverse', 'normal', 'reverse'],
            },
            {
              type: 'string',
              enum: ['backwards', 'both', 'forwards', 'none'],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              const: 'infinite',
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
              const: 'paused',
            },
            {
              type: 'string',
              const: 'running',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
    },
    MozBorderImage: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'repeat',
        },
        {
          type: 'string',
          const: 'round',
        },
        {
          type: 'string',
          const: 'space',
        },
        {
          type: 'string',
          const: 'stretch',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
    },
    MozColumnRule: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
    },
    MozColumns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
    },
    MozTransition: {
      type: 'string',
      description:
        'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
    },
    msContentZoomLimit: {
      type: 'string',
      description:
        "The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.\n\n**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`",
    },
    msContentZoomSnap: {
      type: 'string',
      description:
        "The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.\n\n**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`",
    },
    msFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
    },
    msScrollLimit: {
      type: 'string',
      description:
        "The **\\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.\n\n**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`",
    },
    msScrollSnapX: {
      type: 'string',
      description:
        "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`",
    },
    msScrollSnapY: {
      type: 'string',
      description:
        "The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.\n\n**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`",
    },
    msTransition: {
      type: 'string',
      description:
        'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
    },
    WebkitAnimation: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['alternate', 'alternate-reverse', 'normal', 'reverse'],
            },
            {
              type: 'string',
              enum: ['backwards', 'both', 'forwards', 'none'],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              const: 'infinite',
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
              const: 'paused',
            },
            {
              type: 'string',
              const: 'running',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`',
    },
    WebkitBorderBefore: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-width'> || <'border-style'> || <color>`",
    },
    WebkitBorderImage: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'repeat',
        },
        {
          type: 'string',
          const: 'round',
        },
        {
          type: 'string',
          const: 'space',
        },
        {
          type: 'string',
          const: 'stretch',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`",
    },
    WebkitBorderRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`",
    },
    WebkitColumnRule: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`",
    },
    WebkitColumns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`",
    },
    WebkitFlex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`",
    },
    WebkitFlexFlow: {
      type: 'string',
      description:
        "The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`",
    },
    WebkitMask: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
          enum: ['border-box', 'content-box', 'padding-box'],
        },
        {
          type: 'string',
          const: 'border',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'padding',
        },
        {
          type: 'string',
          const: 'text',
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.\n\n**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`',
    },
    WebkitTextEmphasis: {
      type: 'string',
      description:
        "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`",
    },
    WebkitTextStroke: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.\n\n**Syntax**: `<length> || <color>`',
    },
    WebkitTransition: {
      type: 'string',
      description:
        'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`',
    },
    MozAnimationDelay: {
      type: 'string',
      description:
        'The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    MozAnimationDirection: {
      type: 'string',
      description:
        'The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
    },
    MozAnimationDuration: {
      type: 'string',
      description:
        'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    MozAnimationFillMode: {
      type: 'string',
      description:
        'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
    },
    MozAnimationIterationCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'infinite',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
    },
    MozAnimationName: {
      type: 'string',
      description:
        'The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
    },
    MozAnimationPlayState: {
      type: 'string',
      description:
        'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
    },
    MozAnimationTimingFunction: {
      type: 'string',
      description:
        'The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    MozAppearance: {
      type: 'string',
      description:
        "The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
    },
    MozBackfaceVisibility: {
      type: 'string',
      description:
        'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
    },
    MozBorderBottomColors: {
      type: 'string',
      description:
        'In Mozilla applications like Firefox, the **`-moz-border-bottom-colors`** CSS property sets a list of colors for the bottom border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
    },
    MozBorderEndColor: {
      type: 'string',
      description:
        "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
    },
    MozBorderEndStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
    },
    MozBorderEndWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`",
    },
    MozBorderLeftColors: {
      type: 'string',
      description:
        'In Mozilla applications like Firefox, the **`-moz-border-left-colors`** CSS property sets a list of colors for the left border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
    },
    MozBorderRightColors: {
      type: 'string',
      description:
        'In Mozilla applications like Firefox, the **`-moz-border-right-colors`** CSS property sets a list of colors for the right border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
    },
    MozBorderStartColor: {
      type: 'string',
      description:
        "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`",
    },
    MozBorderStartStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`",
    },
    MozBorderTopColors: {
      type: 'string',
      description:
        'In Mozilla applications like Firefox, the **`-moz-border-top-colors`** CSS property sets a list of colors for the top border.\n\n**Syntax**: `<color>+ | none`\n\n**Initial value**: `none`',
    },
    MozBoxSizing: {
      type: 'string',
      description:
        'The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
    },
    MozColumnCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
    },
    MozColumnFill: {
      type: 'string',
      description:
        "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
    },
    MozColumnGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
    },
    MozColumnRuleColor: {
      type: 'string',
      description:
        'The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    MozColumnRuleStyle: {
      type: 'string',
      description:
        "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
    },
    MozColumnRuleWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
    },
    MozColumnWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
    },
    MozContextProperties: {
      type: 'string',
      description:
        'The `**-moz-context-properties**` property can be used within privileged contexts in Firefox to share the values of specified properties of the element with a child SVG image.\n\n**Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`\n\n**Initial value**: `none`',
    },
    MozFontFeatureSettings: {
      type: 'string',
      description:
        'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
    },
    MozFontLanguageOverride: {
      type: 'string',
      description:
        'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`',
    },
    MozHyphens: {
      type: 'string',
      description:
        'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
    },
    MozImageRegion: {
      type: 'string',
      description:
        'For certain XUL elements and pseudo-elements that use an image from the `list-style-image` property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.\n\n**Syntax**: `<shape> | auto`\n\n**Initial value**: `auto`',
    },
    MozMarginEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
    },
    MozMarginStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
    },
    MozOrient: {
      type: 'string',
      description:
        "The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.\n\n**Syntax**: `inline | block | horizontal | vertical`\n\n**Initial value**: `inline`",
    },
    MozOsxFontSmoothing: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'large',
            'medium',
            'small',
            'x-large',
            'x-small',
            'xx-large',
            'xx-small',
            'xxx-large',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'always',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'never',
        },
      ],
      description:
        'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
    },
    MozPaddingEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
    },
    MozPaddingStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
    },
    MozPerspective: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
    },
    MozPerspectiveOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
    },
    MozStackSizing: {
      type: 'string',
      description:
        '**`-moz-stack-sizing`** is an extended CSS property. Normally, a `<xul:stack>` will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.\n\n**Syntax**: `ignore | stretch-to-fit`\n\n**Initial value**: `stretch-to-fit`',
    },
    MozTabSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
    },
    MozTextBlink: {
      type: 'string',
      description:
        'The **`-moz-text-blink`** non-standard Mozilla CSS extension specifies the blink mode.\n\n**Syntax**: `none | blink`\n\n**Initial value**: `none`',
    },
    MozTextSizeAdjust: {
      type: 'string',
      description:
        'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
    },
    MozTransformOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
    },
    MozTransformStyle: {
      type: 'string',
      description:
        'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
    },
    MozTransitionDelay: {
      type: 'string',
      description:
        "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
    },
    MozTransitionDuration: {
      type: 'string',
      description:
        'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    MozTransitionProperty: {
      type: 'string',
      description:
        'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
    },
    MozTransitionTimingFunction: {
      type: 'string',
      description:
        'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    MozUserFocus: {
      type: 'string',
      description:
        'The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.\n\n**Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`\n\n**Initial value**: `none`',
    },
    MozUserModify: {
      type: 'string',
      description:
        'The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.\n\n**Syntax**: `read-only | read-write | write-only`\n\n**Initial value**: `read-only`',
    },
    MozUserSelect: {
      type: 'string',
      description:
        "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
    },
    MozWindowDragging: {
      type: 'string',
      description:
        'The **`-moz-window-dragging`** CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.\n\n**Syntax**: `drag | no-drag`\n\n**Initial value**: `drag`',
    },
    MozWindowShadow: {
      type: 'string',
      description:
        'The **`-moz-window-shadow`** CSS property specifies whether a window will have a shadow. It only works on Mac OS X.\n\n**Syntax**: `default | menu | tooltip | sheet | none`\n\n**Initial value**: `default`',
    },
    msAccelerator: {
      type: 'string',
      description:
        'The **`-ms-accelerator`** CSS property is a Microsoft extension that sets or retrieves a string indicating whether the object represents a keyboard shortcut.\n\n**Syntax**: `false | true`\n\n**Initial value**: `false`',
    },
    msAlignSelf: {
      type: 'string',
      description:
        "The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
    },
    msBlockProgression: {
      type: 'string',
      description:
        'The **`-ms-block-progression`** CSS property is a Microsoft extension that specifies the block progression and layout orientation.\n\n**Syntax**: `tb | rl | bt | lr`\n\n**Initial value**: `tb`',
    },
    msContentZoomChaining: {
      type: 'string',
      description:
        'The **`-ms-content-zoom-chaining`** CSS property is a Microsoft extension specifying the zoom behavior that occurs when a user hits the zoom limit during page manipulation.\n\n**Syntax**: `none | chained`\n\n**Initial value**: `none`',
    },
    msContentZoomLimitMax: {
      type: 'string',
      description:
        "The **`-ms-content-zoom-limit-max`** CSS property is a Microsoft extension that specifies the selected elements' maximum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `400%`",
    },
    msContentZoomLimitMin: {
      type: 'string',
      description:
        'The **`-ms-content-zoom-limit-min`** CSS property is a Microsoft extension that specifies the minimum zoom factor.\n\n**Syntax**: `<percentage>`\n\n**Initial value**: `100%`',
    },
    msContentZoomSnapPoints: {
      type: 'string',
      description:
        'The **`-ms-content-zoom-snap-points`** CSS property is a Microsoft extension that specifies where zoom snap-points are located.\n\n**Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`\n\n**Initial value**: `snapInterval(0%, 100%)`',
    },
    msContentZoomSnapType: {
      type: 'string',
      description:
        'The **`-ms-content-zoom-snap-type`** CSS property is a Microsoft extension that specifies how zooming is affected by defined snap-points.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
    },
    msContentZooming: {
      type: 'string',
      description:
        'The **`-ms-content-zooming`** CSS property is a Microsoft extension that specifies whether zooming is enabled.\n\n**Syntax**: `none | zoom`\n\n**Initial value**: zoom for the top level element, none for all other elements',
    },
    msFilter: {
      type: 'string',
      description:
        'The `-ms-filter` CSS property is a Microsoft extension that sets or retrieves the filter or collection of filters applied to an object.\n\n**Syntax**: `<string>`\n\n**Initial value**: "" (the empty string)',
    },
    msFlexDirection: {
      type: 'string',
      description:
        'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
    },
    msFlexPositive: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
    },
    msFlowFrom: {
      type: 'string',
      description:
        'The **`-ms-flow-from`** CSS property is a Microsoft extension that gets or sets a value identifying a region container in the document that accepts the content flow from the data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`',
    },
    msFlowInto: {
      type: 'string',
      description:
        "The **`-ms-flow-into`** CSS property is a Microsoft extension that gets or sets a value identifying an iframe container in the document that serves as the region's data source.\n\n**Syntax**: `[ none | <custom-ident> ]#`\n\n**Initial value**: `none`",
    },
    msGridColumns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
    },
    msGridRows: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list>`\n\n**Initial value**: `none`',
    },
    msHighContrastAdjust: {
      type: 'string',
      description:
        'The **`-ms-high-contrast-adjust`** CSS property is a Microsoft extension that gets or sets a value indicating whether to override any CSS properties that would have been set in high contrast mode.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`',
    },
    msHyphenateLimitChars: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`-ms-hyphenate-limit-chars`** CSS property is a Microsoft extension that specifies one to three values indicating the minimum number of characters in a hyphenated word. If the word does not meet the required minimum number of characters in the word, before the hyphen, or after the hyphen, then the word is not hyphenated.\n\n**Syntax**: `auto | <integer>{1,3}`\n\n**Initial value**: `auto`',
    },
    msHyphenateLimitLines: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'no-limit',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`-ms-hyphenate-limit-lines`** CSS property is a Microsoft extension specifying the maximum number of consecutive lines in an element that may be ended with a hyphenated word.\n\n**Syntax**: `no-limit | <integer>`\n\n**Initial value**: `no-limit`',
    },
    msHyphenateLimitZone: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `**-ms-hyphenate-limit-zone**` CSS property is a Microsoft extension specifying the width of the hyphenation zone.\n\n**Syntax**: `<percentage> | <length>`\n\n**Initial value**: `0`',
    },
    msHyphens: {
      type: 'string',
      description:
        'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
    },
    msImeAlign: {
      type: 'string',
      description:
        'The **`-ms-ime-align`** CSS property is a Microsoft extension aligning the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active. The extension is implemented in Microsoft Edge and Internet Explorer 11.\n\n**Syntax**: `auto | after`\n\n**Initial value**: `auto`',
    },
    msJustifySelf: {
      type: 'string',
      description:
        'The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`',
    },
    msLineBreak: {
      type: 'string',
      description:
        'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
    },
    msOrder: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
    },
    msOverflowStyle: {
      type: 'string',
      description:
        'The **`-ms-overflow-style`** CSS property is a Microsoft extension controlling the behavior of scrollbars when the content of an element overflows.\n\n**Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`\n\n**Initial value**: `auto`',
    },
    msOverflowX: {
      type: 'string',
      description:
        "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
    },
    msOverflowY: {
      type: 'string',
      description:
        "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`",
    },
    msScrollChaining: {
      type: 'string',
      description:
        'The `**-ms-scroll-chaining**` CSS property is a Microsoft extension that specifies the scrolling behavior that occurs when a user hits the scroll limit during a manipulation.\n\n**Syntax**: `chained | none`\n\n**Initial value**: `chained`',
    },
    msScrollLimitXMax: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `**-ms-scroll-limit-x-max**` CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollLeft` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
    },
    msScrollLimitXMin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`-ms-scroll-limit-x-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollLeft` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
    },
    msScrollLimitYMax: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`-ms-scroll-limit-y-max`** CSS property is a Microsoft extension that specifies the maximum value for the `Element.scrollTop` property.\n\n**Syntax**: `auto | <length>`\n\n**Initial value**: `auto`',
    },
    msScrollLimitYMin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`-ms-scroll-limit-y-min`** CSS property is a Microsoft extension that specifies the minimum value for the `Element.scrollTop` property.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
    },
    msScrollRails: {
      type: 'string',
      description:
        'The **`-ms-scroll-rails`** CSS property is a Microsoft extension that specifies whether scrolling locks to the primary axis of motion.\n\n**Syntax**: `none | railed`\n\n**Initial value**: `railed`',
    },
    msScrollSnapPointsX: {
      type: 'string',
      description:
        'The **`-ms-scroll-snap-points-x`** CSS property is a Microsoft extension that specifies where snap-points will be located along the x-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
    },
    msScrollSnapPointsY: {
      type: 'string',
      description:
        'The **`-ms-scroll-snap-points-y`** CSS property is a Microsoft extension that specifies where snap-points will be located along the y-axis.\n\n**Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`\n\n**Initial value**: `snapInterval(0px, 100%)`',
    },
    msScrollSnapType: {
      type: 'string',
      description:
        'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | proximity | mandatory`\n\n**Initial value**: `none`',
    },
    msScrollTranslation: {
      type: 'string',
      description:
        'The **`-ms-scroll-translation`** CSS property is a Microsoft extension that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.\n\n**Syntax**: `none | vertical-to-horizontal`\n\n**Initial value**: `none`',
    },
    msScrollbar3dlightColor: {
      type: 'string',
      description:
        'The **`-ms-scrollbar-3dlight-color`** CSS property is a Microsoft extension specifying the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
    },
    msScrollbarArrowColor: {
      type: 'string',
      description:
        'The **`-ms-scrollbar-arrow-color`** CSS property is a Microsoft extension that specifies the color of the arrow elements of a scroll arrow.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ButtonText`',
    },
    msScrollbarBaseColor: {
      type: 'string',
      description:
        'The `**-ms-scrollbar-base-color**` CSS property is a Microsoft extension that specifies the base color of the main elements of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: depends on user agent',
    },
    msScrollbarDarkshadowColor: {
      type: 'string',
      description:
        "The **`-ms-scrollbar-darkshadow-color`** CSS property is a Microsoft extension that specifies the color of a scroll bar's gutter.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`",
    },
    msScrollbarFaceColor: {
      type: 'string',
      description:
        'The `**-ms-scrollbar-face-color**` CSS property is a Microsoft extension that specifies the color of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDFace`',
    },
    msScrollbarHighlightColor: {
      type: 'string',
      description:
        'The `**-ms-scrollbar-highlight-color**` CSS property is a Microsoft extension that specifies the color of the slider tray, the top and left edges of the scroll box, and the scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDHighlight`',
    },
    msScrollbarShadowColor: {
      type: 'string',
      description:
        'The **`-ms-scrollbar-shadow-color`** CSS property is a Microsoft extension that specifies the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.\n\n**Syntax**: `<color>`\n\n**Initial value**: `ThreeDDarkShadow`',
    },
    msTextAutospace: {
      type: 'string',
      description:
        'The **`-ms-text-autospace`** CSS property is a Microsoft extension that specifies the autospacing and narrow space width adjustment of text.\n\n**Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`\n\n**Initial value**: `none`',
    },
    msTextCombineHorizontal: {
      type: 'string',
      description:
        'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
    },
    msTextOverflow: {
      type: 'string',
      description:
        "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
    },
    msTouchAction: {
      type: 'string',
      description:
        "The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`",
    },
    msTouchSelect: {
      type: 'string',
      description:
        'The **`-ms-touch-select`** CSS property is a Microsoft extension that toggles the gripper visual elements that enable touch text selection.\n\n**Syntax**: `grippers | none`\n\n**Initial value**: `grippers`',
    },
    msTransform: {
      type: 'string',
      description:
        'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
    },
    msTransformOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
    },
    msTransitionDelay: {
      type: 'string',
      description:
        "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
    },
    msTransitionDuration: {
      type: 'string',
      description:
        'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    msTransitionProperty: {
      type: 'string',
      description:
        'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
    },
    msTransitionTimingFunction: {
      type: 'string',
      description:
        'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    msUserSelect: {
      type: 'string',
      description:
        "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `none | element | text`\n\n**Initial value**: `text`",
    },
    msWordBreak: {
      type: 'string',
      description:
        'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`',
    },
    msWrapFlow: {
      type: 'string',
      description:
        'The **`-ms-wrap-flow`** CSS property is a Microsoft extension that specifies how exclusions impact inline content within block-level elements.\n\n**Syntax**: `auto | both | start | end | maximum | clear`\n\n**Initial value**: `auto`',
    },
    msWrapMargin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`-ms-wrap-margin`** CSS property is a Microsoft extension that specifies a margin that offsets the inner wrap shape from other shapes.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
    },
    msWrapThrough: {
      type: 'string',
      description:
        'The **`-ms-wrap-through`** CSS property is a Microsoft extension that specifies how content should wrap around an exclusion element.\n\n**Syntax**: `wrap | none`\n\n**Initial value**: `wrap`',
    },
    msWritingMode: {
      type: 'string',
      description:
        'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
    },
    OObjectFit: {
      type: 'string',
      description:
        'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`',
    },
    OObjectPosition: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`",
    },
    OTabSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`',
    },
    OTextOverflow: {
      type: 'string',
      description:
        "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`",
    },
    OTransformOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
    },
    WebkitAlignContent: {
      type: 'string',
      description:
        "The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`",
    },
    WebkitAlignItems: {
      type: 'string',
      description:
        'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`',
    },
    WebkitAlignSelf: {
      type: 'string',
      description:
        "The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`",
    },
    WebkitAnimationDelay: {
      type: 'string',
      description:
        'The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    WebkitAnimationDirection: {
      type: 'string',
      description:
        'The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`',
    },
    WebkitAnimationDuration: {
      type: 'string',
      description:
        'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    WebkitAnimationFillMode: {
      type: 'string',
      description:
        'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`',
    },
    WebkitAnimationIterationCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'infinite',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`',
    },
    WebkitAnimationName: {
      type: 'string',
      description:
        'The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`',
    },
    WebkitAnimationPlayState: {
      type: 'string',
      description:
        'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`',
    },
    WebkitAnimationTimingFunction: {
      type: 'string',
      description:
        'The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    WebkitAppearance: {
      type: 'string',
      description:
        "The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`\n\n**Initial value**: `none` (but this value is overridden in the user agent CSS)",
    },
    WebkitBackdropFilter: {
      type: 'string',
      description:
        'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
    },
    WebkitBackfaceVisibility: {
      type: 'string',
      description:
        'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`',
    },
    WebkitBackgroundClip: {
      type: 'string',
      description:
        "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`",
    },
    WebkitBackgroundOrigin: {
      type: 'string',
      description:
        "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`",
    },
    WebkitBackgroundSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`",
    },
    WebkitBorderBeforeColor: {
      type: 'string',
      description: '**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitBorderBeforeStyle: {
      type: 'string',
      description:
        "**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
    },
    WebkitBorderBeforeWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
    },
    WebkitBorderBottomLeftRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    WebkitBorderBottomRightRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    WebkitBorderImageSlice: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`",
    },
    WebkitBorderTopLeftRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    WebkitBorderTopRightRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`',
    },
    WebkitBoxDecorationBreak: {
      type: 'string',
      description:
        "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`",
    },
    WebkitBoxReflect: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'above',
        },
        {
          type: 'string',
          const: 'below',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
      ],
      description:
        'The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.\n\n**Syntax**: `[ above | below | right | left ]? <length>? <image>?`\n\n**Initial value**: `none`',
    },
    WebkitBoxShadow: {
      type: 'string',
      description:
        "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`",
    },
    WebkitBoxSizing: {
      type: 'string',
      description:
        'The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`',
    },
    WebkitClipPath: {
      type: 'string',
      description:
        'The `**clip-path**` CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.\n\n**Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`\n\n**Initial value**: `none`',
    },
    WebkitColumnCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`",
    },
    WebkitColumnFill: {
      type: 'string',
      description:
        "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`",
    },
    WebkitColumnGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`",
    },
    WebkitColumnRuleColor: {
      type: 'string',
      description:
        'The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitColumnRuleStyle: {
      type: 'string',
      description:
        "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`",
    },
    WebkitColumnRuleWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`",
    },
    WebkitColumnSpan: {
      type: 'string',
      description:
        'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`',
    },
    WebkitColumnWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`",
    },
    WebkitFilter: {
      type: 'string',
      description:
        'The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`',
    },
    WebkitFlexBasis: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-auto',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`",
    },
    WebkitFlexDirection: {
      type: 'string',
      description:
        'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`',
    },
    WebkitFlexGrow: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`',
    },
    WebkitFlexShrink: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`',
    },
    WebkitFlexWrap: {
      type: 'string',
      description:
        'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`',
    },
    WebkitFontFeatureSettings: {
      type: 'string',
      description:
        'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`',
    },
    WebkitFontKerning: {
      type: 'string',
      description:
        'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`',
    },
    WebkitFontSmoothing: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'large',
            'medium',
            'small',
            'x-large',
            'x-small',
            'xx-large',
            'xx-small',
            'xxx-large',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'always',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'never',
        },
      ],
      description:
        'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`',
    },
    WebkitFontVariantLigatures: {
      type: 'string',
      description:
        'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`',
    },
    WebkitHyphens: {
      type: 'string',
      description:
        'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`',
    },
    WebkitJustifyContent: {
      type: 'string',
      description:
        'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`',
    },
    WebkitLineBreak: {
      type: 'string',
      description:
        'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`',
    },
    WebkitLineClamp: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines.\n\n**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
    },
    WebkitMarginEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
    },
    WebkitMarginStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`",
    },
    WebkitMaskAttachment: {
      type: 'string',
      description:
        "If a `-webkit-mask-image` is specified, `-webkit-mask-attachment` determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`",
    },
    WebkitMaskClip: {
      type: 'string',
      description:
        'The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <box> | border | padding | content | text ]#`\n\n**Initial value**: `border`',
    },
    WebkitMaskComposite: {
      type: 'string',
      description:
        'The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.\n\n**Syntax**: `<composite-style>#`\n\n**Initial value**: `source-over`',
    },
    WebkitMaskImage: {
      type: 'string',
      description:
        'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`',
    },
    WebkitMaskOrigin: {
      type: 'string',
      description:
        'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `[ <box> | border | padding | content ]#`\n\n**Initial value**: `padding`',
    },
    WebkitMaskPosition: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `0% 0%`',
    },
    WebkitMaskPositionX: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
      ],
      description:
        'The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.\n\n**Syntax**: `[ <length-percentage> | left | center | right ]#`\n\n**Initial value**: `0%`',
    },
    WebkitMaskPositionY: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        'The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.\n\n**Syntax**: `[ <length-percentage> | top | center | bottom ]#`\n\n**Initial value**: `0%`',
    },
    WebkitMaskRepeat: {
      type: 'string',
      description:
        'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`',
    },
    WebkitMaskRepeatX: {
      type: 'string',
      description:
        'The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
    },
    WebkitMaskRepeatY: {
      type: 'string',
      description:
        'The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.\n\n**Syntax**: `repeat | no-repeat | space | round`\n\n**Initial value**: `repeat`',
    },
    WebkitMaskSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`',
    },
    WebkitMaxInlineSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`",
    },
    WebkitOrder: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`',
    },
    WebkitOverflowScrolling: {
      type: 'string',
      description:
        'The `-webkit-overflow-scrolling` CSS property controls whether or not touch devices use momentum-based scrolling for a given element.\n\n**Syntax**: `auto | touch`\n\n**Initial value**: `auto`',
    },
    WebkitPaddingEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
    },
    WebkitPaddingStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`",
    },
    WebkitPerspective: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`',
    },
    WebkitPerspectiveOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`',
    },
    WebkitPrintColorAdjust: {
      type: 'string',
      description:
        "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`",
    },
    WebkitRubyPosition: {
      type: 'string',
      description:
        'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`',
    },
    WebkitScrollSnapType: {
      type: 'string',
      description:
        'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`',
    },
    WebkitShapeMargin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`',
    },
    WebkitTapHighlightColor: {
      type: 'string',
      description:
        "**`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.\n\n**Syntax**: `<color>`\n\n**Initial value**: `black`",
    },
    WebkitTextCombine: {
      type: 'string',
      description:
        'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`',
    },
    WebkitTextDecorationColor: {
      type: 'string',
      description:
        'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitTextDecorationLine: {
      type: 'string',
      description:
        'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`',
    },
    WebkitTextDecorationSkip: {
      type: 'string',
      description:
        'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`',
    },
    WebkitTextDecorationStyle: {
      type: 'string',
      description:
        'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`',
    },
    WebkitTextEmphasisColor: {
      type: 'string',
      description:
        'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitTextEmphasisPosition: {
      type: 'string',
      description:
        "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`",
    },
    WebkitTextEmphasisStyle: {
      type: 'string',
      description:
        'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`',
    },
    WebkitTextFillColor: {
      type: 'string',
      description:
        'The **`-webkit-text-fill-color`** CSS property specifies the fill color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitTextOrientation: {
      type: 'string',
      description:
        'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`',
    },
    WebkitTextSizeAdjust: {
      type: 'string',
      description:
        'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).',
    },
    WebkitTextStrokeColor: {
      type: 'string',
      description:
        'The **`-webkit-text-stroke-color`** CSS property specifies the stroke color of characters of text. If this property is not set, the value of the `color` property is used.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`',
    },
    WebkitTextStrokeWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`-webkit-text-stroke-width`** CSS property specifies the width of the stroke for text.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`',
    },
    WebkitTextUnderlinePosition: {
      type: 'string',
      description:
        "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`",
    },
    WebkitTouchCallout: {
      type: 'string',
      description:
        'The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.\n\n**Syntax**: `default | none`\n\n**Initial value**: `default`',
    },
    WebkitTransform: {
      type: 'string',
      description:
        'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`',
    },
    WebkitTransformOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`",
    },
    WebkitTransformStyle: {
      type: 'string',
      description:
        'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`',
    },
    WebkitTransitionDelay: {
      type: 'string',
      description:
        "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`",
    },
    WebkitTransitionDuration: {
      type: 'string',
      description:
        'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`',
    },
    WebkitTransitionProperty: {
      type: 'string',
      description:
        'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all',
    },
    WebkitTransitionTimingFunction: {
      type: 'string',
      description:
        'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`',
    },
    WebkitUserModify: {
      type: 'string',
      description:
        '**Syntax**: `read-only | read-write | read-write-plaintext-only`\n\n**Initial value**: `read-only`',
    },
    WebkitUserSelect: {
      type: 'string',
      description:
        "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`",
    },
    WebkitWritingMode: {
      type: 'string',
      description:
        'The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (`html` element for HTML documents).\n\n**Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`\n\n**Initial value**: `horizontal-tb`',
    },
    all: {
      type: 'string',
      enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
      description:
        "The `**all**` shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.\n\n**Syntax**: `initial | inherit | unset | revert`\n\n**Initial value**: There is no practical initial value for it.\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **37** | **27**  | **9.1** | **79** | No  |",
    },
    animation: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['alternate', 'alternate-reverse', 'normal', 'reverse'],
            },
            {
              type: 'string',
              enum: ['backwards', 'both', 'forwards', 'none'],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              const: 'infinite',
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
              const: 'paused',
            },
            {
              type: 'string',
              const: 'running',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.\n\n**Syntax**: `<single-animation>#`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    background: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'number',
                  const: 0,
                },
                {
                  type: 'string',
                  const: 'bottom',
                },
                {
                  type: 'string',
                  const: 'center',
                },
                {
                  type: 'string',
                  const: 'left',
                },
                {
                  type: 'string',
                  const: 'right',
                },
                {
                  type: 'string',
                  const: 'top',
                },
              ],
            },
            {
              type: 'string',
            },
            {
              type: 'string',
              enum: ['fixed', 'local', 'scroll'],
            },
            {
              type: 'string',
              enum: ['border-box', 'content-box', 'padding-box'],
            },
            {
              type: 'string',
              const: 'none',
            },
            {
              type: 'string',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.\n\n**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    border: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderColor: {
      type: 'string',
      description:
        "The **`border-color`** shorthand CSS property sets the color of an element's border.\n\n**Syntax**: `<color>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderImage: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'repeat',
        },
        {
          type: 'string',
          const: 'round',
        },
        {
          type: 'string',
          const: 'space',
        },
        {
          type: 'string',
          const: 'stretch',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.\n\n**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE   | | :-----: | :-------: | :-----: | :----: | :----: | | **16**  |  **15**   |  **6**  | **12** | **11** | | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |",
    },
    borderInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.\n\n**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-left`** shorthand CSS property sets all the properties of an element's left border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.\n\n**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
    },
    borderRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-right`** shorthand CSS property sets all the properties of an element's right border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
    },
    borderStyle: {
      type: 'string',
      description:
        "The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.\n\n**Syntax**: `<line-style>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-top`** shorthand CSS property sets all the properties of an element's top border.\n\n**Syntax**: `<line-width> || <line-style> || <color>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`border-width`** shorthand CSS property sets the width of an element's border.\n\n**Syntax**: `<line-width>{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    columnRule: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
    },
    columns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.\n\n**Syntax**: `<'column-width'> || <'column-count'>`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **50** | **52**  |  **9**  | **12** | **10** | |        |         | 3 _-x-_ |        |        |",
    },
    flex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.\n\n**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |    IE    | | :------: | :-----: | :-------: | :----: | :------: | |  **29**  | **20**  |   **9**   | **12** |  **11**  | | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |",
    },
    flexFlow: {
      type: 'string',
      description:
        "The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.\n\n**Syntax**: `<'flex-direction'> || <'flex-wrap'>`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **29**  | **28**  |   **9**   | **12** | **11** | | 21 _-x-_ |         | 6.1 _-x-_ |        |        |",
    },
    gap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        "The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.\n\n**Syntax**: `<'row-gap'> <'column-gap'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|     Chrome      |     Firefox     |      Safari       |  Edge  | IE  | | :-------------: | :-------------: | :---------------: | :----: | :-: | |     **66**      |     **61**      |      **12**       | **16** | No  | | 57 _(grid-gap)_ | 52 _(grid-gap)_ | 10.1 _(grid-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **66** | **61**  |   No   | **16** | No  |\n\n---",
    },
    grid: {
      type: 'string',
      description:
        "The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.\n\n**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
    },
    gridArea: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-area`** CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridColumn: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
    },
    gridRow: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-row`** CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.\n\n**Syntax**: `<grid-line> [ / <grid-line> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridTemplate: {
      type: 'string',
      description:
        "The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.\n\n**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |",
    },
    lineClamp: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
    },
    listStyle: {
      type: 'string',
      description:
        "The **`list-style`** CSS shorthand property allows you set all the list style properties at once.\n\n**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    margin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.\n\n**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    maskBorder: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'alpha',
        },
        {
          type: 'string',
          const: 'luminance',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'repeat',
        },
        {
          type: 'string',
          const: 'round',
        },
        {
          type: 'string',
          const: 'space',
        },
        {
          type: 'string',
          const: 'stretch',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.\n\n**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`",
    },
    motion: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  | | :-----------: | :-----: | :----: | :----: | :-: | |    **55**     | **72**  |   No   | **79** | No  | | 46 _(motion)_ |         |        |        |     |",
    },
    offset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.\n\n**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`\n\n|    Chrome     | Firefox | Safari |  Edge  | IE  | | :-----------: | :-----: | :----: | :----: | :-: | |    **55**     | **72**  |   No   | **79** | No  | | 46 _(motion)_ |         |        |        |     |",
    },
    outline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'invert',
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`outline`** CSS shorthand property set all the outline properties in a single declaration.\n\n**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
    },
    padding: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.\n\n**Syntax**: `[ <length> | <percentage> ]{1,4}`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    placeItems: {
      type: 'string',
      description:
        "The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.\n\n**Syntax**: `<'align-items'> <'justify-items'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **45**  | **11** | **79** | No  |\n\n---",
    },
    placeSelf: {
      type: 'string',
      description:
        "The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.\n\n**Syntax**: `<'align-self'> <'justify-self'>?`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **45**  | **11** | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **45**  | **11** | **79** | No  |\n\n---",
    },
    textEmphasis: {
      type: 'string',
      description:
        "The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.\n\n**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  | | :----------: | :-----: | :-----: | :----------: | :-: | | **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
    },
    transition: {
      type: 'string',
      description:
        'The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.\n\n**Syntax**: `<single-transition>#`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
    },
    alignContent: {
      type: 'string',
      description:
        "The CSS **`align-content`** property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.\n\n**Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **29**  | **28**  |   **9**   | **12** | **11** | | 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |\n\n---",
    },
    alignItems: {
      type: 'string',
      description:
        'The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.\n\n**Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **52**  | **20**  |  **9**  | **12** | **11** | | 21 _-x-_ |         | 7 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |\n\n---',
    },
    alignSelf: {
      type: 'string',
      description:
        "The **`align-self`** CSS property overrides a grid or flex item's `align-items` value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **36**  | **20**  |   **9**   | **12** | **11** | | 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      | | :----: | :-----: | :------: | :----: | :----------: | | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |\n\n---",
    },
    alignTracks: {
      type: 'string',
      description:
        'The **`align-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.\n\n**Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   n/a   |   No   |  No  | No  |',
    },
    animationDelay: {
      type: 'string',
      description:
        'The **`animation-delay`** CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationDirection: {
      type: 'string',
      description:
        'The **`animation-direction`** CSS property sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.\n\n**Syntax**: `<single-animation-direction>#`\n\n**Initial value**: `normal`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationDuration: {
      type: 'string',
      description:
        'The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationFillMode: {
      type: 'string',
      description:
        'The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.\n\n**Syntax**: `<single-animation-fill-mode>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |',
    },
    animationIterationCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'infinite',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`animation-iteration-count`** CSS property sets the number of times an animation sequence should be played before stopping.\n\n**Syntax**: `<single-animation-iteration-count>#`\n\n**Initial value**: `1`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationName: {
      type: 'string',
      description:
        'The **`animation-name`** CSS property specifies the names of one or more `@keyframes` at-rules describing the animation or animations to apply to the element.\n\n**Syntax**: `[ none | <keyframes-name> ]#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationPlayState: {
      type: 'string',
      description:
        'The **`animation-play-state`** CSS property sets whether an animation is running or paused.\n\n**Syntax**: `<single-animation-play-state>#`\n\n**Initial value**: `running`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    animationTimingFunction: {
      type: 'string',
      description:
        'The **`animation-timing-function`** CSS property sets how an animation progresses through the duration of each cycle.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **43**  | **16**  |  **9**  | **12** | **10** | | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |',
    },
    appearance: {
      type: 'string',
      description:
        "The `**appearance**` CSS property is used to display an element using platform-native styling, based on the operating system's theme. The **`-moz-appearance`** and **`-webkit-appearance`** properties are non-standard versions of this property, used (respectively) by Gecko (Firefox) and by WebKit-based (e.g., Safari) and Blink-based (e.g., Chrome, Opera) browsers to achieve the same thing. Note that Firefox and Edge also support **`-webkit-appearance`**, for compatibility reasons.\n\n**Syntax**: `none | auto | textfield | menulist-button | <compat-auto>`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |   Edge   | IE  | | :-----: | :-----: | :---------: | :------: | :-: | | **84**  | **80**  | **3** _-x-_ |  **84**  | No  | | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |     |",
    },
    aspectRatio: {
      type: 'string',
      description:
        'The **`aspect-ratio`**  CSS property sets a **preferred aspect ratio** for the box, which will be used in the calculation of auto sizes and some other layout functions.\n\n**Syntax**: `auto | <ratio>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |   n/a   |   No   |  No  | No  |',
    },
    backdropFilter: {
      type: 'string',
      description:
        'The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.\n\n**Syntax**: `none | <filter-function-list>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |   Safari    |  Edge  | IE  | | :----: | :-----: | :---------: | :----: | :-: | | **76** |   n/a   | **9** _-x-_ | **17** | No  |',
    },
    backfaceVisibility: {
      type: 'string',
      description:
        'The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.\n\n**Syntax**: `visible | hidden`\n\n**Initial value**: `visible`\n\n|  Chrome  | Firefox  |    Safari     |  Edge  |   IE   | | :------: | :------: | :-----------: | :----: | :----: | |  **36**  |  **16**  | **5.1** _-x-_ | **12** | **10** | | 12 _-x-_ | 10 _-x-_ |               |        |        |',
    },
    backgroundAttachment: {
      type: 'string',
      description:
        "The **`background-attachment`** CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.\n\n**Syntax**: `<attachment>#`\n\n**Initial value**: `scroll`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    backgroundBlendMode: {
      type: 'string',
      description:
        "The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.\n\n**Syntax**: `<blend-mode>#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **35** | **30**  | **8**  | **79** | No  |",
    },
    backgroundClip: {
      type: 'string',
      description:
        "The **`background-clip`** CSS property sets whether an element's background extends underneath its border box, padding box, or content box.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `border-box`\n\n| Chrome | Firefox |   Safari    |  Edge  |  IE   | | :----: | :-----: | :---------: | :----: | :---: | | **1**  |  **4**  | **3** _-x-_ | **12** | **9** |",
    },
    backgroundColor: {
      type: 'string',
      description:
        'The **`background-color`** CSS property sets the background color of an element.\n\n**Syntax**: `<color>`\n\n**Initial value**: `transparent`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    backgroundImage: {
      type: 'string',
      description:
        'The **`background-image`** CSS property sets one or more background images on an element.\n\n**Syntax**: `<bg-image>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    backgroundOrigin: {
      type: 'string',
      description:
        "The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.\n\n**Syntax**: `<box>#`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **4**  | **3**  | **12** | **9** |",
    },
    backgroundPosition: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `<bg-position>#`\n\n**Initial value**: `0% 0%`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    backgroundPositionX: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'x-end',
        },
        {
          type: 'string',
          const: 'x-start',
        },
      ],
      description:
        'The **`background-position-x`** CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `left`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **49**  | **1**  | **12** | **6** |',
    },
    backgroundPositionY: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'top',
        },
        {
          type: 'string',
          const: 'y-end',
        },
        {
          type: 'string',
          const: 'y-start',
        },
      ],
      description:
        'The **`background-position-y`** CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by `background-origin`.\n\n**Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **49**  | **1**  | **12** | **6** |',
    },
    backgroundRepeat: {
      type: 'string',
      description:
        'The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `repeat`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    backgroundSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **3**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
    },
    blockOverflow: {
      type: 'string',
      description:
        '**Syntax**: `clip | ellipsis | <string>`\n\n**Initial value**: `clip`',
    },
    blockSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockColor: {
      type: 'string',
      description:
        "The **`border-block-color`** CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderBlockEndColor: {
      type: 'string',
      description:
        "The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockEndStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-block-end-style`** CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockEndWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockStartColor: {
      type: 'string',
      description:
        "The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockStartStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockStartWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderBlockStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-block-style`** CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderBlockWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-block-width`** CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderBottomColor: {
      type: 'string',
      description:
        "The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderBottomLeftRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-left-radius`** CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |',
    },
    borderBottomRightRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-bottom-right-radius`** CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |',
    },
    borderBottomStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
    },
    borderBottomWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        'The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    borderCollapse: {
      type: 'string',
      description:
        'The **`border-collapse`** CSS property sets whether cells inside a `<table>` have shared or separate borders.\n\n**Syntax**: `collapse | separate`\n\n**Initial value**: `separate`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **5** |',
    },
    borderEndEndRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-end-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  |   No   |  No  | No  |",
    },
    borderEndStartRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-end-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  |   No   |  No  | No  |",
    },
    borderImageOutset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image-outset`** CSS property sets the distance by which an element's border image is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
    },
    borderImageRepeat: {
      type: 'string',
      description:
        "The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
    },
    borderImageSlice: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.\n\n**Syntax**: `<number-percentage>{1,4} && fill?`\n\n**Initial value**: `100%`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
    },
    borderImageSource: {
      type: 'string',
      description:
        "The **`border-image-source`** CSS property sets the source image used to create an element's border image.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **15**  | **6**  | **12** | **11** |",
    },
    borderImageWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`border-image-width`** CSS property sets the width of an element's border image.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `1`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **15** | **13**  | **6**  | **12** | **11** |",
    },
    borderInlineColor: {
      type: 'string',
      description:
        "The **`border-inline-color`** CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color` and `border-bottom-color`, or `border-right-color` and `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>{1,2}`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderInlineEndColor: {
      type: 'string',
      description:
        "The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  | | :----: | :-------------------------: | :------: | :----: | :-: | | **69** |           **41**            | **12.1** | **79** | No  | |        | 3 _(-moz-border-end-color)_ |          |        |     |",
    },
    borderInlineEndStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  | | :----: | :-------------------------: | :------: | :----: | :-: | | **69** |           **41**            | **12.1** | **79** | No  | |        | 3 _(-moz-border-end-style)_ |          |        |     |",
    },
    borderInlineEndWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome |           Firefox           |  Safari  |  Edge  | IE  | | :----: | :-------------------------: | :------: | :----: | :-: | | **69** |           **41**            | **12.1** | **79** | No  | |        | 3 _(-moz-border-end-width)_ |          |        |     |",
    },
    borderInlineStartColor: {
      type: 'string',
      description:
        "The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-color'>`\n\n**Initial value**: `currentcolor`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  | | :----: | :---------------------------: | :------: | :----: | :-: | | **69** |            **41**             | **12.1** | **79** | No  | |        | 3 _(-moz-border-start-color)_ |          |        |     |",
    },
    borderInlineStartStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome |            Firefox            |  Safari  |  Edge  | IE  | | :----: | :---------------------------: | :------: | :----: | :-: | | **69** |            **41**             | **12.1** | **79** | No  | |        | 3 _(-moz-border-start-style)_ |          |        |     |",
    },
    borderInlineStartWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    borderInlineStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-inline-style`** CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style` and `border-bottom-style`, or `border-left-style` and `border-right-style` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderInlineWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The **`border-inline-width`** CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width` and `border-bottom-width`, or `border-left-width`, and `border-right-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'border-top-width'>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    borderLeftColor: {
      type: 'string',
      description:
        "The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderLeftStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-left-style`** CSS property sets the line style of an element's left `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
    },
    borderLeftWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        'The **`border-left-width`** CSS property sets the width of the left border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    borderRightColor: {
      type: 'string',
      description:
        "The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderRightStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-right-style`** CSS property sets the line style of an element's right `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
    },
    borderRightWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        'The **`border-right-width`** CSS property sets the width of the right border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    borderSpacing: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.\n\n**Syntax**: `<length> <length>?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |',
    },
    borderStartEndRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-start-end-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  |   No   |  No  | No  |",
    },
    borderStartStartRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`border-start-start-radius`** CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's `writing-mode`, `direction`, and `text-orientation`. This is useful when building styles to work regardless of the text orientation and writing mode.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **89** | **66**  |   No   |  No  | No  |",
    },
    borderTopColor: {
      type: 'string',
      description:
        "The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    borderTopLeftRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-left-radius`** CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |',
    },
    borderTopRightRadius: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`border-top-right-radius`** CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.\n\n**Syntax**: `<length-percentage>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | |  **4**  |  **4**  |  **5**  | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |',
    },
    borderTopStyle: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'dashed',
            'dotted',
            'double',
            'groove',
            'hidden',
            'inset',
            'none',
            'outset',
            'ridge',
            'solid',
          ],
        },
      ],
      description:
        "The **`border-top-style`** CSS property sets the line style of an element's top `border`.\n\n**Syntax**: `<line-style>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |",
    },
    borderTopWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        'The **`border-top-width`** CSS property sets the width of the top border of an element.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    bottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **5** |',
    },
    boxDecorationBreak: {
      type: 'string',
      description:
        "The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.\n\n**Syntax**: `slice | clone`\n\n**Initial value**: `slice`\n\n|    Chrome    | Firefox |    Safari     |     Edge     | IE  | | :----------: | :-----: | :-----------: | :----------: | :-: | | **22** _-x-_ | **32**  | **6.1** _-x-_ | **79** _-x-_ | No  |",
    },
    boxShadow: {
      type: 'string',
      description:
        "The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.\n\n**Syntax**: `none | <shadow>#`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | | **10**  |  **4**  | **5.1** | **12** | **9** | | 1 _-x-_ |         | 3 _-x-_ |        |       |",
    },
    boxSizing: {
      type: 'string',
      description:
        'The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.\n\n**Syntax**: `content-box | border-box`\n\n**Initial value**: `content-box`\n\n| Chrome  | Firefox | Safari  |  Edge  |  IE   | | :-----: | :-----: | :-----: | :----: | :---: | | **10**  | **29**  | **5.1** | **12** | **8** | | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |',
    },
    breakAfter: {
      type: 'string',
      description:
        'The **`break-after`** CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |\n\n---',
    },
    breakBefore: {
      type: 'string',
      description:
        'The **`break-before`** CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  |   No   | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |\n\n---',
    },
    breakInside: {
      type: 'string',
      description:
        'The **`break-inside`** CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.\n\n**Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |\n\n---\n\n_Supported in Paged Media_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **50** | **65**  | **10** | **12** | **10** |\n\n---',
    },
    captionSide: {
      type: 'string',
      description:
        "The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.\n\n**Syntax**: `top | bottom | block-start | block-end | inline-start | inline-end`\n\n**Initial value**: `top`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |",
    },
    caretColor: {
      type: 'string',
      description:
        'The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as `<input>` or those with the `contenteditable` attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.\n\n**Syntax**: `auto | <color>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **53**  | **11.1** | **79** | No  |',
    },
    clear: {
      type: 'string',
      description:
        'The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.\n\n**Syntax**: `none | left | right | both | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    colorAdjust: {
      type: 'string',
      description:
        "The **`color-adjust`** CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.\n\n**Syntax**: `economy | exact`\n\n**Initial value**: `economy`\n\n|                Chrome                 | Firefox |                Safari                |                 Edge                  | IE  | | :-----------------------------------: | :-----: | :----------------------------------: | :-----------------------------------: | :-: | | **49** _(-webkit-print-color-adjust)_ | **48**  | **6** _(-webkit-print-color-adjust)_ | **79** _(-webkit-print-color-adjust)_ | No  |",
    },
    columnCount: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`column-count`** CSS property breaks an element's content into the specified number of columns.\n\n**Syntax**: `<integer> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
    },
    columnFill: {
      type: 'string',
      description:
        "The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.\n\n**Syntax**: `auto | balance | balance-all`\n\n**Initial value**: `balance`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **50** | **52**  |  **9**  | **12** | **10** | |        |         | 8 _-x-_ |        |        |",
    },
    columnGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        "The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|         Chrome         |        Firefox         |          Safari          |  Edge  | IE  | | :--------------------: | :--------------------: | :----------------------: | :----: | :-: | |         **66**         |         **61**         |         **12.1**         | **16** | No  | | 57 _(grid-column-gap)_ | 52 _(grid-column-gap)_ | 10.1 _(grid-column-gap)_ |        |     |\n\n---\n\n_Supported in Multi-column Layout_\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  | **10**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |\n\n---",
    },
    columnRuleColor: {
      type: 'string',
      description:
        'The **`column-rule-color`** CSS property sets the color of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |',
    },
    columnRuleStyle: {
      type: 'string',
      description:
        "The **`column-rule-style`** CSS property sets the style of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
    },
    columnRuleWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        "The **`column-rule-width`** CSS property sets the width of the line drawn between columns in a multi-column layout.\n\n**Syntax**: `<'border-width'>`\n\n**Initial value**: `medium`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **52**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
    },
    columnSpan: {
      type: 'string',
      description:
        'The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.\n\n**Syntax**: `none | all`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **50**  | **71**  |   **9**   | **12** | **10** | | 6 _-x-_ |         | 5.1 _-x-_ |        |        |',
    },
    columnWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`column-width`** CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the `column-width` value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.\n\n**Syntax**: `<length> | auto`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **50**  | **50**  |  **9**  | **12** | **10** | | 1 _-x-_ |         | 3 _-x-_ |        |        |",
    },
    contain: {
      type: 'string',
      description:
        'The **`contain`** CSS property allows an author to indicate that an element and its contents are, as much as possible, _independent_ of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.\n\n**Syntax**: `none | strict | content | [ size || layout || style || paint ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **52** | **69**  |   No   | **79** | No  |',
    },
    content: {
      type: 'string',
      description:
        'The **`content`** CSS property replaces an element with a generated value. Objects inserted using the `content` property are **anonymous replaced elements**_._\n\n**Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **8** |',
    },
    contentVisibility: {
      type: 'string',
      description:
        "The **`content-visibility`** CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work, including layout and painting, until it is needed, makes the initial page load much faster.\n\n**Syntax**: `visible | auto | hidden`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **85** |   No    |   No   | **85** | No  |",
    },
    counterIncrement: {
      type: 'string',
      description:
        'The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **3**  | **12** | **8** |',
    },
    counterReset: {
      type: 'string',
      description:
        'The **`counter-reset`** CSS property resets a CSS counter to a given value.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **2**  |  **1**  | **3**  | **12** | **8** |',
    },
    counterSet: {
      type: 'string',
      description:
        "The **`counter-set`** CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.\n\n**Syntax**: `[ <custom-ident> <integer>? ]+ | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **85** | **68**  |   No   | **85** | No  |",
    },
    emptyCells: {
      type: 'string',
      description:
        'The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.\n\n**Syntax**: `show | hide`\n\n**Initial value**: `show`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **8** |',
    },
    flexBasis: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-auto',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`flex-basis`** CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with `box-sizing`.\n\n**Syntax**: `content | <'width'>`\n\n**Initial value**: `auto`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **22**  |  **9**  | **12** | **11** | | 22 _-x-_ |         | 7 _-x-_ |        |        |",
    },
    flexDirection: {
      type: 'string',
      description:
        'The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).\n\n**Syntax**: `row | row-reverse | column | column-reverse`\n\n**Initial value**: `row`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    | | :------: | :-----: | :-----: | :----: | :------: | |  **29**  | **20**  |  **9**  | **12** |  **11**  | | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
    },
    flexGrow: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`flex-grow`** CSS property sets the flex grow factor of a flex item main size.\n\n**Syntax**: `<number>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |            IE            | | :------: | :-----: | :-------: | :----: | :----------------------: | |  **29**  | **20**  |   **9**   | **12** |          **11**          | | 22 _-x-_ |         | 6.1 _-x-_ |        | 10 _(-ms-flex-positive)_ |',
    },
    flexShrink: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`flex-shrink`** CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.\n\n**Syntax**: `<number>`\n\n**Initial value**: `1`\n\n|  Chrome  | Firefox | Safari  |  Edge  |   IE   | | :------: | :-----: | :-----: | :----: | :----: | |  **29**  | **20**  |  **9**  | **12** | **10** | | 22 _-x-_ |         | 8 _-x-_ |        |        |',
    },
    flexWrap: {
      type: 'string',
      description:
        'The **`flex-wrap`** CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.\n\n**Syntax**: `nowrap | wrap | wrap-reverse`\n\n**Initial value**: `nowrap`\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **29**  | **28**  |   **9**   | **12** | **11** | | 21 _-x-_ |         | 6.1 _-x-_ |        |        |',
    },
    float: {
      type: 'string',
      description:
        'The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).\n\n**Syntax**: `left | right | none | inline-start | inline-end`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    fontFeatureSettings: {
      type: 'string',
      description:
        'The **`font-feature-settings`** CSS property controls advanced typographic features in OpenType fonts.\n\n**Syntax**: `normal | <feature-tag-value>#`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   | | :------: | :------: | :-----: | :----: | :----: | |  **48**  |  **34**  | **9.1** | **15** | **10** | | 16 _-x-_ | 15 _-x-_ |         |        |        |',
    },
    fontKerning: {
      type: 'string',
      description:
        'The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.\n\n**Syntax**: `auto | normal | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **33** | **32**  |  **9**  | **79** | No  | |        |         | 6 _-x-_ |        |     |',
    },
    fontLanguageOverride: {
      type: 'string',
      description:
        'The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.\n\n**Syntax**: `normal | <string>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **34**  |   No   |  No  | No  | |        | 4 _-x-_ |        |      |     |',
    },
    fontOpticalSizing: {
      type: 'string',
      description:
        'The **`font-optical-sizing`** CSS property sets whether text rendering is optimized for viewing at different sizes.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **79** | **62**  | **11** | **17** | No  |',
    },
    fontSmooth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'large',
            'medium',
            'small',
            'x-large',
            'x-small',
            'xx-large',
            'xx-small',
            'xxx-large',
          ],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'always',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'never',
        },
      ],
      description:
        'The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.\n\n**Syntax**: `auto | never | always | <absolute-size> | <length>`\n\n**Initial value**: `auto`\n\n|              Chrome              |              Firefox               |              Safari              |               Edge                | IE  | | :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: | | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |',
    },
    fontSynthesis: {
      type: 'string',
      description:
        'The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.\n\n**Syntax**: `none | [ weight || style ]`\n\n**Initial value**: `weight style`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **34**  | **9**  |  No  | No  |',
    },
    fontVariantCaps: {
      type: 'string',
      description:
        'The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.\n\n**Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **52** | **34**  |   No   | **79** | No  |',
    },
    fontVariantEastAsian: {
      type: 'string',
      description:
        'The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.\n\n**Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **34**  |   No   | **79** | No  |',
    },
    fontVariantLigatures: {
      type: 'string',
      description:
        'The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.\n\n**Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`\n\n**Initial value**: `normal`\n\n|  Chrome  | Firefox | Safari  |  Edge  | IE  | | :------: | :-----: | :-----: | :----: | :-: | |  **34**  | **34**  | **9.1** | **79** | No  | | 31 _-x-_ |         | 7 _-x-_ |        |     |',
    },
    fontVariantNumeric: {
      type: 'string',
      description:
        'The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.\n\n**Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **52** | **34**  | **9.1** | **79** | No  |',
    },
    fontVariantPosition: {
      type: 'string',
      description:
        'The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.\n\n**Syntax**: `normal | sub | super`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **34**  |   No   |  No  | No  |',
    },
    fontVariationSettings: {
      type: 'string',
      description:
        'The **`font-variation-settings`** CSS property provides low-level control over variable font characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.\n\n**Syntax**: `normal | [ <string> <number> ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **62** | **62**  | **11** | **17** | No  |',
    },
    forcedColorAdjust: {
      type: 'string',
      description:
        'The **`forced-color-adjust`** CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.\n\n**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |                Edge                 |                 IE                  | | :----: | :-----: | :----: | :---------------------------------: | :---------------------------------: | |  n/a   |   No    |   No   | **79** _(-ms-high-contrast-adjust)_ | **10** _(-ms-high-contrast-adjust)_ |',
    },
    gridAutoColumns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |          Edge           |             IE              | | :----: | :-----: | :------: | :---------------------: | :-------------------------: | | **57** | **70**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ | |        |         |          | 12 _(-ms-grid-columns)_ |                             |',
    },
    gridAutoFlow: {
      type: 'string',
      description:
        'The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.\n\n**Syntax**: `[ row | column ] || dense`\n\n**Initial value**: `row`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridAutoRows: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.\n\n**Syntax**: `<track-size>+`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |         Edge         |            IE            | | :----: | :-----: | :------: | :------------------: | :----------------------: | | **57** | **70**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ | |        |         |          | 12 _(-ms-grid-rows)_ |                          |',
    },
    gridColumnEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
      ],
      description:
        'The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridColumnStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
      ],
      description:
        'The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridRowEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
      ],
      description:
        'The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridRowStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
            },
            {
              type: 'number',
            },
          ],
        },
      ],
      description:
        'The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.\n\n**Syntax**: `<grid-line>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridTemplateAreas: {
      type: 'string',
      description:
        'The **`grid-template-areas`** CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.\n\n**Syntax**: `none | <string>+`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |',
    },
    gridTemplateColumns: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'subgrid',
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |             IE              | | :----: | :-----: | :------: | :----: | :-------------------------: | | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |',
    },
    gridTemplateRows: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'max-content',
            },
            {
              type: 'string',
              const: 'min-content',
            },
          ],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
          const: 'subgrid',
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.\n\n**Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  |            IE            | | :----: | :-----: | :------: | :----: | :----------------------: | | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |',
    },
    hangingPunctuation: {
      type: 'string',
      description:
        'The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.\n\n**Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   No    | **10** |  No  | No  |',
    },
    height: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        'The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    hyphens: {
      type: 'string',
      description:
        'The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.\n\n**Syntax**: `none | manual | auto`\n\n**Initial value**: `manual`\n\n|  Chrome  | Firefox |    Safari     |     Edge     |      IE      | | :------: | :-----: | :-----------: | :----------: | :----------: | |  **55**  | **43**  | **5.1** _-x-_ | **12** _-x-_ | **10** _-x-_ | | 13 _-x-_ | 6 _-x-_ |               |              |              |',
    },
    imageOrientation: {
      type: 'string',
      description:
        'The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.\n\n**Syntax**: `from-image | <angle> | [ <angle>? flip ]`\n\n**Initial value**: `from-image`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **81** | **26**  | **13.1** | **81** | No  |',
    },
    imageResolution: {
      type: 'string',
      description:
        '**Syntax**: `[ from-image || <resolution> ] && snap?`\n\n**Initial value**: `1dppx`',
    },
    initialLetter: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'normal',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.\n\n**Syntax**: `normal | [ <number> <integer>? ]`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   No    | **9**  |  No  | No  |',
    },
    inlineSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'width'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **41**  | **12.1** | **79** | No  |",
    },
    inset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.\n\n**Syntax**: `<'top'>{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    insetBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    insetBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    insetBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    insetInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    insetInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline-end`** CSS property defines the logical inline end inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    insetInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`inset-inline-start`** CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'top'>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **63**  |   No   | n/a  | No  |",
    },
    isolation: {
      type: 'string',
      description:
        'The **`isolation`** CSS property determines whether an element must create a new stacking context.\n\n**Syntax**: `auto | isolate`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **41** | **36**  | **8**  | **79** | No  |',
    },
    justifyContent: {
      type: 'string',
      description:
        'The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.\n\n**Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n|  Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :------: | :-----: | :-------: | :----: | :----: | |  **52**  | **20**  |   **9**   | **12** | **11** | | 21 _-x-_ |         | 6.1 _-x-_ |        |        |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **52**  | **10.1** | **16** | No  |\n\n---',
    },
    justifyItems: {
      type: 'string',
      description:
        'The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.\n\n**Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]`\n\n**Initial value**: `legacy`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | | **52** | **20**  | **9**  | **12** | **11** |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **45**  | **10.1** | **16** | No  |\n\n---',
    },
    justifySelf: {
      type: 'string',
      description:
        'The CSS **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.\n\n**Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]`\n\n**Initial value**: `auto`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **45**  | **10.1** | **16** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox |  Safari  |  Edge  |      IE      | | :----: | :-----: | :------: | :----: | :----------: | | **57** | **45**  | **10.1** | **16** | **10** _-x-_ |\n\n---',
    },
    justifyTracks: {
      type: 'string',
      description:
        'The **`justify-tracks`** CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.\n\n**Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   |   n/a   |   No   |  No  | No  |',
    },
    left: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |',
    },
    lineBreak: {
      type: 'string',
      description:
        'The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.\n\n**Syntax**: `auto | loose | normal | strict | anywhere`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE    | | :-----: | :-----: | :-----: | :----: | :-----: | | **58**  | **69**  | **11**  | **14** | **5.5** | | 1 _-x-_ |         | 3 _-x-_ |        |         |',
    },
    lineHeightStep: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |   No    |   No   | n/a  | No  |',
    },
    listStyleImage: {
      type: 'string',
      description:
        'The **`list-style-image`** CSS property sets an image to be used as the list item marker.\n\n**Syntax**: `<url> | none`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    listStylePosition: {
      type: 'string',
      description:
        'The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.\n\n**Syntax**: `inside | outside`\n\n**Initial value**: `outside`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    listStyleType: {
      type: 'string',
      description:
        'The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\n\n**Syntax**: `<counter-style> | <string> | none`\n\n**Initial value**: `disc`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    marginBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    marginBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    marginBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    marginBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    marginInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'margin-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    marginInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|          Chrome          |        Firefox        |          Safari          |  Edge  | IE  | | :----------------------: | :-------------------: | :----------------------: | :----: | :-: | |          **69**          |        **41**         |         **12.1**         | **79** | No  | | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |",
    },
    marginInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        "The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.\n\n**Syntax**: `<'margin-left'>`\n\n**Initial value**: `0`\n\n|           Chrome           |         Firefox         |           Safari           |  Edge  | IE  | | :------------------------: | :---------------------: | :------------------------: | :----: | :-: | |           **69**           |         **41**          |          **12.1**          | **79** | No  | | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |",
    },
    marginLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    marginRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    marginTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    maskBorderMode: {
      type: 'string',
      description:
        'The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `alpha`',
    },
    maskBorderOutset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`mask-border-outset`** CSS property specifies the distance by which an element's mask border is set out from its border box.\n\n**Syntax**: `[ <length> | <number> ]{1,4}`\n\n**Initial value**: `0`",
    },
    maskBorderRepeat: {
      type: 'string',
      description:
        "The **`mask-border-repeat`** CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.\n\n**Syntax**: `[ stretch | repeat | round | space ]{1,2}`\n\n**Initial value**: `stretch`",
    },
    maskBorderSlice: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`mask-border-slice`** CSS property divides the image set by `mask-border-source` into regions. These regions are used to form the components of an element's mask border.\n\n**Syntax**: `<number-percentage>{1,4} fill?`\n\n**Initial value**: `0`",
    },
    maskBorderSource: {
      type: 'string',
      description:
        "The **`mask-border-source`** CSS property sets the source image used to create an element's mask border.\n\n**Syntax**: `none | <image>`\n\n**Initial value**: `none`",
    },
    maskBorderWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        "The **`mask-border-width`** CSS property sets the width of an element's mask border.\n\n**Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`\n\n**Initial value**: `auto`",
    },
    maskClip: {
      type: 'string',
      description:
        'The **`mask-clip`** CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.\n\n**Syntax**: `[ <geometry-box> | no-clip ]#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  | | :---------: | :-----: | :---------: | :----------: | :-: | | **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
    },
    maskComposite: {
      type: 'string',
      description:
        'The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.\n\n**Syntax**: `<compositing-operator>#`\n\n**Initial value**: `add`\n\n| Chrome | Firefox | Safari | Edge  | IE  | | :----: | :-----: | :----: | :---: | :-: | |   No   | **53**  |   No   | 18-79 | No  |',
    },
    maskImage: {
      type: 'string',
      description:
        'The **`mask-image`** CSS property sets the image that is used as mask layer for an element.\n\n**Syntax**: `<mask-reference>#`\n\n**Initial value**: `none`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  | | :---------: | :-----: | :---------: | :----: | :-: | | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |',
    },
    maskMode: {
      type: 'string',
      description:
        'The **`mask-mode`** CSS property sets whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.\n\n**Syntax**: `<masking-mode>#`\n\n**Initial value**: `match-source`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **53**  |   No   |  No  | No  |',
    },
    maskOrigin: {
      type: 'string',
      description:
        'The **`mask-origin`** CSS property sets the origin of a mask.\n\n**Syntax**: `<geometry-box>#`\n\n**Initial value**: `border-box`\n\n|   Chrome    | Firefox |   Safari    |     Edge     | IE  | | :---------: | :-----: | :---------: | :----------: | :-: | | **1** _-x-_ | **53**  | **4** _-x-_ | **79** _-x-_ | No  |',
    },
    maskPosition: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask-position`** CSS property sets the initial position, relative to the mask position layer set by `mask-origin`, for each defined mask image.\n\n**Syntax**: `<position>#`\n\n**Initial value**: `center`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  | | :---------: | :-----: | :-----------: | :----: | :-: | | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
    },
    maskRepeat: {
      type: 'string',
      description:
        'The **`mask-repeat`** CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.\n\n**Syntax**: `<repeat-style>#`\n\n**Initial value**: `no-repeat`\n\n|   Chrome    | Firefox |    Safari     |  Edge  | IE  | | :---------: | :-----: | :-----------: | :----: | :-: | | **1** _-x-_ | **53**  | **3.2** _-x-_ | **18** | No  |',
    },
    maskSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'auto',
            },
            {
              type: 'string',
              const: 'contain',
            },
            {
              type: 'string',
              const: 'cover',
            },
          ],
        },
        {
          type: 'string',
        },
      ],
      description:
        'The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.\n\n**Syntax**: `<bg-size>#`\n\n**Initial value**: `auto`\n\n|   Chrome    | Firefox |   Safari    |  Edge  | IE  | | :---------: | :-----: | :---------: | :----: | :-: | | **4** _-x-_ | **53**  | **4** _-x-_ | **18** | No  |',
    },
    maskType: {
      type: 'string',
      description:
        'The **`mask-type`** CSS property sets whether an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.\n\n**Syntax**: `luminance | alpha`\n\n**Initial value**: `luminance`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **24** | **35**  | **6.1** | **79** | No  |',
    },
    mathStyle: {
      type: 'string',
      description:
        'The `math-style` property indicates whether MathML equations should render with normal or compact height.\n\n**Syntax**: `normal | compact`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |   n/a   |   No   |  No  | No  |',
    },
    maxBlockSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        "The `**max-block-size**` CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by `writing-mode`. That is, if the writing direction is horizontal, then `max-block-size` is equivalent to `max-height`; if the writing direction is vertical, `max-block-size` is the same as `max-width`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **41**  | **12.1** | **79** | No  |",
    },
    maxHeight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-max-content',
        },
        {
          type: 'string',
          const: '-webkit-min-content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **18** |  **1**  | **1.3** | **12** | **7** |',
    },
    maxInlineSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        "The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the `max-width` or the `max-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'max-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |   Safari   |  Edge  | IE  | | :----: | :-----: | :--------: | :----: | :-: | | **57** | **41**  |  **12.1**  | **79** | No  | |        |         | 10.1 _-x-_ |        |     |",
    },
    maxLines: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'number',
        },
      ],
      description:
        '**Syntax**: `none | <integer>`\n\n**Initial value**: `none`',
    },
    maxWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-max-content',
        },
        {
          type: 'string',
          const: '-webkit-min-content',
        },
        {
          type: 'string',
          const: 'intrinsic',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.\n\n**Syntax**: `none | <length-percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **7** |',
    },
    minBlockSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **41**  | **12.1** | **79** | No  |",
    },
    minHeight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-max-content',
        },
        {
          type: 'string',
          const: '-webkit-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        'The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **3**  | **1.3** | **12** | **7** |',
    },
    minInlineSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
      ],
      description:
        "The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.\n\n**Syntax**: `<'min-width'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **41**  | **12.1** | **79** | No  |",
    },
    minWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-max-content',
        },
        {
          type: 'string',
          const: '-webkit-min-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'intrinsic',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'min-intrinsic',
        },
      ],
      description:
        'The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **7** |',
    },
    mixBlendMode: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          enum: [
            'color',
            'color-burn',
            'color-dodge',
            'darken',
            'difference',
            'exclusion',
            'hard-light',
            'hue',
            'lighten',
            'luminosity',
            'multiply',
            'normal',
            'overlay',
            'saturation',
            'screen',
            'soft-light',
          ],
        },
      ],
      description:
        "The **`mix-blend-mode`** CSS property sets how an element's content should blend with the content of the element's parent and the element's background.\n\n**Syntax**: `<blend-mode>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **41** | **32**  | **8**  | **79** | No  |",
    },
    motionDistance: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  | | :--------------------: | :-----: | :----: | :----: | :-: | |         **55**         | **72**  |   No   | **79** | No  | | 46 _(motion-distance)_ |         |        |        |     |',
    },
    motionPath: {
      type: 'string',
      description:
        "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  | | :----------------: | :-----: | :----: | :----: | :-: | |       **55**       | **72**  |   No   | **79** | No  | | 46 _(motion-path)_ |         |        |        |     |",
    },
    motionRotation: {
      type: 'string',
      description:
        'The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  | | :--------------------: | :-----: | :----: | :----: | :-: | |         **56**         | **72**  |   No   | **79** | No  | | 46 _(motion-rotation)_ |         |        |        |     |',
    },
    objectFit: {
      type: 'string',
      description:
        'The **`object-fit`** CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.\n\n**Syntax**: `fill | contain | cover | none | scale-down`\n\n**Initial value**: `fill`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **31** | **36**  | **10** | **16** | No  |',
    },
    objectPosition: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        "The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **31** | **36**  | **10** | **16** | No  |",
    },
    offsetAnchor: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        '**Syntax**: `auto | <position>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **79** | **72**  |   No   | **79** | No  |',
    },
    offsetDistance: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`offset-distance`** CSS property specifies a position along an `offset-path` for an element to be placed.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  | | :--------------------: | :-----: | :----: | :----: | :-: | |         **55**         | **72**  |   No   | **79** | No  | | 46 _(motion-distance)_ |         |        |        |     |',
    },
    offsetPath: {
      type: 'string',
      description:
        "The **`offset-path`** CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.\n\n**Syntax**: `none | ray( [ <angle> && <size> && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]`\n\n**Initial value**: `none`\n\n|       Chrome       | Firefox | Safari |  Edge  | IE  | | :----------------: | :-----: | :----: | :----: | :-: | |       **55**       | **72**  |   No   | **79** | No  | | 46 _(motion-path)_ |         |        |        |     |",
    },
    offsetRotate: {
      type: 'string',
      description:
        'The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  | | :--------------------: | :-----: | :----: | :----: | :-: | |         **56**         | **72**  |   No   | **79** | No  | | 46 _(motion-rotation)_ |         |        |        |     |',
    },
    offsetRotation: {
      type: 'string',
      description:
        'The **`offset-rotate`** CSS property defines the orientation/direction of the element as it is positioned along the `offset-path`.\n\n**Syntax**: `[ auto | reverse ] || <angle>`\n\n**Initial value**: `auto`\n\n|         Chrome         | Firefox | Safari |  Edge  | IE  | | :--------------------: | :-----: | :----: | :----: | :-: | |         **56**         | **72**  |   No   | **79** | No  | | 46 _(motion-rotation)_ |         |        |        |     |',
    },
    order: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `0`\n\n|  Chrome  | Firefox | Safari  |  Edge  |    IE    | | :------: | :-----: | :-----: | :----: | :------: | |  **29**  | **20**  |  **9**  | **12** |  **11**  | | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |',
    },
    orphans: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **25** |   No    | **1.3** | **12** | **8** |',
    },
    outlineColor: {
      type: 'string',
      description:
        "The **`outline-color`** CSS property sets the color of an element's outline.\n\n**Syntax**: `<color> | invert`\n\n**Initial value**: `invert`, for browsers supporting it, `currentColor` for the other\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
    },
    outlineOffset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`outline-offset`** CSS property sets the amount of space between an outline and the edge or border of an element.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **1**  | **1.5** | **1.2** | **15** | No  |',
    },
    outlineStyle: {
      type: 'string',
      description:
        "The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `auto | <'border-style'>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
    },
    outlineWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'medium',
            },
            {
              type: 'string',
              const: 'thick',
            },
            {
              type: 'string',
              const: 'thin',
            },
          ],
        },
      ],
      description:
        "The CSS **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the `border`.\n\n**Syntax**: `<line-width>`\n\n**Initial value**: `medium`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **1.5** | **1.2** | **12** | **8** |",
    },
    overflowAnchor: {
      type: 'string',
      description:
        '**Syntax**: `auto | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **56** | **66**  |   No   | **79** | No  |',
    },
    overflowBlock: {
      type: 'string',
      description:
        '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **69**  |   No   |  No  | No  |',
    },
    overflowClipBox: {
      type: 'string',
      description:
        'The **`overflow-clip-box`** CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the `overflow-clip-box-inline` and `overflow-clip-box-block` properties.\n\n**Syntax**: `padding-box | content-box`\n\n**Initial value**: `padding-box`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **29**  |   No   |  No  | No  |',
    },
    overflowInline: {
      type: 'string',
      description:
        '**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **69**  |   No   |  No  | No  |',
    },
    overflowWrap: {
      type: 'string',
      description:
        'The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.\n\n**Syntax**: `normal | break-word | anywhere`\n\n**Initial value**: `normal`\n\n|     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           | | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: | |     **23**      |      **49**       |     **6.1**     |      **18**      | **5.5** _(word-wrap)_ | | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |',
    },
    overflowX: {
      type: 'string',
      description:
        "The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **3.5** | **3**  | **12** | **5** |",
    },
    overflowY: {
      type: 'string',
      description:
        "The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.\n\n**Syntax**: `visible | hidden | clip | scroll | auto`\n\n**Initial value**: `visible`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  | **3.5** | **3**  | **12** | **5** |",
    },
    overscrollBehavior: {
      type: 'string',
      description:
        "The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.\n\n**Syntax**: `[ contain | none | auto ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  |   No   | **18** | No  |",
    },
    overscrollBehaviorBlock: {
      type: 'string',
      description:
        "The **`overscroll-behavior-block`** CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **77** | **73**  |   No   | **79** | No  |",
    },
    overscrollBehaviorInline: {
      type: 'string',
      description:
        "The **`overscroll-behavior-inline`** CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **77** | **73**  |   No   | **79** | No  |",
    },
    overscrollBehaviorX: {
      type: 'string',
      description:
        "The **`overscroll-behavior-x`** CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  |   No   | **18** | No  |",
    },
    overscrollBehaviorY: {
      type: 'string',
      description:
        "The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.\n\n**Syntax**: `contain | none | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **63** | **59**  |   No   | **18** | No  |",
    },
    paddingBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    paddingBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    paddingBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **69** | **41**  | **12.1** | **79** | No  |",
    },
    paddingBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    paddingInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | | **87** | **66**  |   No   | n/a  | No  |",
    },
    paddingInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|          Chrome           |        Firefox         |          Safari           |  Edge  | IE  | | :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: | |          **69**           |         **41**         |         **12.1**          | **79** | No  | | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |",
    },
    paddingInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        "The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.\n\n**Syntax**: `<'padding-left'>`\n\n**Initial value**: `0`\n\n|           Chrome            |         Firefox          |           Safari            |  Edge  | IE  | | :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: | |           **69**            |          **41**          |          **12.1**           | **79** | No  | | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |",
    },
    paddingLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`padding-left`** CSS property sets the width of the padding area to the left of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    paddingRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`padding-right`** CSS property sets the width of the padding area on the right of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    paddingTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`padding-top`** CSS property sets the height of the padding area on the top of an element.\n\n**Syntax**: `<length> | <percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    pageBreakAfter: {
      type: 'string',
      description:
        'The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |',
    },
    pageBreakBefore: {
      type: 'string',
      description:
        'The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.\n\n**Syntax**: `auto | always | avoid | left | right | recto | verso`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **1**  | **1.2** | **12** | **4** |',
    },
    pageBreakInside: {
      type: 'string',
      description:
        'The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.\n\n**Syntax**: `auto | avoid`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  | **19**  | **1.3** | **12** | **8** |',
    },
    perspective: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.\n\n**Syntax**: `none | <length>`\n\n**Initial value**: `none`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   | | :------: | :------: | :-----: | :----: | :----: | |  **36**  |  **16**  |  **9**  | **12** | **10** | | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
    },
    perspectiveOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          anyOf: [
            {
              type: 'string',
            },
            {
              type: 'number',
              const: 0,
            },
            {
              type: 'string',
              const: 'bottom',
            },
            {
              type: 'string',
              const: 'center',
            },
            {
              type: 'string',
              const: 'left',
            },
            {
              type: 'string',
              const: 'right',
            },
            {
              type: 'string',
              const: 'top',
            },
          ],
        },
      ],
      description:
        'The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.\n\n**Syntax**: `<position>`\n\n**Initial value**: `50% 50%`\n\n|  Chrome  | Firefox  | Safari  |  Edge  |   IE   | | :------: | :------: | :-----: | :----: | :----: | |  **36**  |  **16**  |  **9**  | **12** | **10** | | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |',
    },
    placeContent: {
      type: 'string',
      description:
        "The `**place-content**` CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.\n\n**Syntax**: `<'align-content'> <'justify-content'>?`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **45**  | **9**  | **79** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **59** | **53**  | **11** | **79** | No  |\n\n---",
    },
    position: {
      type: 'string',
      description:
        'The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.\n\n**Syntax**: `static | relative | absolute | sticky | fixed`\n\n**Initial value**: `static`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    quotes: {
      type: 'string',
      description:
        'The **`quotes`** CSS property sets how the browser should render quotation marks that are added using the `open-quotes` or `close-quotes` values of the CSS `content` property.\n\n**Syntax**: `none | auto | [ <string> <string> ]+`\n\n**Initial value**: depends on user agent\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **11** | **1.5** | **9**  | **12** | **8** |',
    },
    resize: {
      type: 'string',
      description:
        'The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.\n\n**Syntax**: `none | both | horizontal | vertical | block | inline`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **1**  |  **4**  | **3**  | **79** | No  |',
    },
    right: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  |  **1**  | **1**  | **12** | **5.5** |',
    },
    rotate: {
      type: 'string',
      description:
        'The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.\n\n**Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **72**  |   No   |  No  | No  |',
    },
    rowGap: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'normal',
        },
      ],
      description:
        "The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.\n\n**Syntax**: `normal | <length-percentage>`\n\n**Initial value**: `normal`\n\n---\n\n_Supported in Flex Layout_\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **84** | **63**  |   No   | **84** | No  |\n\n---\n\n_Supported in Grid Layout_\n\n|       Chrome        |       Firefox       |        Safari         |  Edge  | IE  | | :-----------------: | :-----------------: | :-------------------: | :----: | :-: | |       **66**        |       **61**        |       **12.1**        | **16** | No  | | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ | 10.1 _(grid-row-gap)_ |        |     |\n\n---",
    },
    rubyAlign: {
      type: 'string',
      description:
        'The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.\n\n**Syntax**: `start | center | space-between | space-around`\n\n**Initial value**: `space-around`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **38**  |   No   |  No  | No  |',
    },
    rubyMerge: {
      type: 'string',
      description:
        '**Syntax**: `separate | collapse | auto`\n\n**Initial value**: `separate`',
    },
    rubyPosition: {
      type: 'string',
      description:
        'The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).\n\n**Syntax**: `over | under | inter-character`\n\n**Initial value**: `over`\n\n| Chrome  | Firefox |    Safari     | Edge  | IE  | | :-----: | :-----: | :-----------: | :---: | :-: | | **84**  | **38**  | **6.1** _-x-_ | 12-79 | No  | | 1 _-x-_ |         |               |       |     |',
    },
    scale: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'none',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`scale`** CSS property allows you to specify scale transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <number>{1,3}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **72**  |   No   |  No  | No  |',
    },
    scrollBehavior: {
      type: 'string',
      description:
        'The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.\n\n**Syntax**: `auto | smooth`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **61** | **36**  |  n/a   | **79** | No  |',
    },
    scrollMargin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  | | :----: | :-----: | :---------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
    },
    scrollMarginBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollMarginBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-block-end` property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollMarginBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollMarginBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  | | :----: | :-----: | :----------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
    },
    scrollMarginInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.\n\n**Syntax**: `<length>{1,2}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **68**  |   No   |  No  | No  |',
    },
    scrollMarginInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-inline-end` property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollMarginInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-inline-start` property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollMarginLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  | | :----: | :-----: | :--------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
    },
    scrollMarginRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  | | :----: | :-----: | :---------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
    },
    scrollMarginTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  | | :----: | :-----: | :-------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
    },
    scrollPadding: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,4}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollPaddingBlock: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingBlockEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-block-end` property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingBlockStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-block-start` property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-bottom` property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollPaddingInline: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.\n\n**Syntax**: `[ auto | <length-percentage> ]{1,2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingInlineEnd: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-inline-end` property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingInlineStart: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-inline-start` property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  |   No   | **79** | No  |',
    },
    scrollPaddingLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-left` property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollPaddingRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The `scroll-padding-right` property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollPaddingTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`scroll-padding-top`** property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or simply to put more breathing room between a targetted element and the edges of the scrollport.\n\n**Syntax**: `auto | <length-percentage>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollSnapAlign: {
      type: 'string',
      description:
        'The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.\n\n**Syntax**: `[ none | start | end | center ]{1,2}`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **69** | **68**  | **11** | **79** | No  |',
    },
    scrollSnapMargin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.\n\n**Syntax**: `<length>{1,4}`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |            Safari             |  Edge  | IE  | | :----: | :-----: | :---------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin)_ | **79** | No  |',
    },
    scrollSnapMarginBottom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-bottom` property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |                Safari                |  Edge  | IE  | | :----: | :-----: | :----------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-bottom)_ | **79** | No  |',
    },
    scrollSnapMarginLeft: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari               |  Edge  | IE  | | :----: | :-----: | :--------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-left)_ | **79** | No  |',
    },
    scrollSnapMarginRight: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-right` property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |               Safari                |  Edge  | IE  | | :----: | :-----: | :---------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-right)_ | **79** | No  |',
    },
    scrollSnapMarginTop: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The `scroll-margin-top` property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.\n\n**Syntax**: `<length>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |              Safari               |  Edge  | IE  | | :----: | :-----: | :-------------------------------: | :----: | :-: | | **69** | **68**  | **11** _(scroll-snap-margin-top)_ | **79** | No  |',
    },
    scrollSnapStop: {
      type: 'string',
      description:
        'The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.\n\n**Syntax**: `normal | always`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **75** |   No    |   No   | **79** | No  |',
    },
    scrollSnapType: {
      type: 'string',
      description:
        'The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.\n\n**Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |     Edge     |      IE      | | :----: | :-----: | :-----: | :----------: | :----------: | | **69** |  39-68  | **11**  | **12** _-x-_ | **10** _-x-_ | |        |         | 9 _-x-_ |              |              |',
    },
    scrollbarColor: {
      type: 'string',
      description:
        'The **`scrollbar-color`** CSS property sets the color of the scrollbar track and thumb.\n\n**Syntax**: `auto | dark | light | <color>{2}`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **64**  |   No   |  No  | No  |',
    },
    scrollbarGutter: {
      type: 'string',
      description:
        "The **`scrollbar-gutter`** CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.\n\n**Syntax**: `auto | [ stable | always ] && both? && force?`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |  n/a   |   No    |   No   |  No  | No  |",
    },
    scrollbarWidth: {
      type: 'string',
      description:
        'The **`scrollbar-width`** property allows the author to set the maximum thickness of an element’s scrollbars when they are shown.\n\n**Syntax**: `auto | thin | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **64**  |   No   |  No  | No  |',
    },
    shapeImageThreshold: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`shape-image-threshold`** CSS property sets the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.\n\n**Syntax**: `<alpha-value>`\n\n**Initial value**: `0.0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **37** | **62**  | **10.1** | **79** | No  |',
    },
    shapeMargin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`shape-margin`** CSS property sets a margin for a CSS shape created using `shape-outside`.\n\n**Syntax**: `<length-percentage>`\n\n**Initial value**: `0`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **37** | **62**  | **10.1** | **79** | No  |',
    },
    shapeOutside: {
      type: 'string',
      description:
        'The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.\n\n**Syntax**: `none | <shape-box> || <basic-shape> | <image>`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **37** | **62**  | **10.1** | **79** | No  |',
    },
    tabSize: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`tab-size`** CSS property is used to customize the width of tab characters (U+0009).\n\n**Syntax**: `<integer> | <length>`\n\n**Initial value**: `8`\n\n| Chrome |   Firefox   | Safari  |  Edge  | IE  | | :----: | :---------: | :-----: | :----: | :-: | | **21** | **4** _-x-_ | **6.1** | **79** | No  |',
    },
    tableLayout: {
      type: 'string',
      description:
        'The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.\n\n**Syntax**: `auto | fixed`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **14** |  **1**  | **1**  | **12** | **5** |',
    },
    textAlign: {
      type: 'string',
      description:
        'The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.\n\n**Syntax**: `start | end | left | right | center | justify | match-parent`\n\n**Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    textAlignLast: {
      type: 'string',
      description:
        'The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.\n\n**Syntax**: `auto | start | end | left | right | center | justify`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **47** | **49**  |   No   | **12** | **5.5** |',
    },
    textCombineUpright: {
      type: 'string',
      description:
        'The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\n**Syntax**: `none | all | [ digits <integer>? ]`\n\n**Initial value**: `none`\n\n|           Chrome           | Firefox |              Safari              |                Edge                |                   IE                   | | :------------------------: | :-----: | :------------------------------: | :--------------------------------: | :------------------------------------: | |           **48**           | **48**  | **5.1** _(-webkit-text-combine)_ |               15-79                | **11** _(-ms-text-combine-horizontal)_ | | 9 _(-webkit-text-combine)_ |         |                                  | 12 _(-ms-text-combine-horizontal)_ |                                        |',
    },
    textDecorationColor: {
      type: 'string',
      description:
        'The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **36**  | **12.1** | **79** | No  | |        |         | 8 _-x-_  |        |     |',
    },
    textDecorationLine: {
      type: 'string',
      description:
        'The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.\n\n**Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`\n\n**Initial value**: `none`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **36**  | **12.1** | **79** | No  | |        |         | 8 _-x-_  |        |     |',
    },
    textDecorationSkip: {
      type: 'string',
      description:
        'The **`text-decoration-skip`** CSS property sets what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.\n\n**Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`\n\n**Initial value**: `objects`\n\n| Chrome | Firefox |  Safari  | Edge | IE  | | :----: | :-----: | :------: | :--: | :-: | | 57-64  |   No    | **12.1** |  No  | No  | |        |         | 8 _-x-_  |      |     |',
    },
    textDecorationSkipInk: {
      type: 'string',
      description:
        'The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.\n\n**Syntax**: `auto | all | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **64** | **70**  |   No   | **79** | No  |',
    },
    textDecorationStyle: {
      type: 'string',
      description:
        'The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.\n\n**Syntax**: `solid | double | dotted | dashed | wavy`\n\n**Initial value**: `solid`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **57** | **36**  | **12.1** | **79** | No  | |        |         | 8 _-x-_  |        |     |',
    },
    textDecorationThickness: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'from-font',
        },
      ],
      description:
        'The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **87** | **70**  | **12.1** | **87** | No  |',
    },
    textDecorationWidth: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'from-font',
        },
      ],
      description:
        'The **`text-decoration-thickness`** CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.\n\n**Syntax**: `auto | from-font | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **87** | **70**  | **12.1** | **87** | No  |',
    },
    textEmphasisColor: {
      type: 'string',
      description:
        'The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.\n\n**Syntax**: `<color>`\n\n**Initial value**: `currentcolor`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  | | :----------: | :-----: | :-----: | :----------: | :-: | | **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
    },
    textEmphasisPosition: {
      type: 'string',
      description:
        "The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.\n\n**Syntax**: `[ over | under ] && [ right | left ]`\n\n**Initial value**: `over right`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  | | :----------: | :-----: | :-----: | :----------: | :-: | | **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |",
    },
    textEmphasisStyle: {
      type: 'string',
      description:
        'The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.\n\n**Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`\n\n**Initial value**: `none`\n\n|    Chrome    | Firefox | Safari  |     Edge     | IE  | | :----------: | :-----: | :-----: | :----------: | :-: | | **25** _-x-_ | **46**  | **6.1** | **79** _-x-_ | No  |',
    },
    textIndent: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
      ],
      description:
        'The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.\n\n**Syntax**: `<length-percentage> && hanging? && each-line?`\n\n**Initial value**: `0`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **3** |',
    },
    textJustify: {
      type: 'string',
      description:
        'The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.\n\n**Syntax**: `auto | inter-character | inter-word | none`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |   IE   | | :----: | :-----: | :----: | :----: | :----: | |  n/a   | **55**  |   No   | **12** | **11** |',
    },
    textOrientation: {
      type: 'string',
      description:
        'The **`text-orientation`** CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.\n\n**Syntax**: `mixed | upright | sideways`\n\n**Initial value**: `mixed`\n\n|  Chrome  | Firefox |  Safari   |  Edge  | IE  | | :------: | :-----: | :-------: | :----: | :-: | |  **48**  | **41**  |  **14**   | **79** | No  | | 11 _-x-_ |         | 5.1 _-x-_ |        |     |',
    },
    textOverflow: {
      type: 'string',
      description:
        "The **`text-overflow`** CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.\n\n**Syntax**: `[ clip | ellipsis | <string> ]{1,2}`\n\n**Initial value**: `clip`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **1**  |  **7**  | **1.3** | **12** | **6** |",
    },
    textShadow: {
      type: 'string',
      description:
        'The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.\n\n**Syntax**: `none | <shadow-t>#`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE   | | :----: | :-----: | :-----: | :----: | :----: | | **2**  | **3.5** | **1.1** | **12** | **10** |',
    },
    textSizeAdjust: {
      type: 'string',
      description:
        'The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.\n\n**Syntax**: `none | auto | <percentage>`\n\n**Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **54** |   No    |   No   | **79** | No  |',
    },
    textTransform: {
      type: 'string',
      description:
        "The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.\n\n**Syntax**: `none | capitalize | uppercase | lowercase | full-width | full-size-kana`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    textUnderlineOffset: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`text-underline-offset`** CSS property sets the offset distance of an underline text decoration line (applied using `text-decoration`) from its original position.\n\n**Syntax**: `auto | <length> | <percentage> `\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  | IE  | | :----: | :-----: | :------: | :----: | :-: | | **87** | **70**  | **12.1** | **87** | No  |',
    },
    textUnderlinePosition: {
      type: 'string',
      description:
        "The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.\n\n**Syntax**: `auto | from-font | [ under || [ left | right ] ]`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox |  Safari  |  Edge  |  IE   | | :----: | :-----: | :------: | :----: | :---: | | **33** | **74**  | **12.1** | **12** | **6** | |        |         | 9 _-x-_  |        |       |",
    },
    top: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'auto',
        },
      ],
      description:
        'The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.\n\n**Syntax**: `<length> | <percentage> | auto`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **5** |',
    },
    touchAction: {
      type: 'string',
      description:
        "The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).\n\n**Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |    IE    | | :----: | :-----: | :----: | :----: | :------: | | **36** | **52**  | **13** | **12** |  **11**  | |        |         |        |        | 10 _-x-_ |",
    },
    transform: {
      type: 'string',
      description:
        'The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.\n\n**Syntax**: `none | <transform-list>`\n\n**Initial value**: `none`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE    | | :-----: | :-----: | :-------: | :----: | :-----: | | **36**  | **16**  |   **9**   | **12** | **10**  | | 1 _-x-_ |         | 3.1 _-x-_ |        | 9 _-x-_ |',
    },
    transformBox: {
      type: 'string',
      description:
        'The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.\n\n**Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`\n\n**Initial value**: `view-box`\n\n| Chrome | Firefox | Safari |  Edge  | IE  | | :----: | :-----: | :----: | :----: | :-: | | **64** | **55**  | **11** | **79** | No  |',
    },
    transformOrigin: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'center',
        },
        {
          type: 'string',
          const: 'left',
        },
        {
          type: 'string',
          const: 'right',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        "The **`transform-origin`** CSS property sets the origin for an element's transformations.\n\n**Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`\n\n**Initial value**: `50% 50% 0`\n\n| Chrome  |  Firefox  | Safari  |  Edge  |   IE    | | :-----: | :-------: | :-----: | :----: | :-----: | | **36**  |  **16**   |  **9**  | **12** | **10**  | | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |",
    },
    transformStyle: {
      type: 'string',
      description:
        'The **`transform-style`** CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.\n\n**Syntax**: `flat | preserve-3d`\n\n**Initial value**: `flat`\n\n|  Chrome  | Firefox  | Safari  |  Edge  | IE  | | :------: | :------: | :-----: | :----: | :-: | |  **36**  |  **16**  |  **9**  | **12** | No  | | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |',
    },
    transitionDelay: {
      type: 'string',
      description:
        "The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox | Safari  |  Edge  |   IE   | | :-----: | :-----: | :-----: | :----: | :----: | | **26**  | **16**  |  **9**  | **12** | **10** | | 1 _-x-_ | 4 _-x-_ | 4 _-x-_ |        |        |",
    },
    transitionDuration: {
      type: 'string',
      description:
        'The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.\n\n**Syntax**: `<time>#`\n\n**Initial value**: `0s`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
    },
    transitionProperty: {
      type: 'string',
      description:
        'The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.\n\n**Syntax**: `none | <single-transition-property>#`\n\n**Initial value**: all\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
    },
    transitionTimingFunction: {
      type: 'string',
      description:
        'The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.\n\n**Syntax**: `<easing-function>#`\n\n**Initial value**: `ease`\n\n| Chrome  | Firefox |  Safari   |  Edge  |   IE   | | :-----: | :-----: | :-------: | :----: | :----: | | **26**  | **16**  |   **9**   | **12** | **10** | | 1 _-x-_ | 4 _-x-_ | 3.1 _-x-_ |        |        |',
    },
    translate: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'none',
        },
      ],
      description:
        'The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.\n\n**Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`\n\n**Initial value**: `none`\n\n| Chrome | Firefox | Safari | Edge | IE  | | :----: | :-----: | :----: | :--: | :-: | |   No   | **72**  |   No   |  No  | No  |',
    },
    userSelect: {
      type: 'string',
      description:
        "The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.\n\n**Syntax**: `auto | text | none | contain | all`\n\n**Initial value**: `auto`\n\n| Chrome  | Firefox |   Safari    |     Edge     |      IE      | | :-----: | :-----: | :---------: | :----------: | :----------: | | **54**  | **69**  | **3** _-x-_ | **12** _-x-_ | **10** _-x-_ | | 1 _-x-_ | 1 _-x-_ |             |              |              |",
    },
    verticalAlign: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: 'baseline',
        },
        {
          type: 'string',
          const: 'bottom',
        },
        {
          type: 'string',
          const: 'middle',
        },
        {
          type: 'string',
          const: 'sub',
        },
        {
          type: 'string',
          const: 'super',
        },
        {
          type: 'string',
          const: 'text-bottom',
        },
        {
          type: 'string',
          const: 'text-top',
        },
        {
          type: 'string',
          const: 'top',
        },
      ],
      description:
        'The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box.\n\n**Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`\n\n**Initial value**: `baseline`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    widows: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`widows`** CSS property sets the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column.\n\n**Syntax**: `<integer>`\n\n**Initial value**: `2`\n\n| Chrome | Firefox | Safari  |  Edge  |  IE   | | :----: | :-----: | :-----: | :----: | :---: | | **25** |   No    | **1.3** | **12** | **8** |',
    },
    width: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
        },
        {
          type: 'number',
          const: 0,
        },
        {
          type: 'string',
          const: '-moz-max-content',
        },
        {
          type: 'string',
          const: '-moz-min-content',
        },
        {
          type: 'string',
          const: '-webkit-max-content',
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'string',
          const: 'intrinsic',
        },
        {
          type: 'string',
          const: 'max-content',
        },
        {
          type: 'string',
          const: 'min-content',
        },
        {
          type: 'string',
          const: 'min-intrinsic',
        },
      ],
      description:
        "The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.\n\n**Syntax**: `auto | <length> | <percentage> | min-content | max-content | fit-content(<length-percentage>)`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |",
    },
    willChange: {
      type: 'string',
      description:
        'The **`will-change`** CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.\n\n**Syntax**: `auto | <animateable-feature>#`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari  |  Edge  | IE  | | :----: | :-----: | :-----: | :----: | :-: | | **36** | **36**  | **9.1** | **79** | No  |',
    },
    wordBreak: {
      type: 'string',
      description:
        'The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.\n\n**Syntax**: `normal | break-all | keep-all | break-word`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari |  Edge  |   IE    | | :----: | :-----: | :----: | :----: | :-----: | | **1**  | **15**  | **3**  | **12** | **5.5** |',
    },
    wordWrap: {
      type: 'string',
      description:
        'The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.\n\n**Syntax**: `normal | break-word`\n\n**Initial value**: `normal`',
    },
    zIndex: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'auto',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.\n\n**Syntax**: `auto | <integer>`\n\n**Initial value**: `auto`\n\n| Chrome | Firefox | Safari |  Edge  |  IE   | | :----: | :-----: | :----: | :----: | :---: | | **1**  |  **1**  | **1**  | **12** | **4** |',
    },
    zoom: {
      anyOf: [
        {
          type: 'string',
          enum: ['-moz-initial', 'inherit', 'initial', 'revert', 'unset'],
        },
        {
          type: 'string',
          const: 'normal',
        },
        {
          type: 'string',
          const: 'reset',
        },
        {
          type: 'string',
        },
        {
          type: 'number',
        },
      ],
      description:
        'The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.\n\n**Syntax**: `normal | reset | <number> | <percentage>`\n\n**Initial value**: `normal`\n\n| Chrome | Firefox | Safari  |  Edge  |   IE    | | :----: | :-----: | :-----: | :----: | :-----: | | **1**  |   No    | **3.1** | **12** | **5.5** |',
    },
  },
  definitions: {},
}