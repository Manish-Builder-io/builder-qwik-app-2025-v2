import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(
  ({
    items,
    searchValue,
  }: {
    items: {
      question: string;
      answer: string;
    }[];
    searchValue?: string;
  }) => {
    // State to track the open FAQ index
    const openIndex = useSignal<number | null>(searchValue ? null : 0);

    const toggleDescription = $((index: number) => {
      if (openIndex.value === index) {
        openIndex.value = null;
        return;
      }

      openIndex.value = index;
    });

    // Filter questions based on searchValue
    const filteredQuestions = searchValue
      ? items.filter(
          (question) =>
            question.question
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            question.answer.toLowerCase().includes(searchValue.toLowerCase())
        )
      : items;

    return filteredQuestions.map(({ question, answer }, index) => (
      <div
        key={index}
        class={[
          "relative z-20 space-y-6 border-b border-gray-100 sm:static",
          openIndex.value === index
            ? "bg-[#F8F9FB]"
            : "mx-auto max-w-4xl bg-transparent px-5 py-9",
        ]}
      >
        <div
          class={
            openIndex.value === index ? "mx-auto max-w-4xl px-5 py-9" : null
          }
        >
          <div
            class={[
              "flex w-full cursor-pointer justify-between gap-5 text-left text-gray-900",
              openIndex.value === index ? "items-start" : "items-start",
            ]}
            aria-label={question}
            onClick$={() => toggleDescription(index)}
          >
            <div class="flex flex-col">
              <h2 class="text-caption-2">{question}</h2>
            </div>

            <span
              class={[
                "flex h-9 w-10 min-w-10 items-center justify-center rounded-xl border bg-white",
                openIndex.value === index
                  ? "border-[#662DFF] outline outline-4 outline-[#662DFF]/40"
                  : null,
              ]}
            >
            </span>
          </div>
          <div
            class={[
              "grid",
              openIndex.value === index
                ? "grid-rows-[1fr]"
                : "h-0 grid-rows-[0fr]",
            ]}
            style={{
              transition: "grid-template-rows 150ms ease-in-out",
            }}
          >
            <p
              class={[
                "mb-0 mt-4 overflow-hidden text-body-16 text-[#575D75] transition-opacity",
                openIndex.value === index ? "opacity-100" : "opacity-0",
              ]}
            >
              {answer}
            </p>
          </div>
        </div>
      </div>
    ));
  }
);
