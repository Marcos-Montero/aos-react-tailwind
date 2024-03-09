# Animate On Scroll (AOS) for TailwindCSS + React 🎨📜

The easiest way to animate your Tailwind React Components on scroll. Add life to your web app with simple yet powerful animations.

## 🚀 Getting Started

To use AOS for TailwindCSS + React, install the package via npm:

```bash
npm install aos-react-tailwind
```

## 📖 Basic Usage

First, import the `Aos` component from the package:

```typescript
import Aos from "aos-react-tailwind";
```

Then, wrap any component you want to animate inside `Aos` and define the `className` prop as a function that returns the TailwindCSS classes:

```typescript
const DogList = ({ dogs }) => (
  <>
    <h1>Dogs</h1>
    {dogs.map((dog) => (
      <Aos
        key={dog.id}
        className={(inView) => [
          "size-12 bg-purple-700 opacity-0 transition-opacity duration-500",
          inView && "opacity-1",
        ]}
      >
        <DogCard dog={dog} />
      </Aos>
    ))}
  </>
);
```

## ⚙️ Props

`Aos` accepts all props that `react-intersection-observer` does, along with the following:

- `className`: A function that receives `inView` (a boolean indicating if the element is in the viewport) and returns the class names to be applied.

## 🤝 Peer Dependencies

Make sure to have TailwindCSS set up in your project, as this package is designed to be used in conjunction with it.

## 🔧 Contributing

If you have suggestions for how AOS for TailwindCSS + React could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## 📄 License

AOS for TailwindCSS + React is [MIT licensed](LICENSE).

## 💡 Inspired By

This project is inspired by [AOS - Animate on scroll library](https://github.com/michalsnik/aos) .

## ✨ Show Your Support

Give a ⭐️ if this project helped you!
