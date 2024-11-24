The Odin Project Image Carousel assignment in Vanilla JavaScript with next and previous buttons, dot navigation and automatic slide advance.

# Slide Navigation Logic: How nextSlide() and previousSlide() Work

The image-carousel-module provides seamless horizontal navigation between slides using the nextSlide() and previousSlide() methods. These methods dynamically adjust the positions of all slides using CSS transform: translateX().

## Key Concepts

### Current Slide Tracking

A currentSlideIndex property is used to track which slide is currently in view. This index starts at 0 (the first slide) and is incremented or decremented by nextSlide() and previousSlide() respectively.

### Repositioning Slides

The slides are moved horizontally by recalculating their positions using the formula:

translateX(${(currentSlideIndex ± 1) \* -100}%)

This formula ensures each slide is aligned according to its index:

- Negative values (-100%, -200%, etc.) generally move slides to the left.
- Positive values (100%, 200%, etc.) generally move slides to the right.

### Special Case with Negative Values

A slide already far to the left (e.g., -200%) may move closer to the viewport when recalculated with a smaller negative value (e.g., -100%). Why this happens:

The formula recalculates each slide’s position relative to the new currentSlideIndex. Reducing the negative value (e.g., from -200% to -100%) brings the slide closer to the viewport because it is now less far to the left.

### Independent Position Calculation

Each slide's position is recalculated independently using its index and the formula. The style.transform property is updated to override any previous values, meaning the movement depends only on the current index, not the previous state.

## nextSlide(): Move to the Next Slide

The nextSlide() method shifts the slides leftward, bringing the next slide into view.

### How It Works

1. Loops through all slides.
2. Recalculates each slide’s position using:

translateX(${(currentSlideIndex + 1) \* -100}%)

3. Updates the currentSlideIndex by incrementing it by 1.

### Example

Before Calling nextSlide() (currentSlideIndex = 0):

Slide 1: translate(0%) (in view)
Slide 2: translate(100%) (right of viewport)
Slide 3: translate(200%) (further right)

After Calling nextSlide() (currentSlideIndex = 1):

Slide 1: translate(-100%) (moved left)
Slide 2: translate(0%) (in view)
Slide 3: translate(100%) (now closer to the viewport)

## previousSlide(): Move to the Previous Slide

The previousSlide() method shifts the slides rightward, bringing the previous slide into view.

### How It Works

1. Loops through all slides.
2. Recalculates each slide’s position using:

translateX(${(currentSlideIndex - 1) \* -100}%)

3. Updates the currentSlideIndex by decrementing it by 1.

### Example

Before Calling previousSlide() (currentSlideIndex = 1):

Slide 1: translate(-100%) (left of viewport)
Slide 2: translate(0%) (in view)
Slide 3: translate(100%) (right of viewport)

After Calling previousSlide() (currentSlideIndex = 0):

Slide 1: translate(0%) (in view)
Slide 2: translate(100%) (moved right)
Slide 3: translate(200%) (further right)

## Understanding Negative Transforms

Moving Slides "Right" While negative values like -100% typically move slides left, there’s an important exception:

If a slide is already positioned further left (e.g., -200%), reducing the negative value to -100% actually brings the slide closer to the viewport.

This happens because the slide’s position is recalculated relative to the new currentSlideIndex. A smaller negative value represents a position closer to the viewport, even though it is still to the left.

### Example

Slide 1 at -200% (two slides left of viewport):

Recalculated to -100% after calling previousSlide(). Result: Slide 1 appears to move "right" because it’s now one slide closer to the viewport.

## Visualizing the Movement

Each slide's position depends on its index relative to the currentSlideIndex:

| Slide Index | Position Formula                 | Result Position |
| ----------- | -------------------------------- | --------------- |
| n           | (currentSlideIndex - n) \* -100% | Slide alignment |

### Example

When currentSlideIndex = 1, the positions are:

Slide 1: translate(-100%)
Slide 2: translate(0%) (current slide)
Slide 3: translate(100%)

## Why This Logic Works

This approach recalculates all slide positions based solely on the currentSlideIndex:

- There’s no reliance on the previous transform value.
- It ensures smooth and predictable movement, regardless of the starting starting state of the slides.
- Both leftward and rightward movements are handled seamlessly based on the calculated math.
