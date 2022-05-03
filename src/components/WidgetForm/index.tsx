import { useState } from "react";

import { CloseButton } from "./CloseButton";
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";

import bugImageURL from "../../assets/icons/bug.svg";
import ideiaImageURL from "../../assets/icons/idea.svg";
import thoughtImageURL from "../../assets/icons/thought.svg";
import { FeedbackSuccessStep } from "./FeedbackSuccessStep.tsx";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um inseto",
    },
  },
  idea: {
    title: "Ideia",
    image: {
      source: ideiaImageURL,
      alt: "Imagem de uma lâmpada",
    },
  },
  other: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          ShinodaLabs
        </a>
      </footer>
    </div>
  );
}
