import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({ setCount, count }) {
  return (
    <div className="button-container">
      <button
        className="count-btn"
        onClick={() => {
          const newCount = count - 1;
          if (newCount < 0) {
            return 0;
          } else {
            return setCount(count - 1);
          }
        }}
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        className="count-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}