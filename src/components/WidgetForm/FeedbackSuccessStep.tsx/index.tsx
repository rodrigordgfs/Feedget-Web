import { CloseButton } from "../CloseButton";
import successImageURL from "../../../assets/icons/success.svg";

interface FeedbackTypeStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center pt-10 mb-2 w-[304px]">
        <img src={successImageURL} alt="Imagem de sucesso" />
      </div>
      <span className="text-xl mt-2">Agradecemos o feedback!</span>
      <button
        type="button"
        onClick={onFeedbackRestartRequested}
        className="py-2 mb-10 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1"
      >
        Quero enviar outro
      </button>
    </>
  );
}
